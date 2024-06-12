"use client";

import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import Image from 'next/image';
import { SignedIn, UserButton } from '@clerk/nextjs';
import { navLinks } from '@/constants';
import { usePathname } from 'next/navigation';

const MobileNav = () => {
    const pathname = usePathname(); 
    return (
        <header className="header">
            <Link href="/" className="flex items-center gap-2 md:py-2">
                <Image 
                    src="/assets/images/logo-text.svg" 
                    alt="logo"
                    width={180}
                    height={28} 
                />
            </Link>
            <nav className="flex gap-2">
                {/* <SignedIn> */}
                    <UserButton afterSignOutUrl="/" />
                    <Sheet>
                        <SheetTrigger>
                            <Image 
                                src="/assets/icons/menu.svg"
                                alt="menu"
                                width={32}
                                height={32}
                                className="cursor-pointer"
                            />
                        </SheetTrigger>
                        <SheetContent className="sheet-content sm:w-64">
                            <Image 
                                src="/assets/images/logo-text.svg"
                                alt="logo"
                                width={152}
                                height={23}
                            />
                            <ul className="header-nav_elements">
                                {navLinks.map((link) => {
                                    const isActive = link.route === pathname;

                                    return (
                                        <li key={link.route} className={`p-2 flex whitespace-nowrap ${isActive ? 'gradient-text' : 'text-dark-700'}`}>
                                            <Link href={link.route} className="sidebar-link flex items-center gap-2">
                                                <Image src={link.icon} alt={link.label} width={24} height={24} />
                                                <span className="sidebar-label">{link.label}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </SheetContent>
                    </Sheet>
                {/* </SignedIn> */}
            </nav>
        </header>
    );
}

export default MobileNav;
