// app/api/hechos/route.js
import { NextResponse } from 'next/server';
import HechosModel from '../../../models/hechosModel';

// Petición GET: Devuelve todos los registros de Hechos (READ) + los catálogos para los <select>
// Se devuelven juntos para que la Vista solo necesite hacer un fetch al cargar la página
export async function GET() {
  try {
    const hechos = await HechosModel.getAll();
    const catalogos = await HechosModel.getCatalogos();
    return NextResponse.json({ hechos, catalogos });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al obtener los datos de Hechos' }, { status: 500 });
  }
}

// Petición POST: Crea un nuevo registro en Hechos (CREATE)
export async function POST(request) {
  try {
    const data = await request.json();
    await HechosModel.create(data);
    return NextResponse.json({ message: 'Registro creado con éxito' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al crear el registro' }, { status: 500 });
  }
}
