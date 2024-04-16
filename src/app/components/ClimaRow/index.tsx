import { FiEdit, FiTrash2 } from "react-icons/fi";
import { ClimaType } from "@/@types/clima";

export default function ClimaRow({ clima }: { clima: ClimaType }) {

  const formatNum = (number: number) => number < 10? "0"+number : number    
  const formatDate = (Date: Date) => `${formatNum(Date.getDate())}/${formatNum(Date.getMonth()+1)}/${Date.getFullYear()}`    
  
  return (
    <div className="w-full p-2 shadow-md my-2">
      <div className="flex justify-start align-baseline">
        <h2 className="text-1xl text-blue-500">Data </h2>
        <p className="mx-2">{formatDate(new Date(clima.datetime))}</p>
      </div>
      <div className="flex flex-wrap justify-center items-center">
        <div className="mx-2 my-2 flex-1 flex flex-col justify-start items-start">
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
        <div className="mx-2 my-2 flex-1 flex flex-col justify-start items-start">
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
        <div className="mx-2 my-2 flex-1 flex flex-col justify-start items-start">
          <h2 className="text-1xl text-blue-500">Cômodo</h2>
          <div className="flex justify-around items-center">
            <h2 className="mx-2">Nome do Cômodo: </h2>
            <p>{clima.comodo.nome}</p>
          </div>
          <div className="flex justify-around items-center">
            <h2 className="mx-2">Cidade do Cômodo: </h2>
            <p>{clima.comodo.cidade}</p>
          </div>
        </div>
        <div className="mx-2 my-2 flex flex-wrap justify-center items-center">
          <div className="flex m-1 justify-center items-center bg-blue-500 p-1 rounded hover:scale-90 duration-300 hover:opacity-75 cursor-pointer">
            {/* <h6 className="mx-2 text-white">Editar</h6> */}
            <FiEdit size={18.5} color="#FFF" />
          </div>
          <div className="flex m-1 justify-around items-center bg-red-500 p-1 rounded hover:scale-90 duration-300 hover:opacity-75 cursor-pointer">
            {/* <h6 className="mx-2 text-white">Apagar</h6> */}
            <FiTrash2 size={18.5} color="#FFF" />
          </div>
        </div>
      </div>
    </div>
  );
}
