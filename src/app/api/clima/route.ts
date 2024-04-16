import { NextResponse } from "next/server";
import prismaClient from "@/lib/prisma";
import { redirect } from "next/navigation";

import { getCityWeather } from "./getCityWeather";
import { ClimaType } from "@/@types/clima";

export async function POST(request: Request) {
  const { id_do_comodo, temperatura_do_comodo, humidade_do_comodo } =
    await request.json();

  if (!id_do_comodo || !temperatura_do_comodo || !humidade_do_comodo) {
    return NextResponse.json(
      {
        error:
          "Precisamos do 'id_do_comodo', 'temperatura_do_comodo' e 'humidade_do_comodo'!",
      },
      { status: 400 }
    );
  }

  try {
    let comodo = await prismaClient.comodo.findFirst({
      where: {
        id: id_do_comodo,
      },
    });
    if (!comodo) {
      return NextResponse.json(
        { error: "Cômodo não encontrado!" },
        { status: 400 }
      );
    }
    let climaData = await getCityWeather(comodo?.cidade as string);
    if (!climaData) {
      return NextResponse.json(
        { error: "Clima externo não encontrado!" },
        { status: 400 }
      );
    }
    let clima = await prismaClient.climas.create({
      data: {
        id_do_comodo,
        temperatura_do_comodo: parseFloat(temperatura_do_comodo),
        humidade_do_comodo: parseFloat(humidade_do_comodo),
        humidade_externa: climaData.main.humidity,
        temperatura_externa: climaData.main.temp,
      },
    });
    return NextResponse.json(clima);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Clima não criado!" }, { status: 400 });
  }
}

export async function PUT(request: Request) {
  const { id_do_comodo, temperatura_do_comodo, humidade_do_comodo, id } =
    await request.json();

  if (!id || (!id_do_comodo && !temperatura_do_comodo && !humidade_do_comodo)) {
    return NextResponse.json(
      {
        error:
          "Precisamos do 'id', e de 'id_do_comodo' ou 'temperatura_do_comodo' ou 'humidade_do_comodo'!",
      },
      { status: 400 }
    );
  }

  try {
    let comodo = await prismaClient.comodo.findFirst({
      where: {
        id: id_do_comodo,
      },
    });
    if (!comodo) {
      return NextResponse.json(
        { error: "Cômodo não encontrado!" },
        { status: 400 }
      );
    }
    let climaData = await getCityWeather(comodo?.cidade as string);
    if (!climaData) {
      return NextResponse.json(
        { error: "Clima externo não encontrado!" },
        { status: 400 }
      );
    }
    let clima = await prismaClient.climas.update({
      where: {
        id,
      },
      data: {
        id_do_comodo,
        temperatura_do_comodo: parseFloat(temperatura_do_comodo),
        humidade_do_comodo: parseFloat(humidade_do_comodo),
        humidade_externa: climaData.main.humidity,
        temperatura_externa: climaData.main.temp,
      },
    });
    return NextResponse.json(clima);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Clima não criado!" }, { status: 400 });
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  const id_do_comodo = searchParams.get("id_do_comodo");

  type Where = {
    id?: string,
    id_do_comodo?: string
  }

  let where: Where = {
    id: id as string,
    id_do_comodo: id_do_comodo as string,
  }

  if(!where["id"]){
    delete where.id
  }
  
  if(!where["id_do_comodo"]){
    delete where.id_do_comodo
  }

  try {
    let climas: ClimaType[] = await prismaClient.climas.findMany({
      where,
      include: {
        comodo: true,
      },
    });
    climas.sort((a, b) => b.datetime.getTime() - a.datetime.getTime());
    return NextResponse.json(climas);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Clima não criado!" }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  const { id } = await request.json();

  if (!id) {
    return NextResponse.json({ error: "Precisamos do 'id'!" }, { status: 400 });
  }

  try {
    let clima = await prismaClient.climas.delete({
      where: {
        id,
      },
      include: {
        comodo: true,
      },
    });
    return NextResponse.json(clima);
  } catch (error) {
    return NextResponse.json({ error: "Clima não criado!" }, { status: 400 });
  }
}
