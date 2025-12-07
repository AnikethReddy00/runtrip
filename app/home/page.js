import Image from "next/image";
import Logout from "@/components/Logout/page";
import { auth } from "@/auth";
import Navbar from "@/components/Navbar/page";
import { redirect } from "next/navigation";

const HomePage = async () => {
    const session = await auth();

    if (!session?.user) redirect("/");

    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-950 to-black px-6 text-center space-y-4">
                <h1 className="text-3xl my-2">
                    Welcome, {session?.user?.name}
                </h1>
                <Image
                    src={session?.user?.image}
                    alt={session?.user?.name}
                    width={72}
                    height={72}
                    className="rounded-full"
                />
                <Logout />
            </div>
        </div>
    );
};

export default HomePage; 