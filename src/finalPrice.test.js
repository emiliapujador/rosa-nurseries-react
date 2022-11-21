import { getFinalPrice } from "./utility";

test("final price is 0 when there are no items", () => {
  const cartItems = [];
  expect(getFinalPrice(cartItems)).toEqual(0);
});

test("final price is correct when there is one item", () => {
  const cartItems = [{ plantId: "maranta", quantity: 1 }];
  expect(getFinalPrice(cartItems)).toEqual(9.0);
});

test("final price is correct when there is one item with a quantity of 3", () => {
  const cartItems = [{ plantId: "maranta", quantity: 3 }];
  expect(getFinalPrice(cartItems)).toEqual(27.0);
});

test("final price is correct when there is more than one item", () => {
  const cartItems = [
    { plantId: "maranta", quantity: 3 },
    {
      plantId: "epipremnum_aureum",
      quantity: 2,
    },
  ];
  expect(getFinalPrice(cartItems)).toEqual(44.0);
});
