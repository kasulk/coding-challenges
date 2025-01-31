function discoverOriginalPrice(discountedPrice, discount) {
  const originalPrice = (100 * discountedPrice) / (100 - discount);
  return Number(originalPrice.toFixed(2));
}
