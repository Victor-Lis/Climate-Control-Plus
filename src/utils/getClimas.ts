import { ClimaType } from "@/@types/clima"

export async function getClimas(){
    let climas = await fetch(`${process.env.HOST_URL}/api/clima`).then(res => res.json())
    return climas as ClimaType[]
}