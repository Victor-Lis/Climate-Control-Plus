import Link from "next/link";
import { TiWeatherShower } from "react-icons/ti";
import { MdRoom } from "react-icons/md";
import { FiCornerDownLeft } from "react-icons/fi";

export default async function Home() {
   return (
    <main className="min-h-[100vh] bg-zinc-950 flex items-center justify-center">
      <Link href={`${process.env.HOST_URL}`} className="text-2xl text-blue-500 bg-white mx-5 p-3 rounded-md shadow-sm shadow-white hover:scale-105 hover:opacity-75 duration-300 flex justify-center items-center">
        <FiCornerDownLeft size={30} color="#ff0066"/>
        Voltar
      </Link>
      <Link href={`${process.env.HOST_URL}/cadastro/climas`} className="text-2xl text-blue-500 bg-white mx-5 p-3 rounded-md shadow-sm shadow-white hover:scale-105 hover:opacity-75 duration-300 flex justify-center items-center">
        <TiWeatherShower size={30} color="#0066ff" className="mx-1"/>
        Climas
      </Link>
      <Link href={`${process.env.HOST_URL}/cadastro/salas`} className="text-2xl text-blue-500 bg-white mx-5 p-3 rounded-md shadow-sm shadow-white hover:scale-105 hover:opacity-75 duration-300 flex justify-center items-center">
        <MdRoom size={30} color="#0066ff"/>
        Salas
      </Link>
    </main>
  );
}
