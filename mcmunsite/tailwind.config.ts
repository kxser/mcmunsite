import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  content: [
    'formkit.theme.ts'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans] 
      },
      colors: {
        extendedGray: {
          1000: "#09090b",
        }
      },
      backgroundColor: {
        DEFAULT: '#000', // Black
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
