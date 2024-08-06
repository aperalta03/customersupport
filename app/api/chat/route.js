import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export async function POST(req) {
  const { prompt } = await req.json();

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o mini",
      messages: [{ role: "user", content: prompt }],
      max_tokens: 150,
    });

    const botMessage = response.choices[0].message.content.trim();
    return NextResponse.json({ botMessage });
  } catch (error) {
    console.error("Error fetching response from OpenAI:", error);
    return NextResponse.json({ error: "Failed to fetch response from OpenAI." }, { status: 500 });
  }
}
