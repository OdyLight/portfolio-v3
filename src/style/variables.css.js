import { css } from 'styled-components';

export const variables = {
  /* Colour */
  __color_primary: '#64FFDA',
  __color_primary_dark: '#1DE9B6',
  __color_secondary: '#F50057',
  __color_secondary_light: '#FF4081',
  __color_secondary_dark: '#F50057',
  __white: '#FFF',
  __black: 'rgba(0,0,0,.8)',
  __grey_100: '#FAFAFA',
  __grey_200: '#EEEEEE',
  __grey_300: '#BDBDBD',
  __grey_400: '#424242',
  __grey_500: '#121212',

  /* Font-size */
  __fs_small: '1.2rem',
  __fs_medium: '1.4rem',
  __fs_default: '1.6rem',
  __fs_large: '2.4rem',
};

/* Turn variables into valid css custom properties */
export const customProperties = Object.keys(variables).map(
  (key) => `${[key.replace(/_/g, '-')]}: ${variables[key]};`
);

const sizes = {
  desktop: 1920,
  tablet: 900,
  mobile: 700,
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;

  return acc;
}, {});
