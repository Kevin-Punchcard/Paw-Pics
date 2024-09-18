import Image from "next/image";

interface CardProps {
    title: string;
    body: string;
    backgroundImage: string;
}

export default function Card({ title, body, backgroundImage }: CardProps) {
    return (
        <div
            className="card w-96 shadow-xl relative overflow-hidden min-h-[20rem] bg-cover bg-center bg-gray-300"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="min-h-[25rem] flex flex-col justify-end">
                {/* Bottom section with background */}
                <div className="bg-slate-900/80 w-full p-6 z-10 flex flex-col gap-4 max-h-[7rem]">
                    <div className="flex flex-row justify-between items-center">
                        <div>
                            <h2 className="card-title tk-roca text-white font-extrabold text-xl">{title}</h2>
                            <p className="tk-sora text-white">{body}</p>
                        </div>
                        <div className="card-actions justify-end flex flex-row gap-2">
                            <button className="btn btn-primary btn-circle bg-beige">
                                <Image src={"/icons/star.svg"} width={20} height={20} alt={"star"} />
                            </button>
                            <button className="btn btn-primary btn-circle bg-mustard">
                                <Image src={"/icons/donate.svg"} width={20} height={20} alt={"star"} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}