"use client"
import { ComodoType } from "@/@types/comodo";
import { getComodos } from "@/utils/getComodos";
import { useEffect, useState } from "react";
import RoomRow from "../RoomRow";

export default function ComodosContainer() {
  const [comodos, setComodos] = useState<ComodoType[]>([]);

  useEffect(() => {
    async function handeGetComodos() {
      let data = await getComodos();
      if (data) {
        setComodos(data);
      }
    }
    handeGetComodos();
  }, []);

  return (
    <>
      {comodos?.map((comodo, id) => {
        return <RoomRow comodo={comodo} key={id} />;
      })}
    </>
  );
}
