export const fetchHelper = async (url: string, options: RequestInit) => {
  const config = useRuntimeConfig();
  const baseUrl = config.public.apiBase;
  const response = await fetch(`${baseUrl}${url}`, options);
  const data = await response.json();
  return data;
};

/**
 * 足し算をする
 * @param a 足し算する数
 * @param b 足し算する数
 * @returns 足し算した結果
 */
export const add = (a: number, b: number) => {
  return a + b;
};
