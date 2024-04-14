import { FiEdit, FiTrash2 } from "react-icons/fi";
import { ClimaType } from "@/@types/clima";

export default function ClimaRow({ clima }: { clima: ClimaType }) {
  // console.log(clima)
  return (
    <div className="w-full p-2 flex shadow-md my-2">
        <div className="flex-1 flex flex-col justify-start items-start">
          <h2 className="text-1xl text-blue-500">Temperatura</h2>
          <div className="flex justify-around items-center">
            <h2 className="mx-2">Temperatura do Cômodo: </h2>
            <p>{clima.temperatura_do_comodo}C°</p>
          </div>
          <div className="flex justify-around items-center">
            <h2 className="mx-2">Temperatura Externa: </h2>
            <p>{clima.temperatura_externa}C°</p>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-start items-start">
          <h2 className="text-1xl text-blue-500">Humidade</h2>
          <div className="flex justify-around items-center">
            <h2 className="mx-2">Humidade do Cômodo: </h2>
            <p>{clima.humidade_do_comodo}C°</p>
          </div>
          <div className="flex justify-around items-center">
            <h2 className="mx-2">Humidade Externa: </h2>
            <p>{clima.humidade_externa}C°</p>
          </div>
        </div>
       <div className="flex flex-col justify-center items-center">
          <div className="flex my-1 justify-center items-center bg-blue-500 p-1 rounded hover:scale-90 duration-300 hover:opacity-75 cursor-pointer">
            {/* <h6 className="mx-2 text-white">Editar</h6> */}
            <FiEdit size={18.5} color="#FFF"/>
          </div>
          <div className="flex my-1 justify-around items-center bg-red-500 p-1 rounded hover:scale-90 duration-300 hover:opacity-75 cursor-pointer">
            {/* <h6 className="mx-2 text-white">Apagar</h6> */}
            <FiTrash2 size={18.5} color="#FFF"/>
          </div>
        </div>
    </div>
  );
}
