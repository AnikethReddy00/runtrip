import Image from "next/image";
import Navbar from "@/components/Navbar/page";
export default function Home() {
  return (
   <>
    <Navbar />
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Runtrip</h1>
      <p className="mt-4 text-lg">Your journey starts here!</p>
      <Image
        src="/images/running.jpg"
        alt="Running"
        width={500}
        height={300}
        className="rounded-lg mt-8"
      />
    </main>
   </>
  );
}
