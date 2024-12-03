"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";

export default function Profile() {
    const authContext = useContext(AuthContext);

    if (!authContext || !authContext.currentUser) {
        return <div>Please log in to see your profile.</div>;
    }

    const { currentUser } = authContext;

    return (
        <div>
            <h1>Welcome, {currentUser.displayName}</h1>
            <Image
                src={currentUser.photoURL || "/default-profile.png"}
                alt="Profile"
                width={100} // Specify width
                height={100} // Specify height
            />
            <p>Email: {currentUser.email}</p>
        </div>
    );
}
