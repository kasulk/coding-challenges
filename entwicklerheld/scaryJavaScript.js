import { RECIPE } from "./Recipe";

// Scenario 1
export function howLongDoesItTake() {
  const timers = [...RECIPE.times.cake, ...RECIPE.times.buttercream];
  return timers.reduce((sum, timer) => sum + Number(timer), 0);
}

// Scenario 2
export function getQuantityOfIngredient(ingredient, numCakes) {
  const cakeIngredient = RECIPE.ingredients.cake.find(
    ({ name }) => name === ingredient
  );

  const { name, quantity, unit } = cakeIngredient;

  const totalQuantity =
    numCakes * (name === "eggs" ? Number(quantity) + 1 : Number(quantity));

  return `${totalQuantity} ${unit}`;
}

// Scenario 3
export function getPurchaseList() {
  const purchaseList = {};
  const allIngredients = [
    ...RECIPE.ingredients.buttercream,
    ...RECIPE.ingredients.cake,
  ];

  allIngredients.forEach(({ name, quantity }) => {
    if (!purchaseList[name]) purchaseList[name] = 0;
    purchaseList[name] += Number(quantity);
  });

  return purchaseList;
}

// Scenario 4
export function calculateDifficulty() {
  const timers = [...RECIPE.times.cake, ...RECIPE.times.buttercream].map(
    Number
  );

  const difficulties = timers.map((timer) => {
    if (timer === 0) return "super easy";
    if (timer <= 10) return "easy";
    if (10 < timer && timer < 20) return "medium";
    if (20 < timer && timer <= 30) return "difficult";
    return "hard";
  });

  return difficulties;
}

// const RECIPE = {
//   ingredients: {
//     buttercream: [
//       {
//         name: "pasteurized liquid egg whites",
//         quantity: "8",
//         unit: "fl oz",
//       },
//       { name: "powdered sugar", quantity: "32", unit: "oz" },
//       { name: "salt", quantity: "0.75", unit: "tsp" },
//       { name: "unsalted butter", quantity: "32", unit: "oz" },
//       { name: "vanilla extract", quantity: "2.5", unit: "tbsp" },
//     ],
//     cake: [
//       { name: "unsalted butter", quantity: "1", unit: "oz" },
//       { name: "granulated sugar", quantity: "21", unit: "oz" },
//       { name: "eggs", quantity: "6", unit: "pc" },
//       { name: "all-purpose flour", quantity: "20.25", unit: "oz" },
//       { name: "salt", quantity: "2", unit: "tsp" },
//       { name: "baking powder", quantity: "2", unit: "tbsp" },
//       { name: "milk", quantity: "2.5", unit: "cups" },
//       { name: "vanilla extract", quantity: "1", unit: "tbsp" },
//     ],
//   },
//   name: "Stenciled Halloween sprinkle cake",
//   recipeURL: "https://www.sugarhero.com/stenciled-halloween-sprinkle-cake/",
//   steps: {
//     buttercream: [
//       "Combine the whites, powdered sugar, and salt in the bowl of a large stand mixer fitted with a paddle attachment. (A 6 quart mixer is preferred. 5 quarts will work, but you might want to shield the bowl when mixing so the sugar doesn’t fly everywhere.) Mix everything together on low speed, until the sugar is moistened and no dry patches remain. Turn off the mixer, scrape down the sides and bottom of the bowl with a spatula, then turn the mixer to medium speed. Beat on medium for 5 minutes.",
//       "After 5 minutes, turn the mixer to medium-low and start adding the softened room temperature butter, 1-2 tablespoons at a time. Once all of the butter is incorporated, add the vanilla extract and mix it in. Stop the mixer and scrape down the bottom and sides once more. Turn the speed to medium and beat the buttercream for 10 minutes. At the end, you’ll have a frosting with a wonderfully light and creamy texture. It can be used right away, or stored in the refrigerator for up to two weeks, or the freezer for up to two months. If you have chilled the frosting, let it come to room temperature and then beat it for several minutes to smooth it out and restore its texture before using it.",
//     ],
//     cake: [
//       "Preheat the oven to 350 F. Line four 9-inch cake pans with parchment rounds, and spray the parchment with nonstick cooking spray.",
//       "Combine the butter and granulated sugar in the large bowl of a stand mixer fitted with a paddle attachment. Beat the butter and sugar together on medium speed for 5-6 minutes, until light and fluffy.",
//       "Add the eggs one at a time, beating at least 30 seconds between each addition. Turn the mixer to low and add the flour, salt, and baking powder, then the milk and vanilla extract. Continue to beat on low speed until the flour is moistened and everything has roughly come together. At this point the batter might look a little broken or curdled—that’s okay.",
//       "Scrape down the sides of the bowl and turn the mixer to medium-high speed, and beat the batter for 2-3 minutes more until it’s beautifully smooth. Divide it between the prepared pans—if you have a scale, each pan will get about 20 oz of batter.",
//       "Bake the cakes at 350 F for 25-30 minutes. They won’t take on much color, so don’t depend on that to gauge doneness. Instead, look for the tops to spring back when you press down lightly, and the sides of the cake to start pulling away from the pan.",
//       "Let the cakes cool at room temperature for 15 minutes on a wire rack, then run a thin knife around the sides and turn them out of the pan. Let them cool completely before assembling.",
//     ],
//   },
//   times: {
//     buttercream: ["5", "11"],
//     cake: ["0", "6", "3", "3", "30", "15"],
//   },
// };
