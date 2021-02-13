export const cachedFetchApi = async <T>(endpoint: string): Promise<T> => {
  try {
    const pokeCache = await caches.open('poke-cache');

    const cachedResult = await pokeCache.match(endpoint);

    if (cachedResult) {
      const jsonCachedResult = (await cachedResult.json()) as T;
      return jsonCachedResult;
    }

    const apiResponse = await fetch(endpoint);
    // https://stackoverflow.com/q/45618984
    // TL;DR - A request is a stream and can only be consumed once.
    // Since we are consuming this once by cache and once by the browser for fetch,
    // we need to clone the response.
    pokeCache.put(endpoint, apiResponse.clone());

    const jsonResult: T = await apiResponse.json();

    return jsonResult;
  } catch (error) {
    console.error({ endpoint, error });
    return {} as T;
  }
};
