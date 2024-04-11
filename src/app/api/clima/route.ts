import { NextResponse } from 'next/server'
import prismaClient from '@/lib/prisma'
import { redirect } from 'next/navigation'

export async function GET(request: Request){

    const { searchParams } = new URL(request.url)

    try {
        return NextResponse.json("Clima Salvo!")
    } catch (error) {
        return NextResponse.json({ error: "Clima não criada!" }, {status: 400})
    }
}