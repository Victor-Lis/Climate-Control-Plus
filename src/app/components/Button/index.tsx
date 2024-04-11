"use client"

export default function Button() {

  function handleAlert(){
    alert("Clicou!")
  }

  return (
      <button 
        className="bg-blue-500 py-2 px-10 hover:scale-105 hover:opacity-75 duration-300 cursor-pointer"
        onClick={handleAlert}
      >Clique me!</button>
    );
  }
  