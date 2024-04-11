import { NextResponse } from 'next/server'
import prismaClient from '@/lib/prisma'
import { redirect } from 'next/navigation'

export async function GET(request: Request){

    const { searchParams } = new URL(request.url)

    try {
        return NextResponse.json("Sala Cadastrada!")
    } catch (error) {
        return NextResponse.json({ error: "Sala não cadastrada!" }, {status: 400})
    }
}