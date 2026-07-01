# Minha Jornada com Deus

Web app/PWA em Next.js e Tailwind CSS para apresentar a jornada de Mariana Perensin no Seminário Bíblico Palavra da Vida — SBPV.

## Instalar dependências

```bash
pnpm install
```

## Rodar localmente

```bash
pnpm dev
```

Depois acesse:

```text
http://localhost:3000
```

Para validar a versão de produção:

```bash
pnpm build
pnpm start
```

## Onde colocar as imagens

Coloque as imagens em:

```text
public/images
```

Nomes esperados pelo app:

```text
mariana-oficial.png
sbpv-aereo.png
batismo-mariana.png
retiro-vocacionados.jpg
logo-sbpv.png
logo-app.png
pv-01.jpg até pv-22.jpg
```

Os arquivos atuais podem ser substituídos pelas imagens finais mantendo os mesmos nomes.

## Alterar Pix, WhatsApp e Instagram

Edite os valores nestes arquivos:

```text
components/DonationCard.tsx
components/CTAButtons.tsx
components/ContactCard.tsx
```

Valores atuais:

```text
Pix: marip3920@gmail.com
WhatsApp: https://wa.me/5519995580222
Instagram: https://instagram.com/mari.perensin
```

## URL pública do site

Crie um arquivo `.env.local` com:

```bash
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

Essa URL é usada no SEO e no botão de compartilhamento.

## Deploy na Vercel

1. Suba o projeto para um repositório no GitHub.
2. Acesse a Vercel e crie um novo projeto.
3. Importe o repositório.
4. Configure a variável de ambiente:

```bash
NEXT_PUBLIC_SITE_URL=https://seu-dominio.com
```

5. Faça o deploy.

Comandos padrão:

```text
Build command: pnpm build
Output: Next.js default
Install command: pnpm install
```

## Estrutura principal

```text
app/
components/
public/images/
public/manifest.json
public/sw.js
```

## Observações

- O app não processa pagamento dentro da plataforma.
- O Pix é copiado para a área de transferência.
- O compartilhamento usa Web Share API quando disponível e copia o texto no fallback.
- O PWA usa `public/manifest.json`, `public/sw.js` e `public/images/logo-app.png`.
