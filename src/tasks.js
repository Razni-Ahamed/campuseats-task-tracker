// CampusEats task list
const tasks = [
  "Design the menu screen",
  "Build the orders API",
  "Add user login",
];

// Clear names, no magic numbers, no secrets.
// Secrets (e.g. API keys) are read from the environment: process.env.API_KEY
// and are never hard-coded or committed to Git.
const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
  if (typeof price !== "number" || typeof quantity !== "number") {
    throw new TypeError("price and quantity must be numbers");
  }
  if (price < 0 || quantity < 0) {
    throw new Error("price and quantity must be >= 0");
  }
  const subtotal = price * quantity;
  return customerType === "vip"
    ? subtotal * (1 - VIP_DISCOUNT)
    : subtotal;
}

module.exports = { tasks, calculateTotal, VIP_DISCOUNT };

if (require.main === module) {
  console.log(`CampusEats has ${tasks.length} open tasks`);
}
