// components/SignInButton.tsx
"use client";

import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/firebaseConfig";

export default function SignInButton() {
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("Signed in as:", result.user.displayName);
    } catch (error) {
      console.error("Sign-in error:", error);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      className="bg-blue-600 text-white px-4 py-2 rounded shadow"
    >
      Sign in with Google
    </button>
  );
}
