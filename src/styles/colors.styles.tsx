export const commonColors = {
    black00: "black",
    black10: "#0b0b0b",
    white100: "white",
};

export const specialColors = {
    rockotGradientTop: "#3ee4eb",
    rockotGradientBottom: "#3ea2ad",
    glassBackgroundColor: "rgba(61, 61, 61, 0.35)",
    glassBorderColor: commonColors.white100,
};

const colors = { ...commonColors, ...specialColors };

export default colors;
