// app/api/hechos/[id]/route.js
import { NextResponse } from 'next/server';
import HechosModel from '../../../../models/hechosModel';

// Petición GET: Devuelve un solo registro (usado para precargar el formulario de edición)
export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const registro = await HechosModel.getById(id);
    if (!registro) {
      return NextResponse.json({ error: 'Registro no encontrado' }, { status: 404 });
    }
    return NextResponse.json(registro);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al obtener el registro' }, { status: 500 });
  }
}

// Petición PUT: Actualiza un registro específico (UPDATE)
export async function PUT(request, { params }) {
  try {
    const { id } = await params; // Capturamos el Id_Hechos de la URL
    const data = await request.json();
    await HechosModel.update(id, data);
    return NextResponse.json({ message: 'Actualizado con éxito' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al actualizar' }, { status: 500 });
  }
}

// Petición DELETE: Borra un registro específico (DELETE)
export async function DELETE(request, { params }) {
  try {
    const { id } = await params; // Capturamos el Id_Hechos de la URL
    await HechosModel.delete(id);
    return NextResponse.json({ message: 'Borrado con éxito' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al borrar' }, { status: 500 });
  }
}
