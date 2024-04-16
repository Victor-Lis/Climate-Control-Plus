"use client";
import { useState, useEffect } from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { ComodoType } from "@/@types/comodo";
import { Input } from "@/app/components/Input";
import { api } from '@/lib/api';
import { useRouter } from 'next/navigation';

export default function Comodo() {

  const [comodos, setComodos] = useState<ComodoType[]>([])
  const router = useRouter()

  type Inputs = {
    nome: string;
    cidade: string;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await api.post("/api/comodo", {
      "nome": data.nome,
      "cidade": data.cidade
    })
    .then((res) => {
      router.replace("/")
      router.refresh()
    })
    .catch((e) => {
      console.log(e)
    })
  };

  async function getComodos() {
    let comodos: ComodoType[] = await api.get("/api/comodo")
      .then((res) => {
        return res.data
      })
      .catch((e) => {
        console.log(e);
        return [];
      });
    return comodos;
  }  

  useEffect(() => {
    async function handleGetComodos(){
      let data = await getComodos()
      if(data){
        setComodos(data)
      }
    }
    handleGetComodos()
  }, [])

  return (
    <main className="min-h-[100vh] bg-zinc-950 flex items-center justify-center">
      <form className="bg-white flex flex-col p-4 rounded-sm" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="w-full text-center mt-2 mb-3 text-blue-500 text-3xl">
          Cadastro do Cômodo
        </h1>
        <Input
          title="Nome do Cômodo"
          type="text"
          name="nome"
          placeholder="Sala 1"
          error={errors.nome?.message}
          rules={{ required: true }}
          register={register}
        />
        <Input
          title="Cidade do Cômodo"
          type="text"
          name="cidade"
          placeholder="Atibaia"
          rules={{ required: true }}
          error={errors.cidade?.message}
          register={register}
        />
        <button className="w-32 bg-blue-500 py-1 px-3 mx-auto text-white hover:scale-90 hover:opacity-75 duration-300 mt-5 rounded">
          Salvar!
        </button>
      </form>
    </main>
  );
}
