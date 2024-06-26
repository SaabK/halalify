"use client";

import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";

export default function Library() {
    const handleClick = () => {
        // Handle upload later
    };

    return (
        <div className="flex flex-col">
            <div className="flex items-center justify-between px-5 pt-4">
                <div className="inline-flex items-center gap-x-2">
                    <TbPlaylist size={26} className="text-neutral-400" />

                    <p className="text-neutral-400 font-medium">Your Library</p>
                </div>

                <AiOutlinePlus
                    size={20}
                    className="text-neutral-400 cursor-pointer hover:text-white transition"
                    onClick={handleClick}
                />
            </div>

            <div className="flex flex-col gap-y-2 mt-4 px-3">
                List of Recitations!
            </div>
        </div>
    );
}
