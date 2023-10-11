import axios from 'axios';
import { NextResponse } from 'next/server';
import { ZodError, z } from 'zod';

const bodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    message: z.string(),
});

export const POST = async (request: Request) => {
    try {
        const body = await request.json();

        const { name, email, message } = bodySchema.parse(body);

        const messageData = {
            embeds: [
                {
                    type: 'rich',
                    title: `Nova mensagem!`,
                    description: '',
                    color: 0xffb300,
                    fields: [
                        {
                            name: `👨‍💼 Nome`,
                            value: name,
                            inline: true,
                        },
                        {
                            name: `✉️ E-mail`,
                            value: email,
                            inline: true,
                        },
                        {
                            name: `💬 Mensagem`,
                            value: message,
                        },
                    ],
                },
            ],
        };

        await axios.post(process.env.WEBHOOK_URL!, messageData);

        return NextResponse.json(
            { message: 'Mensagem enviada com sucesso!' },
            { status: 200 },
        );
    } catch (err) {
        if (err instanceof z.ZodError) {
            throw NextResponse.json(
                { data: 'Por favor, insira um e-mail válido!' },
                { status: 500 },
            );
        } else {
            throw NextResponse.json(
                {
                    data: 'Houve um erro ao enviar a mensagem, tente novamente mais tarde!',
                },
                { status: 500 },
            );
        }
    }
};
