// const breakpoints = ['23.43em', '45.62em', '67.81em', '90em'];

const breakpoints = ['23.43em', '90em'];
breakpoints.sm = breakpoints[0];
breakpoints.lg = breakpoints[1];

const fontWeights = [500, 700];

const fontSizes = [0, 15]

const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];

const colors = {
    themeBlue: '#2ACFCF',
    themeViolet: '#3B3054',
    themeRed: '#F46262', 
    themeGray: ['#BFBFBF', '#9E9AA7'],        
    themeBlack: ['#35323E','#232127'],        
};

const utilities = {
    breakpoints,
    colors,
    fontWeights,
    space,
    fontSizes,
}

export default utilities