import { createContext, useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { Toast } from "components";

const ToastContext = createContext({
  toasts: [],
  handleAddMoreToasts: () => {},
  handleRemoveToast: () => {},
});

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const handleAddMoreToasts = (newToast) => {
    setToasts((prevToasts) => [...prevToasts, { _id: uuid(), ...newToast }]);
  };

  const handleRemoveToast = (idToRemove) => {
    setToasts((prevToasts) =>
      prevToasts.filter(({ _id: prevId }) => prevId !== idToRemove)
    );
  };

  const value = { toasts, handleAddMoreToasts, handleRemoveToast };
  return (
    <ToastContext.Provider value={value}>
      {children}

      <ul
        className={`stacked-toast toast-fixed ${
          toasts.length > 0 ? "" : "d-none"
        }`}
      >
        {toasts.map(({ _id, msg, type }) => (
          <li key={_id} className="mt-1">
            <Toast
              msg={msg}
              type={type}
              handleToastClose={() => {
                handleRemoveToast(_id);
              }}
            />
          </li>
        ))}
      </ul>
    </ToastContext.Provider>
  );
};

const useToast = () => useContext(ToastContext);

export { ToastProvider, useToast };
