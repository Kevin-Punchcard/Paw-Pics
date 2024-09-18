"use client";

import Card from '@/components/Card';
import Modal from '@/components/Modal';
import React, { useState } from 'react';

export default function Feed() {

    const cards = [
        {
            title: "Grizz",
            body: "♂️ Male • 6 years old",
            backgroundImage: "/images/paw-one.png",
        },
        {
            title: "Milo",
            body: "♂️ Male • 2 years old",
            backgroundImage: "/images/paw-two.png",
        },
        {
            title: "Spike",
            body: "♀️ Female • 4 years old",
            backgroundImage: "/images/paw-three.png",
        },
        {
            title: "Ratatouille",
            body: "♂️ Male • 10 years old",
            backgroundImage: "/images/paw-four.png",
        },
        {
            title: "Ron",
            body: "♂️ Male • 3 years old",
            backgroundImage: "/images/paw-five.png",
        },
        {
            title: "Jangles",
            body: "♀️ Female • 8 years old",
            backgroundImage: "/images/paw-six.png",
        },
        {
            title: "Puppo",
            body: "♂️ Male • 2 years old",
            backgroundImage: "/images/paw-seven.png",
        },
        {
            title: "Daisy",
            body: "♂️ Male • 7 years old",
            backgroundImage: "/images/paw-eight.png",
        },
        {
            title: "Rex",
            body: "♀️ Female • 1 year old",
            backgroundImage: "/images/paw-nine.png",
        },
        {
            title: "Snorlax",
            body: "♂️ Male • 8 years old",
            backgroundImage: "/images/paw-ten.png",
        },
    ];

    return (

        <>
            {/* Button to open modal */}
          

            <div className='flex flex-row gap-4 max-w-7xl flex-wrap justify-center'>
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        body={card.body}
                        backgroundImage={card.backgroundImage} // Pass the background image URL
                    />
                ))}
            </div>
        </>
    );
}