import type { Config } from "tailwindcss";

export default {
    theme: {
        screens: {
            'xs': '320px',
            'sm': '375px',
            'md': '640px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        extend: {
            colors: {

            },
        },
    },
} satisfies Config