import { plants } from "./data";

export function getFinalPrice(cartItems) {
  let finalPrice = 0;

  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    const price = getPlantPrice(item.plantId);
    finalPrice += price * item.quantity;
  }
  return finalPrice;
}

// plantId: string -> price: number
function getPlantPrice(plantId) {
  const plant = plants.find((plant) => plant.slug === plantId);

  return plant.price;
}
