import { NextResponse } from 'next/server'
import prismaClient from '@/lib/prisma'
import { redirect } from 'next/navigation'

import { getCityWeather } from './getCityWeather'

export async function POST(request: Request){
    const { id_do_comodo, temperatura_do_comodo, humidade_do_comodo } = await request.json()

    if(!id_do_comodo || !temperatura_do_comodo || !humidade_do_comodo){
        return NextResponse.json({ error: "Precisamos do 'id_do_comodo', 'temperatura_do_comodo' e 'humidade_do_comodo'!" }, {status: 400})
    }

    try {
        let comodo = await prismaClient.comodo.findFirst({
            where: {
                id: id_do_comodo,
            }
        })
        if(!comodo){
            return NextResponse.json({ error: "Cômodo não encontrado!" }, {status: 400})
        }
        let climaData = await getCityWeather(comodo?.cidade as string)
        if(!climaData){
            return NextResponse.json({ error: "Clima externo não encontrado!" }, {status: 400})
        }
        let clima = await prismaClient.climas.create({
            data: {
                id_do_comodo,
                temperatura_do_comodo: parseFloat(temperatura_do_comodo),
                humidade_do_comodo: parseFloat(humidade_do_comodo),
                humidade_externa: climaData.main.humidity,
                temperatura_externa: climaData.main.temp,
            }
        })
        return NextResponse.json(clima)
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Clima não criado!" }, {status: 400})
    }
}

export async function DELETE(request: Request){
    const { id } = await request.json()

    if(!id){
        return NextResponse.json({ error: "Precisamos do 'id'!" }, {status: 400})
    }

    try {   
        let clima = await prismaClient.climas.findFirst({
            where: {
                id,
            }
        })
        return NextResponse.json(clima)
    } catch (error) {
        return NextResponse.json({ error: "Clima não criado!" }, {status: 400})
    }
}

