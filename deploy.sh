#!/bin/bash
# Deployment rápido para Vercel

# Cores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Iniciando Deploy da Landing Page${NC}"

# 1. Build
echo -e "${YELLOW}1️⃣  Compilando aplicação...${NC}"
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Erro ao compilar"
    exit 1
fi
echo -e "${GREEN}✅ Build concluído!${NC}"

# 2. Verificar se tem Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo -e "${YELLOW}📦 Instalando Vercel CLI...${NC}"
    npm i -g vercel
fi

# 3. Deploy
echo -e "${YELLOW}2️⃣  Enviando para Vercel...${NC}"
vercel --prod

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ Deploy realizado com sucesso!${NC}"
    echo -e "${BLUE}🌐 Acesse: https://seu-projeto.vercel.app${NC}"
else
    echo "❌ Erro ao fazer deploy"
    exit 1
fi

echo -e "${GREEN}🎉 Tudo pronto!${NC}"
