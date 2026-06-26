import { NextResponse } from 'next/server';
import SexoModel from '../../../models/sexoModel';

export async function GET() {
  try {
    const sexos = await SexoModel.getAll();
    return NextResponse.json(sexos);
  } catch (error) {
    return NextResponse.json({ error: 'Error al obtener sexos' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { Sexo } = await request.json();
    await SexoModel.create(Sexo);
    return NextResponse.json({ message: 'Sexo creado con éxito' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear sexo' }, { status: 500 });
  }
}
