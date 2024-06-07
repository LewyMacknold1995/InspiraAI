"use client";

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
// import { SignedIn, SignedOut } from '@clerk/nextjs';
import { navLinks } from '@/constants';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <aside className="sidebar">
            <div className="flex size-full flex-col gap-4">
                <Link href="/" className="sidebar-logo">
                    <Image 
                        src="/assets/images/logo-text.svg" 
                        alt="logo" 
                        width={180} 
                        height={28} 
                        priority={true} 
                    />
                </Link>

                <nav className="sidebar-nav">
                    <ul className="sidebar-nav_elements">
                        {navLinks.map((link) => {
                            const isActive = link.route === pathname;

                            return (
                                <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'}`}>
                                    <Link href={link.route}>
                                        {link.label}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    {/* Temporarily remove or comment out SignedIn and SignedOut */}
                    {/* <SignedIn> 
                        <ul className="sidebar-nav_elements">
                            {navLinks.map((link) => {
                                const isActive = link.route === pathname;

                                return (
                                    <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'}`}>
                                        <Link href={link.route}>
                                            {link.label}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </SignedIn>
                    <SignedOut>
                        <p>Please sign in to view the navigation links.</p>
                    </SignedOut> */}
                </nav>
            </div>
        </aside>
    );
};

export default Sidebar;
