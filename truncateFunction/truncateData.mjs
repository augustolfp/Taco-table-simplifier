import unTruncatedFinalFoodList from "./unTruncatedFinalFoodList.json" assert { type: "json" };
import fs from "fs";

function truncNumber(number) {
  return Math.round(number * 10) / 10;
}

let truncatedFinalFoodList = unTruncatedFinalFoodList.map((food) => {
  return {
    description: food.description,
    baseQty: truncNumber(food.baseQty),
    baseUnit: food.baseUnit,
    proteins: truncNumber(food.proteins),
    proteinUnit: food.proteinUnit,
    carbs: truncNumber(food.carbs),
    carbUnit: food.carbUnit,
    fats: truncNumber(food.fats),
    fatUnit: food.fatUnit,
    kcals: truncNumber(food.kcals),
  };
});

fs.writeFile(
  "truncatedFinalFoodList.json",
  JSON.stringify(truncatedFinalFoodList),
  (err) => {
    if (err) {
      throw err;
    }
  }
);
