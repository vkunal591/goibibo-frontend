import toast, { ToastOptions } from 'react-hot-toast';

type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
  type?: ToastType;
  message: string;
  duration?: number; // in milliseconds
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

export const showToast = ({
  type = 'info',
  message,
  duration = 3000,
  position = 'top-right',
}: ToastProps) => {
  const options: ToastOptions = {
    duration,
    position,
    style: {
      borderRadius: '8px',
      padding: '12px 16px',
      color: '#fff',
      fontWeight: 500,
      fontSize: '14px',
    },
  };

  switch (type) {
    case 'success':
      toast.success(message, { ...options, style: { ...options.style, backgroundColor: 'green' } });
      break;
    case 'error':
      toast.error(message, { ...options, style: { ...options.style, color: '#000' } });
      break;
    case 'info':
      toast(message, { ...options, style: { ...options.style, backgroundColor: 'blue' } });
      break;
    case 'warning':
      toast(message, { ...options, style: { ...options.style, backgroundColor: '#f59e0b' } });
      break;
    default:
      toast(message, { ...options, style: { ...options.style, backgroundColor: '#f59e0b' } });
  }
};
