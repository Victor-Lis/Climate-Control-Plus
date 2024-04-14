import { getClimas } from "@/utils/getClimas";
import { getComodos } from "@/utils/getComodos";
import ClimaRow from "./components/ClimaRow";
import { ClimaType } from "@/@types/clima";
import RegistersHeader from "./components/RegistersHeader";

export default async function Home() {

  const comodos = await getComodos()
  const climas: ClimaType[] = await getClimas()
  
  return (
    <main className="min-h-[100vh] bg-zinc-950 flex items-center justify-center">
      <div className="w-11/12 h-5/6 bg-white p-2 rounded-md shadow-sm shadow-white">
        <RegistersHeader/>
        {climas?.map((clima) => {
          return ( <ClimaRow clima={clima}/> )
        })}
      </div>
    </main>
  );
}
