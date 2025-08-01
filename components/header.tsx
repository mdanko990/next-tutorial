import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.svg";
import classes from "./header.module.css";
import NavLink from "./navlink";

export default function Header() {
    return (
        <header style={{display: "flex", gap: "4rem", padding: "2rem", alignItems: "center"}}>
            <Link href="/">
            <div className={classes.logo}>
                <Image 
                    src={logoImg}
                    alt="logo"
                    width={60}
                />
            </div>
            </Link>

            <nav>
                <ul style={{display: "flex", gap: "2rem", listStyle: "none"}}>
                    <li>
                        <NavLink href="/about">About Us</NavLink>
                    </li>
                    <li>
                        <NavLink href="/blog">Blog</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}