import Card from '@/components/Card';
import React from 'react';

export default function Feed() {
    const cardHeader = ["title 1", "title 2", "title 3"];
    const cardBody = ["If a dog chews shoes whose shoes does he choose?", "body 2", "body 3"];

    return (
        <>
            {cardHeader.map((header, index) => (
                <Card
                    key={index}  // Assign a unique key to each card
                    title={header}  // Pass the respective title
                    body={cardBody[index]}  // Pass the respective body text
                />
            ))}
        </>
    );
}