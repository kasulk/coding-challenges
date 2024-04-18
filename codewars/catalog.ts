export function catalog(str: string, article: string): string {
  const products = str.split("\n\n");
  const foundArticles = products.filter((product) => product.includes(article));

  if (!foundArticles.length) return "Nothing";

  return foundArticles
    .map((article) => {
      const values = [...article.matchAll(/>(.*?)</g)].map((match) => match[1]);

      const [name, price, quantity] = values.filter((value) => value);

      return `${name} > prx: $${price} qty: ${quantity}`;
    })
    .join("\r\n");
}
