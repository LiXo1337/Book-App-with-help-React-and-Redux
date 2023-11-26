import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearError,
  selectorErrorMassege,
} from "../../redux/slices/errorSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Error = () => {
  const errorMassege = useSelector(selectorErrorMassege);
  const dispatch = useDispatch();

  useEffect(() => {
    if (errorMassege) {
      toast.info(errorMassege);
      dispatch(clearError());
    }
  }, [errorMassege, dispatch]);

  return <ToastContainer position="top-right" autoClose={2000} />;
};

export default Error;
