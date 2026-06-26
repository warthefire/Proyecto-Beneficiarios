// app/api/localidades/route.js
import { NextResponse } from 'next/server';
import LocalidadModel from '../../../models/localidadModel';

// GET: Devuelve todas las localidades (READ)
export async function GET() {
  try {
    const localidades = await LocalidadModel.getAll();
    return NextResponse.json(localidades);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al obtener localidades' }, { status: 500 });
  }
}

// POST: Crea una nueva localidad (CREATE)
export async function POST(request) {
  try {
    const { Cod_Localidad, Localidad } = await request.json();
    await LocalidadModel.create(Cod_Localidad, Localidad);
    return NextResponse.json({ message: 'Localidad creada con éxito' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al crear localidad' }, { status: 500 });
  }
}
