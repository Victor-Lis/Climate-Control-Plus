import { ComodoType } from "@/@types/comodo"
import { api } from "@/lib/api"

export async function getComodos(){
    let comodos: ComodoType[] = await api.get("/api/comodo")
    .then(function (response) {
        return response.data
    })
    .catch((e) => {
        console.log(e)
        return []
    })
    return comodos
}