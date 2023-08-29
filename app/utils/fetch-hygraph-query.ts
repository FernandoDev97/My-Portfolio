export const fetchHygraphQuery = async <T>(query: string, revalidate?: number): Promise<T> => {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
  };
  const body = JSON.stringify({ query });

  const response = await fetch(process.env.HYGRAPH_URL!, {
    method: 'POST',
    headers,
    body,
    next: {
        revalidate
    },
  });

  const { data } = await response.json();
  return data;
};
