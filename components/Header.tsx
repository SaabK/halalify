"use client";

import cn from "@/lib/cn";
import { useRouter } from "next/navigation";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import Button from "./Button";

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

export default function Header({ children, className }: HeaderProps) {
    const router = useRouter();

    const handleLogout = () => {
        // Handle logout
    };

    return (
        <div
            className={cn(
                "h-fit bg-gradient-to-b from-emerald-800 p-6",
                className
            )}
        >
            <div className="w-full mb-4 flex items-center justify-between">
                <div className="hidden md:flex gap-x-2 items-center">
                    <button className="rounded-full  bg-black flex items-center justify-center hover:opacity-75 transition">
                        <RxCaretLeft
                            size={30}
                            className="text-white"
                            onClick={() => router.back()}
                        />
                    </button>

                    <button className="rounded-full  bg-black flex items-center justify-center hover:opacity-75 transition">
                        <RxCaretRight
                            size={30}
                            className="text-white"
                            onClick={() => router.forward()}
                        />
                    </button>
                </div>

                <div className="flex md:hidden gap-x-2 items-center">
                    <button className="rounded-full bg-white p-2 flex items-center justify-center hover:opacity-75 transition">
                        <HiHome className="text-black" size={20} />
                    </button>

                    <button className="rounded-full bg-white p-2 flex items-center justify-center hover:opacity-75 transition">
                        <BiSearch className="text-black" size={20} />
                    </button>
                </div>

                <div className="flex justify-between items-center gap-x-4">
                    <>
                        <div>
                            <Button className="bg-transparent text-neutral-300 font-medium">
                                Sign up
                            </Button>
                        </div>

                        <div>
                            <Button className="bg-white px-6 py-2">
                                Log in
                            </Button>
                        </div>
                    </>
                </div>
            </div>

            {children}
        </div>
    );
}
