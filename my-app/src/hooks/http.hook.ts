export const useHttp = () => {
  const request = async (
    url: string,
    method: string = 'GET',
    body = null,
    headers = { 'Content-Type': 'application/json' },
  ) => {
    try {
      const response = await fetch(url, { method, body, headers });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return { request };
};
