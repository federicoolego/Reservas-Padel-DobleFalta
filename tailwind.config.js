/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta de Doble Falta: verde oscuro del logo real (los nombres se mantienen para no tocar los componentes)
        noche: '#1C2419',     // verde oscuro del logo: encabezados y textos
        escudo: '#4A6B36',    // verde medio: botones y acentos
        pelota: '#D2DA1F',    // amarillo de la pelota
        rojo: '#D7262E',      // rojo -> turno reservado
        cesped: '#2E8B57',    // verde -> turno libre
        niebla: '#F2F4F0',
        tinta: '#5B6456',
        linea: '#DCE3D7',
      },
      fontFamily: {
        tablero: ['"Barlow Condensed"', '"Arial Narrow"', 'sans-serif'],
        sans: ['Barlow', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
