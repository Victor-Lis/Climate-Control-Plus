"use client"
import { ClimaType } from "@/@types/clima";
import { getClimas } from "@/utils/getClimas";
import { useEffect, useState } from "react";
import ClimaRow from "../ClimaRow";

export default function ClimasContainer() {
  const [climas, setClimas] = useState<ClimaType[]>([])

  useEffect(() => {
    async function handeGetClimas(){
        let data = await getClimas()
        if(data){
            setClimas(data)
        }
    }
    handeGetClimas()
  }, [])

  return (
    <>
      {climas?.map((clima, id) => {
        return <ClimaRow clima={clima} key={id} />;
      })}
    </>
  );
}
