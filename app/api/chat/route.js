import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export async function POST(req) {
  const { prompt, context } = await req.json();

  const finalPrompt = context ? `${context}\n\nUser: ${prompt}` : `User: ${prompt}`;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: finalPrompt }],
      max_tokens: 150,
    });

    const botMessage = response.choices[0].message.content.trim();
    return NextResponse.json({ botMessage });
  } catch (error) {
    console.error("Error fetching response from OpenAI:", error);
    return NextResponse.json({ error: "Failed to fetch response from OpenAI." }, { status: 500 });
  }
}
