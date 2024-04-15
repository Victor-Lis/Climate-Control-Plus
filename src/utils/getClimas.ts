import { ClimaType } from "@/@types/clima"
import { api } from "@/lib/api"

export async function getClimas(){
    let climas: ClimaType[] = await api.get("/clima")
    .then(function (response) {
        console.log(response)
        return response.data
    })
    .catch((e) => {
        console.log(e)
        return []
    })
    console.log(climas)
    return climas
}