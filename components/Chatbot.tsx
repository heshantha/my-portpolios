'use client'

import { MessageCircle, Send, X } from 'lucide-react'
import { FormEvent, useEffect, useRef, useState } from 'react'

type ChatMessage = {
  role: 'user' | 'bot'
  text: string
}

const SUGGESTIONS = [
  'Who is Heshantha?',
  'What are his skills?',
  'Where has he worked?',
  'How can I contact him?',
  'Why hire Heshantha?',
]

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'bot',
      text: "Hi, I'm Heshantha Lakshitha Abeykoon. Ask about skills, experience, projects, education, or contact details.",
    },
  ])
  const listRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, open])

  const sendQuestion = async (question: string) => {
    const trimmed = question.trim()
    if (!trimmed || loading) return

    setInput('')
    setMessages((prev) => [...prev, { role: 'user', text: trimmed }])
    setLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: trimmed }),
      })
      const data = await response.json()
      const answer = typeof data.answer === 'string' ? data.answer : 'Sorry, I could not answer that.'
      setMessages((prev) => [...prev, { role: 'bot', text: answer }])
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'bot', text: 'Something went wrong. Please try again in a moment.' },
      ])
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    void sendQuestion(input)
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60]">
      {open && (
        <div className="mb-4 flex h-[520px] w-[min(100vw-2rem,380px)] flex-col overflow-hidden rounded-2xl border border-blue-500/30 bg-dark-900 shadow-2xl shadow-blue-900/40">
          <div className="flex items-center justify-between border-b border-dark-700 bg-gradient-to-r from-blue-600/20 to-purple-600/10 px-4 py-3">
            <div>
              <p className="font-semibold">Heshantha BOT</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-700 hover:border-blue-500 hover:bg-blue-500/10"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`max-w-[90%] whitespace-pre-wrap rounded-xl px-3 py-2 text-sm leading-relaxed ${
                  message.role === 'user'
                    ? 'ml-auto bg-blue-600 text-white'
                    : 'bg-dark-800 text-gray-200 border border-dark-700'
                }`}
              >
                {message.text}
              </div>
            ))}
            {loading && (
              <div className="w-fit rounded-xl border border-dark-700 bg-dark-800 px-3 py-2 text-sm text-gray-400">
                Thinking...
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 border-t border-dark-700 px-3 py-2">
            {SUGGESTIONS.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => void sendQuestion(suggestion)}
                className="rounded-full border border-blue-600/30 bg-blue-600/10 px-3 py-1 text-xs text-blue-300 hover:bg-blue-600/20"
              >
                {suggestion}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2 border-t border-dark-700 p-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about his profile..."
              className="flex-1 rounded-lg border border-dark-700 bg-dark-800 px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 shadow-lg shadow-blue-600/40 transition-transform hover:scale-105 hover:bg-blue-700"
        aria-label="Open Heshantha BOT"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  )
}
