export function filterProductsByPrice(products, priceRanges) {
  return products.filter((product) => {
    for (var priceC in priceRanges) {
      var [minPrice, maxPrice] = priceC;
      console.log(priceC);
      if (maxPrice === Infinity && product.gia >= minPrice) return true;

      if (product.gia >= minPrice && product.gia < maxPrice) return true;
      return false;
    }
    return false;
  });
}
