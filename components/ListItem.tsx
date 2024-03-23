"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FaPlay } from "react-icons/fa";

interface ListItemProps {
    image: string;
    name: string;
    href: string;
}

export default function ListItem({ image, name, href }: ListItemProps) {
    const router = useRouter();

    const handleClick = () => {
        // Add Authentication before redirecting

        router.push(href);
    };

    return (
        <button
            className="relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 hover:bg-neutral-100/20 transition pr-4"
            onClick={handleClick}
        >
            <div className="relative min-h-14 min-w-14">
                <Image src={image} alt="Image" fill className="object-cover" />
            </div>

            <p className="font-medium truncate py-2">{name}</p>

            <div className="absolute transition opacity-0 rounded-full flex items-center justify-center bg-green-500 p-3 drop-shadow-md right-3 group-hover:opacity-100 hover:scale-110">
                <FaPlay className="text-black" size={15} />
            </div>
        </button>
    );
}
