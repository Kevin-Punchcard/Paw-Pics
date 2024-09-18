"use client";

import Link from "next/link";
import Image from "next/image";
import Modal from "./Modal";
import { useState } from "react";

export default function Navbar() {

    const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state
    return (
        <>
            <div className="flex flex-row justify-between items-center bg-lightYellow">
                <nav className="navbar">
                    <Link href="/" className="btn btn-ghost text-xl text-darkGreen">
                        <Image src={"/images/logo.svg"} width={40} height={40} alt="logo"/>
                    </Link>
                    <Link href="/onboarding" className="btn btn-ghost text-xl text-darkGreen">Accounts</Link>
                    <Link href="/feed" className="btn btn-ghost text-xl text-darkGreen">Feed</Link>
                    <Link href="/pawFiles" className="btn btn-ghost text-xl text-darkGreen">Paw Files</Link>
                </nav>
                <button className="btn btn-primary mr-2" onClick={() => setIsModalOpen(true)}>
                    Upload Paw Pics
                </button>
            </div>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    )
}