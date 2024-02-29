"use client";
import { useRouter } from "next/navigation";

const Main = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center">
      <p className="text-3xl my-5">Welcome To StreamLink </p>
      <div className="flex flex-col items-center">
        <p className="text-xl mb-5">Click Button below to start an instant livestream</p>
        <button
          className="drop-shadow-md border px-3 py-1.5 text-xl"
          onClick={() => router.push("/create")}
        >
          Stream now
        </button>
      </div>
    </div>
  );
};

export default Main;
