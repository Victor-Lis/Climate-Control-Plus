"use client"

export default function Button({texto, alerta}:{texto?: string, alerta?: string}) {

  function handleAlert(){
    alert(alerta)
  }

  return (
      <button 
        className=" 
        bg-blue-500 text-white py-2 px-10 mb-10
          hover:scale-105 hover:opacity-75 duration-300 cursor-pointer
        "
        onClick={handleAlert}
      >{texto}</button>
    );
  }
  