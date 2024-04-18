export function catalog(str: string, article: string): string {
  const products = str.split("\n\n");
  const foundArticles = products.filter((product) => product.includes(article));

  if (!foundArticles.length) return "Nothing";

  return foundArticles
    .map((article) => {
      const texts = [...article.matchAll(/>(.*?)</g)].map((match) => match[1]);

      const name = texts[1];
      const price = texts[3];
      const quantity = texts[5];

      return `${name} > prx: $${price} qty: ${quantity}`;
    })
    .join("\r\n");
}
