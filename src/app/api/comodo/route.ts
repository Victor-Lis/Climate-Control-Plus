import { NextResponse } from 'next/server'
import prismaClient from '@/lib/prisma'
import { redirect } from 'next/navigation'

export async function GET(request: Request){
    try {
        const comodos = await prismaClient.comodo.findMany({})
        comodos.sort((a,b) => a.nome.localeCompare(b.nome))
        return NextResponse.json(comodos, {status: 200})
    } catch (error) {
        return NextResponse.json({ error: "Erro ao pegar comodos!" }, {status: 400})
    }
}

export async function POST(request: Request){
    const { nome } = await request.json()

    if(!nome){
        return NextResponse.json({ error: "Nome não encontrado!" }, {status: 400})  
    }

    try {
        const comodo = await prismaClient.comodo.create({
            data: {
                nome,
            }
        })

        return NextResponse.json(comodo)
    } catch (error) {
        return NextResponse.json({ error: "Erro ao criar comodo!" }, {status: 400})
    }
}

export async function PUT(request: Request){
    const { searchParams } = new URL(request.url)

    const { nome, id } = await request.json()

    if(!nome || !id){
        return NextResponse.json({ error: "Nome ou ID não encontrados!" }, {status: 400})  
    }

    try {
        const comodo = await prismaClient.comodo.update({
            where: {
                id,
            },
            data: {
                nome,
            }
        })
        return NextResponse.json(comodo, {status: 200})
    } catch (error) {
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
        const comodo = await prismaClient.comodo.delete({
            where: {
                id,
            },
        })
        const comodos = await prismaClient.comodo.findMany({})
        comodos.sort((a,b) => a.nome.localeCompare(b.nome))
        return NextResponse.json(comodos, {status: 200})
    } catch (error) {
        return NextResponse.json({ error: "Erro ao apagar comodo!" }, {status: 400})
    }
}