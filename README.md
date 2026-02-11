- npm create vite@latest my-react-app --template react
- npm install tailwindcss @tailwindcss/vite
- ````
    import { defineConfig } from 'vite'
    import tailwindcss from '@tailwindcss/vite'

    export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    })
  ``` to vite.config.js

  ````

- @import "tailwindcss"; to App.css
- 
- npm i @splinetool/react-spline
