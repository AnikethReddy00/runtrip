import Navbar from "@/components/Navbar/page";
import { doSocialLogin } from "@/app/actions/index";
import { doLogout } from "@/app/actions/index"; // <-- must exist if logout logic added
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function LoginPage() {
  return (
    <>
      {/* Navbar Wrapper */}
      <div className="w-full bg-neutral-900 text-white shadow-lg flex items-center justify-between px-6 py-4">
        <Navbar />
      </div>

      {/* Background + Centered Card */}
      <main className="flex justify-center items-center min-h-screen bg-gradient-to-b from-neutral-900 via-neutral-950 to-black px-4">

        <div className="bg-neutral-900 border border-neutral-700 shadow-xl p-8 rounded-xl w-full max-w-md text-center">
          
          <h2 className="text-3xl font-semibold text-white mb-6">
            Sign In to Continue
          </h2>

          <form action={doSocialLogin} className="flex flex-col gap-4">

            <button
              className="flex items-center justify-center gap-3 bg-white text-neutral-900 p-3 rounded-lg hover:bg-neutral-200 transition font-medium"
              type="submit"
              name="action"
              value="google"
            >
              <FcGoogle size={22} />
              Sign in with Google
            </button>

            <button
              className="flex items-center justify-center gap-3 bg-neutral-800 text-white p-3 rounded-lg hover:bg-neutral-700 transition font-medium"
              type="submit"
              name="action"
              value="github"
            >
              <FaGithub size={22} />
              Sign in with GitHub
            </button>

          </form>
        </div>

      </main>
    </>
  );
}
