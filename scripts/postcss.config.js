// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
    parser: "postcss-scss",
    plugins: {
        "postcss-px-to-viewport": {
            viewportWidth: 750,
            viewportHeight: 1334,
            unitPrecision: 5,
            viewportUnit: "vw",
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
        },
        "postcss-aspect-ratio-mini": {},
    },
};
