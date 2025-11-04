import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    console.log('=== RECEBIDO FORMULÁRIO DE CONTATO ===');
    const { name, email, phone, message } = await req.json();

    // Validação básica
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Nome, email e mensagem são obrigatórios' },
        { status: 400 }
      );
    }

    console.log(`Nome: ${name}, Email: ${email}`);

    // Enviar email via Resend
    const emailResponse = await resend.emails.send({
      from: 'lucasfiiresearch@lucasfiiresearch.com.br',
      to: ['lucasfiiresearch@gmail.com'],
      subject: `Novo contato: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #00bfff; padding-bottom: 10px;">
            Novo contato - Lucas FII Wealth
          </h2>
          
          <div style="margin: 20px 0;">
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Telefone:</strong> ${phone}</p>` : ''}
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #555;">Mensagem:</h3>
            <p style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; border-left: 4px solid #00bfff;">
              ${message}
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          <p style="color: #888; font-size: 14px;">
            Esta mensagem foi enviada através do formulário de contato do site Lucas FII Wealth.
          </p>
        </div>
      `,
    });

    if (emailResponse.error) {
      throw new Error(`Erro Resend: ${emailResponse.error.message}`);
    }

    console.log('✅ Email enviado com sucesso:', emailResponse.data);
    
    return NextResponse.json({
      success: true,
      message: 'Email enviado com sucesso!',
      id: emailResponse.data?.id,
    });

  } catch (error) {
    console.error('❌ Erro:', error);
    return NextResponse.json(
      {
        error: 'Erro interno do servidor',
        details: error instanceof Error ? error.message : 'Erro desconhecido',
      },
      { status: 500 }
    );
  }
}
