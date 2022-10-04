import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [jump, setJump] = useState(false);

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
            <Link href='/games'> </Link>
        </nav>
    );
}
 
export default Navbar;