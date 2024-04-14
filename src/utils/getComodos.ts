import { ComodoType } from "@/@types/comodo"

export async function getComodos(){
    let comodos = await fetch(`${process.env.HOST_URL}/api/comodo`).then(res => res.json())
    return comodos as ComodoType[]
}