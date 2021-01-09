export const setCachedObject = (name: string, value: object) => {
  localStorage.setItem(`pokemon-pwa-${name}`, JSON.stringify(value));
};

export const getCachedObject = <T>(name: string) => {
  const cachedResult = localStorage.getItem(`pokemon-pwa-${name}`);
  if (!cachedResult) return null;
  return JSON.parse(cachedResult) as T;
};
