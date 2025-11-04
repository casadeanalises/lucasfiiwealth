import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, monthlyContribution, liquidAssets } = await req.json();

    // Mapear valores para texto legível
    const monthlyContributionText = {
      'abaixo-1000': 'Abaixo de R$ 1.000',
      '1000-5000': 'Entre R$ 1.000 a R$ 5.000',
      '5000-10000': 'Entre R$ 5.000 a R$ 10.000',
      '10000-20000': 'Entre R$ 10.000 a R$ 20.000',
      '20000-40000': 'Entre R$ 20.000 a R$ 40.000',
      'acima-40000': 'Acima de R$ 40.000'
    }[monthlyContribution];

    const liquidAssetsText = {
      '0-50000': 'De 0 a R$ 50.000',
      '50000-100000': 'Entre R$ 50.000 a R$ 100.000',
      '100000-300000': 'Entre R$ 100.000 a R$ 300.000',
      '300000-1000000': 'Entre R$ 300.000 a R$ 1.000.000',
      '1000000-3000000': 'Entre R$ 1.000.000 a R$ 3.000.000',
      '3000000-5000000': 'Entre R$ 3.000.000 a R$ 5.000.000',
      'acima-5000000': 'Mais de R$ 5.000.000'
    }[liquidAssets];

    const { data, error } = await resend.emails.send({
      from: 'Lucas FII Wealth <contato@lucasfiiresearch.com.br>',
      to: ['lucasfiiresearch@gmail.com'],
      subject: '🏦 Nova Solicitação de Consultoria - Lucas FII Wealth',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8f9fa; padding: 20px; border-radius: 10px;">
          <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 28px; font-weight: bold;">
              LUCAS FII <span style="color: #00bfff;">WEALTH</span>
            </h1>
            <p style="color: #e2e8f0; margin: 10px 0 0 0; font-size: 16px;">Nova Solicitação de Consultoria</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
            <h2 style="color: #1e293b; margin-top: 0; font-size: 24px; border-bottom: 2px solid #00bfff; padding-bottom: 10px;">
              📋 Dados do Cliente
            </h2>
            
            <div style="margin: 20px 0;">
              <div style="display: flex; margin-bottom: 15px; align-items: center;">
                <span style="font-weight: bold; color: #374151; min-width: 120px;">👤 Nome:</span>
                <span style="color: #1e293b; font-size: 16px;">${name}</span>
              </div>
              
              <div style="display: flex; margin-bottom: 15px; align-items: center;">
                <span style="font-weight: bold; color: #374151; min-width: 120px;">📧 E-mail:</span>
                <span style="color: #1e293b; font-size: 16px;">${email}</span>
              </div>
              
              <div style="display: flex; margin-bottom: 15px; align-items: center;">
                <span style="font-weight: bold; color: #374151; min-width: 120px;">📱 Telefone:</span>
                <span style="color: #1e293b; font-size: 16px;">${phone}</span>
              </div>
            </div>

            <h3 style="color: #1e293b; margin: 30px 0 20px 0; font-size: 20px; border-bottom: 1px solid #e5e7eb; padding-bottom: 8px;">
              💰 Perfil Financeiro
            </h3>
            
            <div style="margin: 20px 0;">
              <div style="background: #f1f5f9; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #00bfff;">
                <p style="margin: 0; font-weight: bold; color: #374151;">💸 Aportes Mensais:</p>
                <p style="margin: 5px 0 0 0; color: #1e293b; font-size: 16px;">${monthlyContributionText}</p>
              </div>
              
              <div style="background: #f1f5f9; padding: 15px; border-radius: 8px; border-left: 4px solid #00bfff;">
                <p style="margin: 0; font-weight: bold; color: #374151;">🏦 Patrimônio Líquido:</p>
                <p style="margin: 5px 0 0 0; color: #1e293b; font-size: 16px;">${liquidAssetsText}</p>
              </div>
            </div>
            
            <div style="background: linear-gradient(135deg, #ffd700 0%, #ff8c00 100%); padding: 20px; border-radius: 10px; text-align: center; margin-top: 30px;">
              <p style="color: white; margin: 0; font-weight: bold; font-size: 16px;">
                ⏰ Solicitação recebida em: ${new Date().toLocaleString('pt-BR')}
              </p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px;">
            <p>Este e-mail foi gerado automaticamente pelo sistema da Lucas FII Wealth</p>
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Erro no Resend:', error);
      return NextResponse.json({ error: 'Erro ao enviar e-mail' }, { status: 500 });
    }

    return NextResponse.json({ message: 'E-mail enviado com sucesso!', data });
  } catch (error) {
    console.error('Erro no endpoint:', error);
    return NextResponse.json({ error: 'Erro interno do servidor' }, { status: 500 });
  }
}