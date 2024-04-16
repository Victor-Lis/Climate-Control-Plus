"use client"
import { useRouter } from "next/navigation";
import { FiPlusCircle } from "react-icons/fi";

export default function Header({title, route}:{title: string, route: string}) {

    const router = useRouter()

  return (
    <div className="px-2 flex justify-between items-center mt-2 mb-5">
      <h2 className="text-3xl">{title}</h2>
      <FiPlusCircle 
        size={35} color="#06bb00" className="hover:opacity-75 hover:scale-90 duration-300 cursor-pointer" 
        onClick={() => {router.push(route)}}
      />
    </div>
  );
}
