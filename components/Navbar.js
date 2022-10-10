import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    return (
        <nav>
            <div className="container navbar-container">
                <h1>Random</h1>
                <div className="navbar-links">
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About</Link>
                    <Link href='/games'>Games</Link>
                    <Link href='/leaderboards'>Leaderboards</Link>
                </div>
            </div>
            <Link href='/games/MarioRun'> </Link>
        </nav>
    );
}
 
export default Navbar;