import {createSystem, defaultConfig, defineConfig} from "@chakra-ui/react";

const config = defineConfig({
    theme: {
        tokens: {
            colors: {
                gray: {
                    50: {value: '#f9f9f9'},
                    100: {value: '#ededed'},
                    200: {value: '#d3d3d3'},
                    300: {value: '#b3b3b3'},
                    400: {value: '#a0a0a0'},
                    500: {value: '#898989'},
                    600: {value: '#6c6c6c'},
                    700: {value: '#202020'},
                    800: {value: '#121212'},
                    900: {value: '#111'},
                    950: {value: '#0b0b0b'},
                }
            }
        },
        semanticTokens: {
            colors: {
                // Match the v2 look: page background gray.800, cards/panels/filled controls gray.700
                bg: {
                    DEFAULT: {value: {_light: '{colors.white}', _dark: '{colors.gray.800}'}},
                    panel: {value: {_light: '{colors.white}', _dark: '{colors.gray.700}'}},
                    muted: {value: {_light: '{colors.gray.100}', _dark: '{colors.gray.700}'}},
                    emphasized: {value: {_light: '{colors.gray.200}', _dark: '{colors.whiteAlpha.300}'}},
                },
                // subtle buttons (Platforms / Order by)
                gray: {
                    subtle: {value: {_light: '{colors.gray.100}', _dark: '{colors.gray.700}'}},
                    muted: {value: {_light: '{colors.gray.200}', _dark: '{colors.whiteAlpha.300}'}},
                },
            }
        },
        recipes: {
            // v2 headings defaulted to bold, 4xl, with a relative line height
            heading: {
                base: {fontWeight: 'bold'},
                variants: {size: {'4xl': {lineHeight: '1.2'}}},
                defaultVariants: {size: '4xl'},
            }
        }
    }
});

const system = createSystem(defaultConfig, config);

export default system;
