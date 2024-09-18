import Card from '@/components/Card';
import React from 'react';

export default function Feed() {
    const cards = [
        {
            title: "Grizz",
            body: "♂️ Male • 2 years old",
            backgroundImage: "/images/grizz-one.jpg",
        },
        {
            title: "Milo",
            body: "This is body 2",
            backgroundImage: "/images/home-hero.svg",
        },
        {
            title: "Title 3",
            body: "This is body 3",
            backgroundImage: "/images/dog-three.jpg",
        },
    ];

    return (
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
    );
}