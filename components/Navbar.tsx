"use client";

import Link from "next/link";
import Modal from "./Modal";
import { useState } from "react";

export default function Navbar() {

    const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state
    return (
        <>
            <div className="flex flex-row justify-between items-center">
                <nav className="navbar">
                    <Link href="/" className="btn btn-ghost text-xl">Home</Link>
                    <Link href="/onboarding" className="btn btn-ghost text-xl">Accounts</Link>
                    <Link href="/feed" className="btn btn-ghost text-xl">Feed</Link>
                    <Link href="/pawFiles" className="btn btn-ghost text-xl">Paw Files</Link>
                </nav>
                <button className="btn btn-primary mr-2" onClick={() => setIsModalOpen(true)}>
                    Upload Paw Pics
                </button>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}