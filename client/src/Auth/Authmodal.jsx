import React, { useState } from "react";
import SignUp from "../Auth/SignUp";
import SignIn from "../Auth/SignIn";

const AuthModal = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleAuth = () => {
    setIsSignUp((prev) => !prev);
  };

  return (
    <>
      {isOpen && (
        <dialog id="auth_modal" className="modal modal-open">
          <div className="modal-box bg-[#201F1E] text-white">
            <button
              onClick={onClose}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold text-center mb-4">
              {isSignUp ? "Sign Up" : "Sign In"}
            </h2>
            {isSignUp ? (
              <SignUp toggleAuth={toggleAuth} />
            ) : (
              <SignIn toggleAuth={toggleAuth} />
            )}
          </div>
        </dialog>
      )}
    </>
  );
};

export default AuthModal;
