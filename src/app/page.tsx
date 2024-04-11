import Button from "./components/Button";

export default function Home() {
  return (
    <main className="min-h-[100vh] bg-blue-950 flex items-center justify-center">
      <Button texto="Botão Home" alerta="Clicou no botão Home!"/>
    </main>
  );
}
