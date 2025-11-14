import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

function App(){
  return (
    <>
      <ToastContainer autoClose={3000} />
      <RouterProvider router={router} />
    </>
  )
}

export default App;