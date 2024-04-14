import { ClimaType } from "@/@types/clima"

export async function getClimas(){
    const url = `${process.env.HOST_URL}/api/clima`
    let climas = await fetch(url).then(res => res.json())
    return climas as ClimaType[]
}