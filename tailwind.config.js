/** @type {import('tailwindcss').Config} */
import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                accent: {
                    vibrantPurple: '#AC6AFF',
                    sunnyYellow: '#FFC876',
                    boldRed: '#FF776F',
                    freshGreen: '#7ADB78',
                    coolBlue: '#858DFF',
                    softPink: '#FF98E2',
                },
                stroke: {
                    100: '#3F3A52', // Light Gray
                    200: '#26242C', // Dark Charcoal
                    300: '#15131D', // Darker Gray
                },
                neutral: {
                    white: '#FFFFFF',
                    gray100: '#CAC6DD', // Light Gray
                    gray200: '#ADA8C3', // Medium Gray
                    gray300: '#757185', // Gray
                    gray400: '#3F3A52', // Darker Gray
                    gray500: '#252134', // Even Darker Gray
                    black: '#15131D',
                    almostBlack: '#0E0C15',
                    slate100: '#474060', // Slate Gray
                    slate200: '#43435C', // Darker Slate
                    navy100: '#1B1B2E', // Navy
                    navy200: '#2E2A41', // Dark Navy
                    mutedGray: '#6C7275',
                },
            },
            fontFamily: {
                sans: ['var(--font-sora)', ...fontFamily.sans],
                code: 'var(--font-code)',
                grotesk: 'var(--font-grotesk)',
            },
            letterSpacing: {
                tagline: '.15em',
            },
            spacing: {
                0.25: '0.0625rem',
                7.5: '1.875rem',
                15: '3.75rem',
            },
            opacity: {
                15: '.15',
            },
            transitionDuration: {
                DEFAULT: '200ms',
            },
            transitionTimingFunction: {
                DEFAULT: 'linear',
            },
            zIndex: {
                1: '1',
                2: '2',
                3: '3',
                4: '4',
                5: '5',
            },
            borderWidth: {
                DEFAULT: '0.0625rem',
            },
            backgroundImage: {
                gradientRadial: 'radial-gradient(var(--tw-gradient-stops))',
                gradientConic:
                    'conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)',
            },
        },
    },

    plugins: [
        plugin(function ({ addBase, addComponents, addUtilities }) {
            addBase({});
            addComponents({
                '.container': {
                    '@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]':
                        {},
                },
                // Heading styles
                '.h1': {
                    '@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]':
                        {},
                },
                '.h2': {
                    '@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight':
                        {},
                },
                '.h3': {
                    '@apply text-[2rem] leading-normal md:text-[2.5rem]': {},
                },
                '.h4': {
                    '@apply text-[2rem] leading-normal': {},
                },
                '.h5': {
                    '@apply text-2xl leading-normal': {},
                },
                '.h6': {
                    '@apply font-semibold text-lg leading-8': {},
                },
                '.body-font-1': {
                    '@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8':
                        {},
                },
                '.body-font-2': {
                    '@apply font-light text-[0.875rem] leading-6 md:text-base':
                        {},
                },
                '.caption': {
                    '@apply text-sm': {},
                },
                '.tagline': {
                    '@apply font-grotesk font-light text-xs tracking-tagline uppercase':
                        {},
                },
                '.quote': {
                    '@apply font-code text-lg leading-normal': {},
                },
                '.button': {
                    '@apply font-code text-xs font-bold uppercase tracking-wider':
                        {},
                },
            });
            addUtilities({
                '.tap-highlight-transparent': {
                    '-webkit-tap-highlight-color': 'rgba(0, 0, 0, 0)',
                },

                '.flex-center': {
                    display: 'flex',
                    justifyContent: 'center', // Centers children horizontally
                    alignItems: 'center', // Centers children vertically
                },

                '.flex-center-x': {
                    display: 'flex',
                    alignItems: 'center', // Centers children vertically
                },

                '.flex-center-y': {
                    display: 'flex',
                    justifyContent: 'center', // Centers children horizontally
                },

                '.absolute-center': {
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                },

                '.absolute-center-x': {
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                },

                '.absolute-center-y': {
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                },
            });
        }),
    ],
};
