"use client";
import { Fragment } from "react";
import { signInWithGoogle, signOut } from "../utils/firebase";
import { User } from "firebase/auth";
interface SignInProps {
  user: User | null;
}

export default function SignIn({ user }: SignInProps) {
  return (
    <Fragment>
      {user ? (
        <button
          className="inline-block bg-gray-50 border-solid border-gray-500 hover:border-transparent border-[1px] text-[#065fd4] px-5 py-2.5 rounded-3xl font-Roboto text-sm font-medium cursor-pointer hover:bg-[#bee0fd]"
          onClick={signOut}
        >
          Sign Out
        </button>
      ) : (
        <button
          className="inline-block bg-gray-50 border-solid border-gray-500 hover:border-transparent border-[1px] text-[#065fd4] px-5 py-2.5 rounded-3xl font-Roboto text-sm font-medium cursor-pointer hover:bg-[#bee0fd]"
          onClick={signInWithGoogle}
        >
          Sign In
        </button>
      )}
    </Fragment>
  );
}
