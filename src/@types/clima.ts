import { ComodoType } from "./comodo";

export type Clima = {
    id: string;

    temperatura_do_comodo: number;
    temperatura_externa: number;

    humidade_do_comodo: number;
    humidade_externa: number;

    id_do_comodo: number;
    comodo: ComodoType
}