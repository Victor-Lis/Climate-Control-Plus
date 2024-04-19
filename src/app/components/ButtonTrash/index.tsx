"use client";
import { api } from "@/lib/api";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { FiTrash2 } from "react-icons/fi";

export default function ButtonTrash({id, apiRoute}:{id: string, apiRoute: string}) {
  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  async function handleDelete() {
    setLoading(true)
    await api.delete(apiRoute, {
        data: {
            "id": id,
        }
    })
    .then(res => {
      router.replace("/delete")
    })
    setLoading(false)
  }

  return (
    <div 
        onClick={() => !loading ? handleDelete() : console.log("click")} 
        className={`flex m-1 justify-around items-center p-1 rounded hover:scale-90 duration-300 hover:opacity-75 cursor-pointer ${loading ? "bg-zinc-500" : "bg-red-500"}`}>
      {/* <h6 className="mx-2 text-white">Apagar</h6> */}
      <FiTrash2 size={18.5} color="#FFF" />
    </div>
  );
}
