import Image from "next/image";

interface CardProps {
    title: string;
    body: string;
}

export default function Card({ title, body }: CardProps) {
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <Image src={"/images/home-hero.svg"} height={200} width={200} alt="home-hero image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{body}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Donate</button>
                </div>
            </div>
        </div>
    );
}