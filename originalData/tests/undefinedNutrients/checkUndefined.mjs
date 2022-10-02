import foodList from "../../foodList.json" assert { type: "json" };
import fs from "fs";

const simplifiedFoodList = foodList.map((food) => {
  return {
    description: food.description,
    baseQty: food.base_qty,
    baseUnit: food.base_unit,
    proteins: food.attributes.protein?.qty,
    proteinUnit: food.attributes.protein?.unit,
    carbs: food.attributes.carbohydrate?.qty,
    carbUnit: food.attributes.carbohydrate?.unit,
    fats: food.attributes.lipid?.qty,
    fatUnit: food.attributes.lipid?.unit,
  };
});

let undefinedProteins = simplifiedFoodList.filter((food) => {
  if (!food.proteins) return true;
});

let undefinedCarbs = simplifiedFoodList.filter((food) => {
  if (!food.carbs) return true;
});

let undefinedFats = simplifiedFoodList.filter((food) => {
  if (!food.fats) return true;
});

fs.writeFile(
  "./results/undefinedProteins.json",
  JSON.stringify(undefinedProteins),
  (err) => {
    if (err) {
      throw err;
    }
  }
);

fs.writeFile(
  "./results/undefinedCarbs.json",
  JSON.stringify(undefinedCarbs),
  (err) => {
    if (err) {
      throw err;
    }
  }
);

fs.writeFile(
  "./results/undefinedFats.json",
  JSON.stringify(undefinedFats),
  (err) => {
    if (err) {
      throw err;
    }
  }
);
