// app/api/discapacidad/route.js
import { NextResponse } from 'next/server';
import DiscapacidadModel from '../../../models/discapacidadModel';

// GET: Devuelve todas las discapacidades (READ)
export async function GET() {
  try {
    const discapacidades = await DiscapacidadModel.getAll();
    return NextResponse.json(discapacidades);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al obtener discapacidades' }, { status: 500 });
  }
}

// POST: Crea una nueva discapacidad (INSERT)
export async function POST(request) {
  try {
    const { Discapacidad } = await request.json();
    await DiscapacidadModel.create(Discapacidad);
    return NextResponse.json({ message: 'Discapacidad creada con éxito' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al crear discapacidad' }, { status: 500 });
  }
}
