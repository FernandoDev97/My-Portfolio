import axios from "axios";
import { NextResponse } from "next/server";
import { z } from "zod";

const bodySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

const WEBHOOK_URL = process.env.WEBHOOK_URL!;

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { email, message, name } = bodySchema.parse(body);
    const messageData = {
      embeds: [
        {
          title: `Mensagem de Contato`,
          color: 0x00ffff,
          fields: [
            {
              name: `Nome`,
              value: name,
              inline: true,
            },
            {
              name: `Email`,
              value: email,
              inline: true,
            },
            {
              name: `Mensagem`,
              value: message,
            },
          ],
        },
      ],
    };

    await axios.post(WEBHOOK_URL, messageData)

    return NextResponse.json({
        message: 'Mensagem enviada com sucesso!'
    })
  } catch (err) {
    console.log(err);
    return NextResponse.error();
  }
};
