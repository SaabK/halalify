import cn from "@/lib/cn";
import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface SidebarItemProps {
    icon: IconType;
    label: string;
    active?: boolean;
    href: string;
}

export default function SidebarItem({
    icon: Icon,
    label,
    active,
    href,
}: SidebarItemProps) {
    return (
        <Link
            href={href}
            className={cn(
                "flex flex-row h-auto items-center w-full gap-x-4 font-medium cursor-pointer text-neutral-400 hover:text-white transition py-1",
                active && "text-white"
            )}
        >
            <Icon size={26} />
            <p className="truncate w-full">{label}</p>
        </Link>
    );
}
