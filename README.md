# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## How to update fonts

**Site-wide (body / headings):**

1. Add your font in `src/index.css` (e.g. `@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');`).
2. Define CSS variables in `:root` in `src/index.css`, e.g. `--font-body: 'YourFont', sans-serif;` and `--font-heading: 'YourFont', sans-serif;`.
3. The base styles in `@layer base` already use `var(--font-body)` and `var(--font-heading)` for `body` and headings.

**Portfolio content (Danny Lan, project titles, etc.):**  
Those use inline `fontFamily` in `src/components/generated/MusicPlayerShowcase.tsx`. Search for `fontFamily:` in that file and change the quoted font name (e.g. `"Whitney Book"` or `"ToneDeaf BB"`) to your desired font. Ensure the font is loaded (e.g. via `index.html` `<link>` or the `@import` in `index.css`).

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```
