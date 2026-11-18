# Novo site Balzani 2027

Site institucional da Balzani, feito com **Vite + React + GSAP + Lenis**.

## Rodar localmente

```bash
npm install
npm run dev       # servidor de desenvolvimento
npm run build     # gera o site estático em dist/
npm run preview   # serve o build localmente
```

O conteúdo de `dist/` pode ser publicado em qualquer hospedagem estática.

## Estrutura

- `src/data/home.js`: textos, listas e links da Home (edite aqui)
- `src/sections/`: uma seção da Home por arquivo
- `src/components/`: header, footer e componentes reutilizáveis
- `src/styles/tokens.css`: cores, fontes e a unidade fluida `--u` (1u = 1px do frame de 1920px do Figma)
- `src/lib/smoothScroll.js`: rolagem suave (Lenis) integrada ao GSAP ScrollTrigger
- `public/img/home/`: imagens e ícones exportados do Figma

Design: Figma "[BAL] Novo Site", página "Novo Site 2.0", frame "HOME 2.0".
