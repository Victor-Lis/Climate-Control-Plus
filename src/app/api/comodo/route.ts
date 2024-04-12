import { NextResponse } from 'next/server'
import prismaClient from '@/lib/prisma'
import { redirect } from 'next/navigation'
import { ComodoType } from '@/@types/comodo'

function cleanData<T extends { [key: string]: {cidade: string, nome: string} }>(object: T){
    let keys = Object.keys(object)
    keys.map((key) => !object[key]? delete object[key]: '')
}

export async function GET(request: Request){
    try {
        const comodos: ComodoType[] = await prismaClient.comodo.findMany({})
        comodos.sort((a,b) => a.nome.localeCompare(b.nome))
        return NextResponse.json(comodos, {status: 200})
    } catch (error) {
        return NextResponse.json({ error: "Erro ao pegar comodos!" }, {status: 400})
    }
}

export async function POST(request: Request){
    const { nome, cidade } = await request.json()

    if(!nome || !cidade){
        return NextResponse.json({ error: "Nome ou Cidade não encontrados!" }, {status: 400})  
    }

    try {
        const comodo: ComodoType = await prismaClient.comodo.create({
            data: {
                nome,
                cidade,
            }
        })

        return NextResponse.json(comodo)
    } catch (error) {
        return NextResponse.json({ error: "Erro ao criar comodo!" }, {status: 400})
    }
}

export async function PUT(request: Request){
    const { searchParams } = new URL(request.url)

    const { nome, cidade, id } = await request.json()

    if(!id){
        return NextResponse.json({ error: "ID não encontrado!" }, {status: 400})  
    }

    let data = {
        nome, 
        cidade,
    }

    cleanData(data)

    try {
        const comodo: ComodoType = await prismaClient.comodo.update({
            where: {
                id,
            },
            data,
        })
        return NextResponse.json(comodo, {status: 200})
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Erro ao atualizar comodo!" }, {status: 400})
    }
}

export async function DELETE(request: Request){
    const { searchParams } = new URL(request.url)

    const { id } = await request.json()

    if(!id){
        return NextResponse.json({ error: "ID não encontrado!" }, {status: 400})  
    }

    try {
        const comodo: ComodoType = await prismaClient.comodo.delete({
            where: {
                id,
            },
        })
        const comodos: ComodoType[] = await prismaClient.comodo.findMany({})
        comodos.sort((a,b) => a.nome.localeCompare(b.nome))
        return NextResponse.json(comodos, {status: 200})
    } catch (error) {
        return NextResponse.json({ error: "Erro ao apagar comodo!" }, {status: 400})
    }
}