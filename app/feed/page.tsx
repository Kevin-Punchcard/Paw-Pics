import Card from '@/components/Card';
import React from 'react';

export default function Feed() {
    const cardHeader = ["Dog Name 1", "Dog Name 2", "Dog Name 3", "Dog Name 4", "Dog Name 245", "Dog Name 4564563"];
    const cardBody = ["If a dog chews shoes whose shoes does he choose?", "Dog Card body 2", "Dog Card body 3", "Dog Card body 4", "Dog Card body 5", "Dog Card body 6"];

    return (
        <div className='flex flex-row gap-4 max-w-7xl flex-wrap justify-center'>
            {cardHeader.map((header, index) => (
                <Card
                    key={index}  // Assign a unique key to each card
                    title={header}  // Pass the respective title
                    body={cardBody[index]}  // Pass the respective body text
                />
            ))}
        </div>
    );
}