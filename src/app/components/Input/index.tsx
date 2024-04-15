"use client"

import { RegisterOptions, UseFormRegister } from 'react-hook-form'

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
  rules?: RegisterOptions;
  title: string
}

export function Input({ name, placeholder, type, register, rules, error, title }: InputProps) {
  return (
    <div className='flex flex-col w-full justify-between items-center my-2'>
      <h3 className="text-2xl text-zinc-950">{title}</h3>
      <input
        className="w-48 border-2 rounded-md h-10 px-2"
        placeholder={placeholder}
        type={type}
        {...register(name, rules)}
        id={name}
      />
      {error && <p className="text-red-500 my-1">{error}</p>}
    </div>
  )
}