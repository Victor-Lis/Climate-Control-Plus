import { redirect } from "next/navigation";

export default async function Delete() {
  redirect("/")
  return (
    <main className="min-h-[100vh] bg-zinc-950 flex flex-col items-center justify-center">
      <h2 className="text-2xl text-white">Redirecionando</h2>
    </main>
  );
}
