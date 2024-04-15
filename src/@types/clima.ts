import { ComodoType } from "./comodo";

export type ClimaType = {
    id: string,

    temperatura_do_comodo: number,
    temperatura_externa: number,

    humidade_do_comodo: number,
    humidade_externa: number,

    id_do_comodo: string,
    comodo: ComodoType,

    datetime: Date
}