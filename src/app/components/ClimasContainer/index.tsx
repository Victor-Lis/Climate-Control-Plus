"use client"
import { ClimaType } from "@/@types/clima";
import { getClimas } from "@/utils/getClimas";
import { useEffect, useState } from "react";
import ClimaRow from "../ClimaRow";
import LineGraph from "../LineGraph";
export default function ClimasContainer() {
  const [climas, setClimas] = useState<ClimaType[]>([])
  const [labels, setLabels] = useState<string[]>([])
  const [temperaturaDoComodo, setTemperaturaDoComodo] = useState<number[]>([])
  const [temperaturaExterna, setTemperaturaExterna] = useState<number[]>([])
 
  const formatNum = (n: number) => n < 10 ? "0"+n : n
  const formatDate = (date: Date) => `${formatNum(date.getDate())}/${formatNum(date.getMonth())}/${date.getFullYear()}`

  useEffect(() => {
    async function handeGetClimas(){
      let datas = await getClimas()
      if(datas){
        setClimas(datas)
      }
      datas.map((data) => {
        setLabels((oldArray) => [formatDate(new Date(data.datetime)), ...oldArray])
        setTemperaturaDoComodo((oldArray) => [data.temperatura_do_comodo, ...oldArray])
        setTemperaturaExterna((oldArray) => [data.temperatura_externa, ...oldArray])
      })
    }
    handeGetClimas()
  }, [])

  return (
    <>
      {climas?.map((clima, id) => {
        return <ClimaRow clima={clima} key={id} />;
      })}
      <LineGraph data={{
        labels: labels,
        datasets: [
          {
            label: "Temperatura do Cômodo",
            borderColor: "rgb(75, 192, 192)",
            data: temperaturaDoComodo,
          },
          {
            label: "Temperatura Externa",
            borderColor: "rgb(75, 192, 77)",
            data: temperaturaExterna,
          },
        ]
      }}/>
    </>
  );
}
