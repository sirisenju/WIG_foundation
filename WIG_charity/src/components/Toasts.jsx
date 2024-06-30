import React from "react";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Toasts({ message, type }) {
  // it takes 2 props, messsage nand the display type, like error and co....supply accordingly

  // example:
  {/* <Toasts message={"just a dummy message"} type="error"/> */}
  const showToast = () => {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      case "info":
        toast.info(message);
        break;
      case "warning":
        toast.warning(message);
        break;
      default:
        toast(message);
        break;
    }
  };

  useEffect(() => {
    if (message) {
      showToast();
    }
  }, [message, type]);
  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default Toasts;
