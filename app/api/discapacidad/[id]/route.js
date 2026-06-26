// app/api/discapacidad/[id]/route.js
import { NextResponse } from 'next/server';
import DiscapacidadModel from '../../../../models/discapacidadModel';

// GET: Devuelve una discapacidad por ID
export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const discapacidad = await DiscapacidadModel.getById(id);
    if (!discapacidad) {
      return NextResponse.json({ error: 'Discapacidad no encontrada' }, { status: 404 });
    }
    return NextResponse.json(discapacidad);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al obtener discapacidad' }, { status: 500 });
  }
}

// PUT: Actualiza una discapacidad específica (UPDATE)
export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const { Discapacidad } = await request.json();
    await DiscapacidadModel.update(id, Discapacidad);
    return NextResponse.json({ message: 'Discapacidad actualizada con éxito' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al actualizar discapacidad' }, { status: 500 });
  }
}

// DELETE: Borra una discapacidad específica (DELETE)
export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await DiscapacidadModel.delete(id);
    return NextResponse.json({ message: 'Discapacidad borrada con éxito' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al borrar discapacidad' }, { status: 500 });
  }
}
