// app/api/localidades/[id]/route.js
import { NextResponse } from 'next/server';
import LocalidadModel from '../../../../models/localidadModel';

// GET: Devuelve una localidad por ID (para precargar el formulario de edición)
export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const localidad = await LocalidadModel.getById(id);
    if (!localidad) {
      return NextResponse.json({ error: 'Localidad no encontrada' }, { status: 404 });
    }
    return NextResponse.json(localidad);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al obtener la localidad' }, { status: 500 });
  }
}

// PUT: Actualiza una localidad específica (UPDATE)
export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const { Cod_Localidad, Localidad } = await request.json();
    await LocalidadModel.update(id, Cod_Localidad, Localidad);
    return NextResponse.json({ message: 'Localidad actualizada con éxito' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al actualizar localidad' }, { status: 500 });
  }
}

// DELETE: Borra una localidad específica (DELETE)
export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await LocalidadModel.delete(id);
    return NextResponse.json({ message: 'Localidad borrada con éxito' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al borrar localidad' }, { status: 500 });
  }
}
