import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { apiService } from "@/api/apiService";
import { appConfig } from "@/config/appConfig";
import { showToast } from "@/app/components/common/ToastProvider";
interface User {
    id: string;
    name: string;
    email: string;
}
interface AuthState {
    user: User | null;
    loading: boolean;
    error: string | null;
}

const initialState: AuthState = {
    user: null,
    loading: false,
    error: null,
};
export const login = createAsyncThunk<
    User, 
    { email: string; password: string }, 
    { rejectValue: string }
>(
    "auth/login",
    async (credentials, { rejectWithValue }) => {
        try {
            const data: any = await apiService.post("/api/auth/user/login", {
                data: credentials,
                successMsg: "Login successful!",
                showSuccessToast: true,
                showErrorToast: true
            });
            localStorage.setItem(appConfig.tokenKeys.access, data.accessToken);
            localStorage.setItem(appConfig.tokenKeys.refresh, data.refreshToken);

            return data.user;
        } catch (err: any) {
            const message = err.response?.data?.message || "Login failed";
            return rejectWithValue(message);
        }
    }
);

export const fetchProfile = createAsyncThunk<User, void, { rejectValue: string }>(
    "auth/profile",
    async (_, { rejectWithValue }) => {
        try {
            const data: User = await apiService.get("/auth/me", {
                showErrorToast: true
            });
            return data;
        } catch (err: any) {
            const message = err.response?.data?.message || "Failed to fetch profile";
            return rejectWithValue(message);
        }
    }
);
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
            localStorage.clear();
            showToast({ type: "info", message: "Logged out successfully 👋" });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(fetchProfile.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProfile.fulfilled, (state, action: PayloadAction<User>) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(fetchProfile.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
