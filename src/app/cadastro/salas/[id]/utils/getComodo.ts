import { ComodoType } from "@/@types/comodo"
import { api } from "@/lib/api"

export async function getComodo({id}:{id: string}){
    let comodo: ComodoType[] = await api.get("/api/comodo", {
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
    return comodo[0]
}