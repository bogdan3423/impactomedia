import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    try {
        const { name, email, phone, service, message } = await request.json();

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Numele, emailul și mesajul sunt obligatorii.' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Adresa de email nu este validă.' },
                { status: 400 }
            );
        }

        // Service label mapping
        const serviceLabels = {
            'website': 'Website-uri & Magazine Online',
            'social-media': 'Social Media Marketing & Content Creation',
            'ads': 'Reclame Plătite (Google & Meta Ads)',
            'all': 'Toate serviciile',
            '': 'Nespecificat'
        };

        // Create transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Email content
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: 'rusbogdan3423@gmail.com',
            replyTo: email,
            subject: `Nou mesaj de contact - ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #1e293b; border-bottom: 2px solid #1e293b; padding-bottom: 10px;">
                        Nou mesaj de contact - Impacto Media
                    </h2>
                    
                    <div style="margin: 20px 0;">
                        <p style="margin: 10px 0;"><strong>Nume:</strong> ${name}</p>
                        <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
                        <p style="margin: 10px 0;"><strong>Telefon:</strong> ${phone || 'Nespecificat'}</p>
                        <p style="margin: 10px 0;"><strong>Serviciu solicitat:</strong> ${serviceLabels[service] || 'Nespecificat'}</p>
                    </div>
                    
                    <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                        <h3 style="color: #1e293b; margin-top: 0;">Mesaj:</h3>
                        <p style="color: #475569; white-space: pre-wrap;">${message}</p>
                    </div>
                    
                    <p style="color: #94a3b8; font-size: 12px; margin-top: 30px;">
                        Acest email a fost trimis automat de pe site-ul Impacto Media.
                    </p>
                </div>
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: 'Mesajul a fost trimis cu succes!' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json(
            { error: 'A apărut o eroare la trimiterea mesajului. Vă rugăm încercați din nou.' },
            { status: 500 }
        );
    }
}
