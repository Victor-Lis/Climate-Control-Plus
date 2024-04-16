import { ClimaType } from "@/@types/clima"
import { api } from "@/lib/api"

export async function getClima({id}:{id: string}){
    let climas: ClimaType[] = await api.get("/api/clima", {
        params: {
            id: id,
        }
    })
    .then(function (response) {
        return response.data
    })
    .catch((e) => {
        console.log(e)
        return []
    })
    return climas[0]
}