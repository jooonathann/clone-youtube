"use client";
import Image from "next/image";
import Link from "next/link";
import SignIn from "../signIn/page";
SignIn;
import { onAuthStateChangedHelper } from "../utils/firebase";
import { User } from "firebase/auth";
import { useEffect, useState } from "react";
import Upload from "./upload";
export default function Navbar() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const usubscribe = onAuthStateChangedHelper((user) => {
      setUser(user);
    });

    return () => usubscribe();
  });
  return (
    <div className="flex justify-between mx-2 my-2">
      <Link href={"/"}>
        <Image
          className=""
          src="/youtube-logo.svg"
          width={150}
          height={45}
          alt="Youtube Logo"
        />
      </Link>
      {user && <Upload />}
      <SignIn user={user} />
    </div>
  );
}
