import cn from "@/lib/cn";
import React from "react";

interface BoxProps {
    children: React.ReactNode;
    className?: string;
}

export default function Box({ children, className }: BoxProps) {
    return (
        <div
            className={cn("bg-neutral-900 rounded-lg h-fit w-full", className)}
        >
            {children}
        </div>
    );
}
