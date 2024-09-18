import Image from "next/image";


export default function Home() {
  return (
    <main className="flex flex-col gap-8 justify-center items-center bg-darkGreen">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex gap-4 flex-col justify-start w-1/2 h-full mt-40 ml-20">
          <h1 className="tk-roca text-megaXL text-beige">Paw Pics</h1>
          <p className="text-body text-beige tk-sora">Join a community dedicated to showcasing the cutest, fluffiest, and most adorable dog paws around. Whether you&apos;re a dog lover or a proud pet parent, this is the perfect place to share and enjoy the paws of your furry friends!</p>
        </div>

        <Image src={"/images/home-hero.svg"} height={600} width={600} alt="home-hero image" className="absolute right-[-0px] bottom-0"/>
      </div>
    </main>
  );
}
