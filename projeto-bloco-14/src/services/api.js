export async function getCategories() {
  try {
    const requestCategories = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const result = requestCategories.json();
    return result;
  } catch (error) {
    return error;
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    const request = await fetch(
      `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
    );

    const requestJson = await request.json();
    return requestJson;
  } catch (error) {
    console.log(`(getProductsFromCategoryAndQuery fail) Error: ${error}`);
  }
}
