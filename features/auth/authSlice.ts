import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { apiService } from "@/api/apiService";
import { appConfig } from "@/config/appConfig";
import { showToast } from "@/app/components/common/ToastProvider";

// -------------------- Types --------------------
interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
}

interface ITokens {
  accessToken: string;
  refreshToken: string;
}

interface AuthState {
  user: User | null;
  tokens?: User | null;
  loading: boolean;
  error: string | null;
  initialized: boolean; // ✅ Add this
}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
  initialized: false,
};

// -------------------- Async Thunks --------------------

// ✅ LOGIN
export const login = createAsyncThunk<
  User,
  { email: string; password: string },
  { rejectValue: string }
>("auth/login", async (credentials, { rejectWithValue }) => {
  try {
    const data: any = await apiService.post("/api/auth/user/login", {
      data: credentials,
      successMsg: "Login successful!",
      showSuccessToast: true,
      showErrorToast: true,
    });

    if (data?.accessToken) {
      localStorage.setItem(appConfig.tokenKeys.access, data.accessToken);
      localStorage.setItem(appConfig.tokenKeys.refresh, data.refreshToken);
    }

    return data.user;
  } catch (err: any) {
    const message = err.response?.data?.message || "Login failed";
    return rejectWithValue(message);
  }
});

// ✅ REGISTER
export const registerUser = createAsyncThunk<
  User,
  { name: string; email: string; password: string },
  { rejectValue: string }
>("auth/register", async (userData, { rejectWithValue }) => {
  try {
    const data: any = await apiService.post("/api/auth/user/register", {
      data: userData,
      successMsg: "Registration successful! 🎉",
      showSuccessToast: true,
      showErrorToast: true,
    });
    if (data?.accessToken) {
      console.log(data);
      localStorage.setItem(appConfig.tokenKeys.access, data.accessToken);
      localStorage.setItem(appConfig.tokenKeys.refresh, data.refreshToken);
    }

    showToast({ type: "success", message: "Welcome aboard! ✈️" });
    return data.user;
  } catch (err: any) {
    const message = err.response?.data?.message || "Registration failed";
    return rejectWithValue(message);
  }
});

// ✅ FETCH PROFILE (with token guard)
export const fetchProfile = createAsyncThunk<
  User,
  void,
  { rejectValue: string }
>("auth/profile", async (_, { rejectWithValue }) => {
  try {
    const refreshToken = localStorage.getItem(appConfig.tokenKeys.refresh);
    if (!refreshToken) throw new Error("No token found"); // ✅ Prevent unnecessary loading

    const data: User = await apiService.post("/api/auth/refresh", {
      data: { refreshToken, type: "user" },
      showErrorToast: true,
    });
    return data;
  } catch (err: any) {
    const message = err.response?.data?.message || "Failed to fetch profile";
    return rejectWithValue(message);
  }
});

// -------------------- Slice --------------------
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.tokens = null;
      localStorage.clear();
      showToast({ type: "info", message: "Logged out successfully 👋" });
    },
    resetAuthState: (state) => {
      // ✅ Handy to reset manually if needed
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // LOGIN
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        state.initialized = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.initialized = true;
      })

      // REGISTER
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        state.initialized = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.initialized = true;
      })

      // FETCH PROFILE
      .addCase(fetchProfile.pending, (state) => {
        // ✅ Only set loading if token exists
        const token = localStorage.getItem(appConfig.tokenKeys.refresh);
        if (token) state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.tokens = action.payload;
        state.initialized = true;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.initialized = true;
      });
  },
});

export const { logout, resetAuthState } = authSlice.actions;
export default authSlice.reducer;
