# 🚀 Kabogo AI Setup Guide

## Prerequisites

- **Node.js** v16 or higher
- **npm** or **yarn**
- **MongoDB** account (MongoDB Atlas free tier)
- **OpenAI API** key
- **Telegram Bot** token (from @BotFather)
- **YouTube API** key (optional, for YouTube integration)

---

## Installation Steps

### 1. Clone Repository

```bash
git clone https://github.com/maxamedyusufibrahim101-arch/Kabogo-ai.git
cd Kabogo-ai
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

```bash
# Copy environment template
cp backend/.env.example backend/.env
```

Edit `backend/.env` and add your keys:

```env
PORT=5000
NODE_ENV=development

# OpenAI
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxx
OPENAI_MODEL=gpt-4

# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/kabogo-ai

# Telegram
TELEGRAM_TOKEN=123456789:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgh
TELEGRAM_BOT_USERNAME=KabogoAI_bot

# YouTube
YOUTUBE_API_KEY=AIzaSyD-xxxxxxxxxxxxxxx

# JWT
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRE=7d
```

### 4. Start Backend Server

```bash
npm run dev
```

You should see:
```
✅ MongoDB connected
🤖 KABOGO AI - Backend Server
Status: ✅ Running
Port: 5000
```

### 5. Start Telegram Bot (new terminal)

```bash
npm run bot
```

You should see:
```
✅ Telegram Bot started successfully
```

### 6. Open Frontend

Open your browser and go to:
```
http://localhost:3000/frontend/index.html
```

Or simply open the HTML file directly:
```
frontend/index.html
```

---

## API Keys Setup

### OpenAI API Key

1. Go to [openai.com](https://openai.com)
2. Sign up / Login
3. Go to API section
4. Create new API key
5. Copy to `.env` file

### MongoDB Setup

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create account / Login
3. Create cluster
4. Get connection string
5. Add to `.env` as `MONGODB_URI`

### Telegram Bot Token

1. Open Telegram
2. Search for **@BotFather**
3. Send `/newbot`
4. Follow instructions
5. Copy token to `.env` as `TELEGRAM_TOKEN`

### YouTube API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create new project
3. Enable YouTube Data API v3
4. Create API key
5. Add to `.env`

---

## Running the Project

### Development Mode

```bash
# Terminal 1 - Backend Server
npm run dev

# Terminal 2 - Telegram Bot
npm run bot

# Terminal 3 - Open Frontend (manual)
# Open frontend/index.html in browser
```

### Production Mode

```bash
npm start
```

---

## Project Structure

```
Kabogo-ai/
├── backend/
│   ├── server.js           # Main server
│   ├── routes/             # API routes
│   ├── controllers/        # Business logic
│   ├── models/             # Database schemas
│   └── .env               # Environment variables
├── frontend/
│   ├── index.html         # Main chat interface
│   ├── style.css          # Styling
│   └── script.js          # Client-side logic
├── telegram-bot/
│   ├── bot.js             # Telegram bot
│   └── handlers.js        # Command handlers
├── data/
│   └── islamic-knowledge.json  # Knowledge base
├── docs/
│   ├── SETUP.md          # This file
│   ├── API.md            # API documentation
│   └── DEPLOYMENT.md     # Deployment guide
├── package.json
├── README.md
└── .gitignore
```

---

## Testing

### Test Backend API

```bash
# Health check
curl http://localhost:5000/health

# Send message
curl -X POST http://localhost:5000/api/chat/message \
  -H "Content-Type: application/json" \
  -d '{"message":"Hello Kabogo AI","language":"so"}'
```

### Test Telegram Bot

1. Start bot
2. Search **@KabogoAI_bot** on Telegram
3. Send `/start`
4. Try commands: `/help`, `/islamic`, etc.

---

## Troubleshooting

### MongoDB Connection Error

- Check internet connection
- Verify `MONGODB_URI` in `.env`
- Ensure IP is whitelisted in MongoDB Atlas

### Telegram Bot Not Responding

- Check `TELEGRAM_TOKEN` is correct
- Verify bot is running
- Check bot permissions

### OpenAI API Error

- Check API key is valid
- Check API key has sufficient credits
- Check rate limits

### Frontend Not Loading

- Ensure backend is running on port 5000
- Check browser console for errors
- Clear browser cache

---

## Deployment

See [DEPLOYMENT.md](./docs/DEPLOYMENT.md) for deployment instructions to:
- Vercel (Frontend)
- Railway (Backend)
- Heroku
- AWS

---

## Support

- **GitHub Issues:** Report bugs or request features
- **Telegram:** Contact via @KabogoAI_bot
- **Email:** maxamedyuusuf@example.com

---

**Last Updated:** June 15, 2026  
**Owner:** Maxamed Yuusuf Ibraahim
