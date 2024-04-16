"use client";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";

export default function ButtonEdit({id, apiRoute}:{id: string, apiRoute: string}) {
  
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  async function handleEdit() {
    setLoading(true)
    router.push(`${apiRoute}${id}`)
    setLoading(false)
  }

  return (
    <div 
        onClick={() => !loading ? handleEdit() : console.log("click")} 
        className={`flex m-1 justify-around items-center p-1 rounded hover:scale-90 duration-300 hover:opacity-75 cursor-pointer ${loading ? "bg-zinc-500" : "bg-blue-500"}`}>
      {/* <h6 className="mx-2 text-white">Apagar</h6> */}
      <FiEdit size={18.5} color="#FFF" />
    </div>
  );
}
