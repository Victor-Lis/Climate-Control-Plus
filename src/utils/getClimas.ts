import { ClimaType } from "@/@types/clima"
import { api } from "@/lib/api"

export async function getClimas(){
    let climas: ClimaType[] = await api.get("/api/clima")
    .then(function (response) {
        return response.data
    })
    .catch((e) => {
        console.log(e)
        return []
    })
    return climas
}