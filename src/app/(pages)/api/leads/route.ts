import { NextResponse } from "next/server";

let leads: any[] = [];

export async function GET() {
  return NextResponse.json({ leads }, { status: 200 });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { formType, name, cnpj, email, phone } = body;

    if (!email || !phone || (!name && !cnpj)) {
      return NextResponse.json({ error: "Preencha todos os campos!" }, { status: 400 });
    }

    const newLead = { id: Date.now(), formType, name, cnpj, email, phone };
    leads.push(newLead);

    return NextResponse.json({ message: "Lead capturado com sucesso!", lead: newLead }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Erro no servidor" }, { status: 500 });
  }
}
