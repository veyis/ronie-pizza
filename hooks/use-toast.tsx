"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type ToastProps = {
  title?: string;
  description?: string;
  type?: "default" | "success" | "error" | "warning";
  duration?: number;
};

type ToastContextType = {
  toast: (props: ToastProps) => void;
  toasts: ToastProps[];
  dismissToast: (index: number) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const toast = (props: ToastProps) => {
    const newToast = {
      title: props.title,
      description: props.description,
      type: props.type || "default",
      duration: props.duration || 3000,
    };
    
    setToasts((prev) => [...prev, newToast]);
    
    // Auto dismiss
    if (newToast.duration) {
      setTimeout(() => {
        setToasts((prev) => prev.slice(1));
      }, newToast.duration);
    }
  };

  const dismissToast = (index: number) => {
    setToasts((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <ToastContext.Provider value={{ toast, toasts, dismissToast }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
}

function ToastContainer() {
  const context = useContext(ToastContext);
  
  if (!context) return null;
  
  const { toasts, dismissToast } = context;
  
  if (toasts.length === 0) return null;
  
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      {toasts.map((toast, index) => (
        <div
          key={index}
          className={`rounded-md p-4 shadow-md ${
            toast.type === "success"
              ? "bg-green-100 text-green-800"
              : toast.type === "error"
              ? "bg-red-100 text-red-800"
              : toast.type === "warning"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-white text-gray-800"
          }`}
        >
          {toast.title && <h4 className="font-medium">{toast.title}</h4>}
          {toast.description && <p>{toast.description}</p>}
          <button
            onClick={() => dismissToast(index)}
            className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  
  return context;
}

// Export a simple toast function for direct import
export const toast = (props: ToastProps) => {
  console.log("Toast:", props);
  // In a real implementation, this would use the context
  // For now, we'll just log to console as a fallback
  // This allows the component to compile even without the provider
  
  // Show a browser alert as a simple fallback
  if (typeof window !== "undefined") {
    const message = props.title 
      ? `${props.title}: ${props.description || ""}`
      : props.description || "Notification";
    alert(message);
  }
}; 