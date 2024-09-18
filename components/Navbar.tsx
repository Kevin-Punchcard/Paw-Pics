import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar">
                <Link href="/" className="btn btn-ghost text-xl">Home</Link>
                <Link href="/onboarding" className="btn btn-ghost text-xl">Accounts</Link>
                <Link href="/feed" className="btn btn-ghost text-xl">Feed</Link>
        </nav>
    )
}