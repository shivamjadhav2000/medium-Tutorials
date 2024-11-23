// calculateDiscount.js
function calculateDiscount(price, discountPercentage) {
    // Validate input types and values
    if (
      typeof price === 'number' &&
      Number.isInteger(discountPercentage) &&
      price > 0 &&
      discountPercentage >= 0 &&
      discountPercentage <= 100
    ) {
      return price - (price * discountPercentage) / 100;
    }
    return "Invalid Discount";
  }
  
  module.exports = calculateDiscount;
  