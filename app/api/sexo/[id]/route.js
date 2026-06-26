import { NextResponse } from 'next/server';
import SexoModel from '../../../../models/sexoModel';

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const { Sexo } = await request.json();
    await SexoModel.update(id, Sexo);
    return NextResponse.json({ message: 'Registro actualizado con éxito' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al intentar actualizar el registro' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await SexoModel.delete(id);
    return NextResponse.json({ message: 'Registro borrado con éxito' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al intentar borrar el registro' }, { status: 500 });
  }
}
