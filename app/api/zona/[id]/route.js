import { NextResponse } from 'next/server';
import ZonaModel from '../../../../models/zonaModel';

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const { Zona_Colegio } = await request.json();
    await ZonaModel.update(id, Zona_Colegio);
    return NextResponse.json({ message: 'Registro actualizado con éxito' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al intentar actualizar el registro' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await ZonaModel.delete(id);
    return NextResponse.json({ message: 'Registro borrado con éxito' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al intentar borrar el registro' }, { status: 500 });
  }
}
