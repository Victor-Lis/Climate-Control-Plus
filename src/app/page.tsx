import Header from "./components/Header";
import ClimasContainer from "./components/ClimasContainer";
import ComodosContainer from "./components/RoomsContainer";

export default async function Home() {
  
  return (
    <main className="min-h-[100vh] bg-zinc-950 flex flex-col items-center justify-center">
      <div className="w-11/12 h-5/6 bg-white p-2 rounded-md shadow-sm shadow-white my-5">
        <Header title="Registros" route="/cadastro"/>
        <ClimasContainer/>
      </div>
      <div className="w-11/12 h-5/6 bg-white p-2 rounded-md shadow-sm shadow-white my-5">
        <Header title="Cômodos" route="/cadastro"/>
        <ComodosContainer/>
      </div>
    </main>
  );
}
