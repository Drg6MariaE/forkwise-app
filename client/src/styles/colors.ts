const common = {
  primary: '#6200ee',
  secondary: '#03dac4',
  error: '#B00020',
  white: '#ffffff',
  black: '#000000',
  gray: '#f5f5f5',
};

export const colors = {
  light: {
    ...common,
    background: '#ffffff',
    textPrimary: '#000000',
    textSecondary: '#666666',
    secondary: common.secondary, // Ensure this exists for your header
  },
  dark: {
    ...common,
    background: '#121212',
    textPrimary: '#ffffff',
    textSecondary: '#aaaaaa',
    secondary: '#018786',
  },
  // Keep flat export for legacy support if needed
  ...common 
};