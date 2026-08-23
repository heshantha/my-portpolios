import { NextResponse } from 'next/server'
import { answerFromProfile } from '@/lib/chatEngine'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const question = typeof body?.question === 'string' ? body.question : ''

    if (!question.trim()) {
      return NextResponse.json({ error: 'Question is required' }, { status: 400 })
    }

    const answer = answerFromProfile(question)
    return NextResponse.json({ answer })
  } catch (error) {
    console.error('Chat error:', error)
    return NextResponse.json({ error: 'Unable to answer right now.' }, { status: 500 })
  }
}
