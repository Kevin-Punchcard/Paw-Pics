"use client";

import React from 'react'
import Image from 'next/image';

export default function PawFiles() {
    return (
        <div className='flex flex-row'>
            <div className="drawer drawer-open">
                <div className="h-[90vh] bg-light">
                    <ul className="menu bg-light text-base-content w-70 p-4">
                        <li>
                            <a className='hover:bg-lightYellow'>
                                <Image src={"/icons/person.svg"} height={20} width={20} alt="home-hero image" />
                                Human Profile
                            </a>
                        </li>
                        <li>
                            <a className='hover:bg-lightYellow'>
                                <Image src={"/icons/heart-paw.svg"} height={20} width={20} alt="home-hero image" />
                                My Pawfiles
                            </a>
                        </li>
                        <li>
                            <a className='hover:bg-lightYellow'>
                                <Image src={"/icons/paw.svg"} height={20} width={20} alt="home-hero image" />
                                Liked Paws
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}