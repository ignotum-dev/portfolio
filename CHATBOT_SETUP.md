# ChatBot Integration Setup Guide

## What's Been Installed

I've successfully integrated a Groq-powered chatbot into your portfolio! Here's what was implemented:

### Files Created:
1. **src/components/ChatBot.jsx** - The main chatbot component with:
   - Message history tracking
   - Real-time API integration with Groq
   - Beautiful chat UI with animations
   - Responsive design
   - Typing indicators and timestamps
   - Context-aware responses about your portfolio

2. **.env** - Environment variables file containing your Groq API key

### Files Modified:
1. **src/pages/Index.jsx** - Added ChatBot import and component
2. **.gitignore** - Added `.env` to prevent API key from being committed

### Key Features:
✅ **Groq AI Integration** - Uses Groq's Mixtral-8x7b model for fast responses
✅ **Portfolio Context** - Bot has knowledge about your skills, projects, and experience
✅ **Beautiful UI** - Matches your portfolio's dark theme with purple gradients
✅ **Positioned Below "Move to Top"** - ChatBot button appears at `bottom-24 right-8` (below the scroll-to-top button at `bottom-8 right-8`)
✅ **Smooth Animations** - Framer Motion animations for a polished feel
✅ **Keyboard Support** - Press Enter to send messages
✅ **Loading States** - Shows animated dots while waiting for response
✅ **Auto-scroll** - Messages automatically scroll to latest

## How It Works

1. **ChatBot Button**: A purple gradient button appears below the "Move to Top" icon in the bottom right
2. **Click to Open**: Opens a chat window with your portfolio info pre-loaded
3. **Ask Questions**: Visitors can ask about:
   - Your skills and technologies
   - Your projects and experience
   - How to contact you
   - General portfolio questions

4. **Smart Responses**: The chatbot is primed with:
   - Your tech stack (Frontend, Backend, Tools)
   - Project information
   - Your experience areas
   - Guidance to direct users to relevant portfolio sections

## API Security

Your Groq API key is stored in `.env` and:
- ✅ NOT committed to git (added to .gitignore)
- ✅ Loaded securely via environment variables
- ✅ Only used on the client-side for API calls

## Testing

The dev server is now running. You can:
1. Open your portfolio
2. Scroll down to see the chatbot button (purple with chat icon)
3. Click it to open the chat
4. Try asking "Tell me about your skills" or "What projects have you built?"

## Customization Options

You can easily customize the chatbot by editing `src/components/ChatBot.jsx`:
- Change colors in the className strings
- Modify the `getPortfolioContext()` function to add more about yourself
- Adjust the model (currently using `mixtral-8x7b`)
- Change max_tokens for longer/shorter responses
- Adjust animation speeds and delays

Enjoy your new portfolio chatbot! 🎉
