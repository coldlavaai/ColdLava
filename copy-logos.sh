#!/bin/bash

# Create public/logos directory
mkdir -p public/logos

# Copy logo files (preferring SVG where available)
cp "TechLogos/WhatsApp_Logo_0.svg" "public/logos/whatsapp.svg"
cp "TechLogos/Twilio/Twilio_idE_vLs6Gp_1.svg" "public/logos/twilio.svg"
cp "TechLogos/Telegram/Telegram_Logo_0.svg" "public/logos/telegram.svg"
cp "TechLogos/Tailwind CSS/Tailwind CSS_idw-FgOA50_0.svg" "public/logos/tailwind.svg"
cp "TechLogos/OpenAI 4/OpenAI_Logo_0.svg" "public/logos/openai.svg"
cp "TechLogos/ElevenLabs/ElevenLabs_Logo_0.svg" "public/logos/elevenlabs.svg"
cp "TechLogos/N8n.io/N8n.io_Logo_0.svg" "public/logos/n8n.svg"
cp "TechLogos/Anthropic/Anthropic_Logo_0.svg" "public/logos/anthropic.svg"
cp "TechLogos/Claude/Claude_Logo_0.svg" "public/logos/claude.svg"
cp "TechLogos/Amazon Web Services/Amazon Web Services_idFJdEKzUK_0.svg" "public/logos/aws.svg"
cp "TechLogos/NextJS.png" "public/logos/nextjs.png"
cp "TechLogos/Vercel/Vercel_Logo_0.svg" "public/logos/vercel.svg"
cp "TechLogos/GITHUB.png" "public/logos/github.png"

echo "Logos copied successfully!"
