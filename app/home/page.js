import Image from "next/image";
import Logout from "@/components/Logout/page";
import { auth } from "@/auth";
import Navbar from "@/components/Navbar/page";
import { redirect } from "next/navigation";

const HomePage = async () => {
    const session = await auth();

    if (!session?.user) redirect("/");

    return (
        <div style={{ background: "#111", minHeight: "100vh", color: "white" }}>
            <Navbar />
            <div className="flex justify-between items-center bg-amber-500 p-4">
                <div style={{ padding: "20px", textAlign: "center" }}>
                    <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>
                        Welcome to RunTrip , {session?.user?.name}
                    </h1>
                </div>
                <div>
                    <Image
                        src={session?.user?.image}
                        alt={session?.user?.name}
                        width={80}
                        height={80}
                        className="rounded-full"
                    />
                </div>
            </div>
            <div className="flex">
                <div className="leftside bg-amber-300 h-[80vh] w-1/2 ">
                    <div>
                        <div className="flex justify-center pt-4">
                            <p className="text-5xl font-extrabold">Groups</p>
                        </div>
                        <div className="mt-20 flex justify-center bg-black text-white w-3/4 mx-auto p-4 rounded-lg cursor-pointer hover:bg-gray-800 transition">
                            <p>Create a Group -&gt;</p>
                        </div>
                        <div className="mt-20 flex justify-center bg-black text-white w-3/4 mx-auto p-4 rounded-lg cursor-pointer hover:bg-gray-800 transition">
                            <p>Join a Group -&gt;</p>
                        </div>
                    </div>
                    <div className="joined groups ">

                    </div>

                </div>
                <div className="rightside bg-blue-200 h-[80vh] w-1/2">
                    <div className="flex justify-center pt-4">
                        <p className="text-5xl font-extrabold">Transactions</p>
                    </div>
                </div>
            </div>


            <div style={{ marginTop: "40px", textAlign: "center" }}>

                <br />
                <Logout />
            </div>
        </div>
    );
};

export default HomePage;
