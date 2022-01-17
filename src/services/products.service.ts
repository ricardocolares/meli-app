export const fetchProducts = async (item: String) => {
  const { items, categories } = await fetch(
    process.env.API_URL + `/items?q=${item}`
  );

  return { items, categories };
};
