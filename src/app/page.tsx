import { getClimas } from "@/utils/getClimas";
import { getComodos } from "@/utils/getComodos";
import ClimaRow from "./components/ClimaRow";
import { ClimaType } from "@/@types/clima";
import Header from "./components/Header";
import RoomRow from "./components/RoomRow";
import { ComodoType } from "@/@types/comodo";

export default async function Home() {

  const climas: ClimaType[] = await getClimas()
  console.log(climas)
  const comodos: ComodoType[] = await getComodos()
  console.log(comodos)
  
  return (
    <main className="min-h-[100vh] bg-zinc-950 flex flex-col items-center justify-center">
      <div className="w-11/12 h-5/6 bg-white p-2 rounded-md shadow-sm shadow-white my-5">
        <Header title="Registros" route="/cadastro"/>
        {climas?.map((clima, id) => {
          return ( <ClimaRow clima={clima} key={id}/> )
        })}
      </div>
      <div className="w-11/12 h-5/6 bg-white p-2 rounded-md shadow-sm shadow-white my-5">
        <Header title="Cômodos" route="/cadastro"/>
        {comodos?.map((comodo, id) => {
          return ( <RoomRow comodo={comodo} key={id}/> )
        })}
      </div>
    </main>
  );
}
