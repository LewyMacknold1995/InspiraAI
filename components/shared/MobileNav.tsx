"use client"

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
                            <ul className="sidebar-nav_elements">
                                {navLinks.map((link) => {
                                    const isActive = link.route === pathname;

                                    return (
                                        <li key={link.route} className={`sidebar-nav_element group flex items-center gap-2 p-2 rounded-md ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700 hover:bg-gray-200'}`}>
                                            <Link href={link.route} className="sidebar-link flex items-center gap-2">
                                                <Image src={link.icon} alt={link.label} width={24} height={24} className={`${isActive ? 'brightness-200' : 'brightness-100'}`} />
                                                <span className="sidebar-label">{link.label}</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </SheetContent>
                    </Sheet>
                {/* </SignedIn>  */}
            </nav>
        </header>
    );
}

export default MobileNav;
