import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-bgGreen">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <h1 className="tk-roca mega-xl text-fontColorPrimary">Heading text</h1>
          <Image src={"/images/home-hero.svg"} height={400} width={400} alt="home-hero image"/>
        </div>
      </main>
    </div>
  );
}
