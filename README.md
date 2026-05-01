# Activire

Activire is a B2B AI chatbot platform that enables businesses to deploy intelligent chat assistants on their websites for support, lead generation, and user engagement.

---

## 🚀 Features

- 🤖 AI-powered chatbot trained on your data
- 🌐 Website scraping & custom knowledge input
- 💬 Embeddable chat widget
- 📊 Conversation tracking & analytics
- 📥 Lead capture system
- ⚡ Fast, modern UI with reusable components

---

## 🧠 How It Works

1. Create a chatbot from the dashboard
2. Train it using your website or custom content
3. Embed the widget into your website
4. Start interacting with users instantly

---

## 🏗️ Monorepo Structure

apps/
  web/        # Next.js dashboard
  widget/     # embeddable chat widget

packages/
  ui/         # shared UI components (shadcn)
  db/         # database schema and queries
  ai/         # AI logic and prompt handling
  config/     # shared configs (tsconfig, eslint)

---

## ⚙️ Tech Stack

- Next.js
- Node.js
- PostgreSQL
- OpenAI API
- pnpm (monorepo)
- shadcn/ui

---

## 📦 Getting Started

pnpm install
pnpm dev

---

## 🔑 Environment Variables

Create a `.env` file:

DATABASE_URL=
OPENAI_API_KEY=
NEXT_PUBLIC_APP_URL=

---

## 📌 MVP Scope

- Authentication
- Chatbot creation
- Data training (URL + text)
- Chat widget
- AI responses
- Basic dashboard
- Lead capture

---

## 🧭 Roadmap

- Multi-bot analytics
- Team collaboration
- Billing system
- Custom themes
- API access

---

## 🧠 Vision

To become the default infrastructure layer for AI-powered customer interaction on the web.

---

## 📄 License

MIT
