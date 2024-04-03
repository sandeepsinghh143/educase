import Link from "next/link";

export default function Home() {
  return (
    <main className=" w-[95%] lg:w-1/4 border m-auto p-4 min-h-[600px] flex flex-col justify-between mt-20 bg-[#F7F8F9]">
      <div className="w-[80%]">
        <h1 className="text-4xl font-semibold">Welcome to PopX</h1>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      </div>
      <div className="flex flex-col gap-4">
        <Link href={"/signup"} className="bg-[#6C25FF] p-3 text-white rounded-md text-center">Create Account</Link>
        <Link href={"/login"} className="bg-[#6C25FF4B] p-3 rounded-md text-center">Already Registered? Login</Link>
      </div>
    </main>
  );
}
