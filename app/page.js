import Navbar from "@/components/Navbar/page";
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <div className="w-full bg-neutral-900 text-white shadow-lg">
        <Navbar />
      </div>

      <main className="flex flex-col items-center justify-center min-h-screen 
      bg-gradient-to-b from-neutral-900 via-neutral-950 to-black 
      px-6 text-center">

        <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
          Simplify Shared Expenses
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-xl">
          Track what you spend, split it fairly, and settle effortlessly — all in one seamless experience.
        </p>

        <Link href= '/LoginForm'><button className="mt-8 px-8 py-3 bg-white text-neutral-900
         hover:bg-neutral-200 font-medium rounded-lg transition 
         transform hover:-translate-y-1 hover:shadow-xl active:scale-95 cursor-pointer">
          Get Started
        </button></Link>

      </main>
    </>
  );
}
