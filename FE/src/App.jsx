import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify"; // Import ToastContainer here
import "react-toastify/dist/ReactToastify.css"; // Make sure the toast styles are imported
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="font-secFavFont bg-[#F8f8ff]">
      <AuthProvider>
        <Navbar />
        <main className="min-h-screen max-w-screen-2xl mx-auto px-4 py-6">
          <Outlet />
          <ToastContainer
            className="custom-toast-container"
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition:Bounce
          />{" "}
          {/* Ensure ToastContainer is rendered */}
        </main>
        <Footer />
      </AuthProvider>
    </div>
  );
}

export default App;
