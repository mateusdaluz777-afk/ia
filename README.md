# Inspetor de Pilha — Leitor (celular) + Painel (tela)

Estrutura pronta pra GitHub -> Vercel.

## Arquivos
- `leitor.html`  -> abre no CELULAR. Câmera + IA, conta ao vivo.
- `painel.html`  -> abre na TELA GRANDE. Mostra a contagem em tempo real.
- `api/inspect.js` -> proxy que guarda a chave da IA no servidor.

## Já configurado
- Supabase URL e chave publishable já estão nos dois HTML.
- `leitor.html` já aponta para `/api/inspect`.

## Deploy (Vercel)
1. Suba esta pasta num repositório no GitHub.
2. No Vercel: New Project -> importe o repo.
3. Settings -> Environment Variables -> crie:
   `ANTHROPIC_API_KEY` = sua_chave_da_anthropic
4. Deploy.

## Usar
- Painel:  https://SEU-APP.vercel.app/painel.html
- Leitor:  https://SEU-APP.vercel.app/leitor.html   (no celular)
- Proxy:   https://SEU-APP.vercel.app/api/inspect    (sozinho, não precisa abrir)

Digite o código de sessão que aparece no leitor dentro do painel para filtrar.
