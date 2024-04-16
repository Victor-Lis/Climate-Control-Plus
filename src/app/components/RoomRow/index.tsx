import { FiEdit } from "react-icons/fi";
import ButtonTrash from "../ButtonTrash";
import { ComodoType } from "@/@types/comodo";

export default function RoomRow({comodo}:{comodo: ComodoType}) {
  return (
    <div className="w-full p-2 shadow-md my-2">
      <div className="flex flex-wrap justify-center items-center">
        <div className="mx-2 my-2 flex-1 flex flex-col justify-start items-start">
          <h2 className="text-1xl text-blue-500">Cômodo</h2>
          <div className="flex justify-around items-center">
            <h2 className="mx-2">Nome do Cômodo: </h2>
            <p>{comodo.nome}</p>
          </div>
          <div className="flex justify-around items-center">
            <h2 className="mx-2">Cidade do Cômodo: </h2>
            <p>{comodo.cidade}</p>
          </div>
        </div>
        <div className="mx-2 my-2 flex flex-wrap justify-center items-center">
          <div className="flex m-1 justify-center items-center bg-blue-500 p-1 rounded hover:scale-90 duration-300 hover:opacity-75 cursor-pointer">
            {/* <h6 className="mx-2 text-white">Editar</h6> */}
            <FiEdit size={18.5} color="#FFF" />
          </div>
          <ButtonTrash id={comodo.id} apiRoute="/api/comodo"/>
        </div>
      </div>
    </div>
  );
}
