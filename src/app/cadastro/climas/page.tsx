"use client";
import { useState, useEffect } from 'react'
import { SubmitHandler, useForm } from "react-hook-form";
import { ComodoType } from "@/@types/comodo";
import { Input } from "@/app/components/Input";
import { api } from '@/lib/api';
import { useRouter } from 'next/navigation';

export default function Clima() {

  const [comodos, setComodos] = useState<ComodoType[]>([])
  const router = useRouter()

  type Inputs = {
    temperatura: string;
    humidade: string;
    comodo: ComodoType;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await api.post("/api/clima", {
      "id_do_comodo": data.comodo,
      "temperatura_do_comodo": data.temperatura,
      "humidade_do_comodo": data.humidade
    })
    .then((res) => {
      console.log(res)
      router.replace("/")
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
          Cadastro do Clima
        </h1>
        <Input
          title="Temperatura do Cômodo"
          type="number"
          name="temperatura"
          placeholder="25°C"
          error={errors.temperatura?.message}
          rules={{ required: true }}
          register={register}
        />
        <Input
          title="Humidade do Cômodo"
          type="number"
          name="humidade"
          placeholder="68"
          rules={{ required: true }}
          error={errors.humidade?.message}
          register={register}
        />
        <div className="flex flex-col w-full justify-between items-center my-2">
          <h3 className="text-2xl text-zinc-950">Cômodo</h3>
          <select className="w-48 border-2 rounded-md h-10 px-2 text-black" {...register("comodo", { required: true })}>
            {comodos?.map((comodo) => {
              if(watch("comodo").id !== comodo.id){ 
                return <option value={comodo.id} key={comodo.id}>{comodo.nome}</option>;
              }
            })}
          </select>
        </div>
        <button className="w-32 bg-blue-500 py-1 px-3 mx-auto text-white hover:scale-90 hover:opacity-75 duration-300 mt-5 rounded">
          Salvar!
        </button>
      </form>
    </main>
  );
}
