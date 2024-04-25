const cjkFallback = [
    "Noto Sans CJK TC",
    "Microsoft Jhenghei",
    "Microsoft Yahei",
    "Meiryo",
    "Malgun Gothic",
];

export default {
    content: ["./src/**/*.tsx", "index.html"],
    theme: {
        fontFamily: {
            sans: ["Inter", ...cjkFallback, "sans-serif"],
            serif: [
                "'Equity A'",
                "'Noto Serif CJK JP'",
                ...cjkFallback,
                "sans-serif",
            ],
        },
    },
};
