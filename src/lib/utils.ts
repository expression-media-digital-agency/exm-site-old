export const isServer = () => {
  try {
    return typeof window === 'undefined';
  } catch (error) {
    return true;
  }
};

export const isDev = (): boolean => process.env.NODE_ENV === 'development';
