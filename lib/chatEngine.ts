import {
  greetingReply,
  knowledgeChunks,
  offTopicReply,
} from './profileKnowledge'

const GREETING = /^(hi|hello|hey|yo|good morning|good afternoon|good evening|thanks|thank you|hola)\b/i

const STOPWORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been', 'to', 'of', 'in',
  'for', 'on', 'at', 'by', 'with', 'from', 'and', 'or', 'his', 'him', 'her',
  'he', 'she', 'i', 'me', 'my', 'you', 'your', 'can', 'how', 'what', 'where',
  'who', 'has', 'have', 'had', 'do', 'does', 'did', 'about',
])

const INTENT_CHUNKS: { pattern: RegExp; ids: string[] }[] = [
  {
    pattern: /\b(why\s+hire|hire\s+heshantha|hire\s+him|should\s+(i|we)\s+hire|reason\s+to\s+hire)\b/i,
    ids: ['why-hire'],
  },
  {
    pattern: /\b(worked|work|working|career|companies|company|employer|professional journey|job history|experience)\b/i,
    ids: ['experience'],
  },
  {
    pattern: /\b(skill|skills|tech|technology|stack|react|next\.?js|frontend|front-end)\b/i,
    ids: ['skills'],
  },
  {
    pattern: /\b(contact|email|phone|whatsapp|linkedin|github|reach)\b/i,
    ids: ['contact'],
  },
  {
    pattern: /\b(education|degree|university|sliit|certification|diploma|studied)\b/i,
    ids: ['education'],
  },
  {
    pattern: /\b(project|projects|portfolio)\b/i,
    ids: ['projects'],
  },
  {
    pattern: /\b(who is|about him|about heshantha|himself)\b/i,
    ids: ['identity', 'about'],
  },
]

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9+.#/ ]/g, ' ')
    .split(/\s+/)
    .filter((word) => word.length > 2 && !STOPWORDS.has(word))
}

function chunkById(id: string) {
  return knowledgeChunks.find((chunk) => chunk.id === id)
}

export function answerFromProfile(question: string): string {
  const trimmed = question.trim()
  if (!trimmed) {
    return greetingReply
  }

  if (GREETING.test(trimmed) && trimmed.split(/\s+/).length < 6) {
    return greetingReply
  }

  const intent = INTENT_CHUNKS.find((item) => item.pattern.test(trimmed))
  if (intent) {
    const answers = intent.ids
      .map((id) => chunkById(id)?.content)
      .filter((content): content is string => Boolean(content))
    if (answers.length) {
      return answers.join('\n\n')
    }
  }

  const tokens = tokenize(trimmed)
  const scored = knowledgeChunks
    .map((chunk) => {
      const haystack = `${chunk.title} ${chunk.keywords.join(' ')} ${chunk.content}`.toLowerCase()
      let score = 0
      for (const token of tokens) {
        if (chunk.keywords.includes(token)) score += 3
        if (haystack.includes(token)) score += 1
      }
      return { chunk, score }
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)

  const topScore = scored[0]?.score ?? 0
  if (topScore < 3) {
    return offTopicReply
  }

  const selected = scored.filter((item) => item.score >= Math.max(3, topScore - 2)).slice(0, 2)

  return selected.map((item) => item.chunk.content).join('\n\n')
}
