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

let outlierProteins = simplifiedFoodList.filter((food) => {
  if (typeof food.proteins === "string") return true;
});

let outlierCarbs = simplifiedFoodList.filter((food) => {
  if (typeof food.carbs === "string") return true;
});

let outlierFats = simplifiedFoodList.filter((food) => {
  if (typeof food.fats === "string") return true;
});

fs.writeFile(
  "./results/outlierProteins.json",
  JSON.stringify(outlierProteins),
  (err) => {
    if (err) {
      throw err;
    }
  }
);

fs.writeFile(
  "./results/outlierCarbs.json",
  JSON.stringify(outlierCarbs),
  (err) => {
    if (err) {
      throw err;
    }
  }
);

fs.writeFile(
  "./results/outlierFats.json",
  JSON.stringify(outlierFats),
  (err) => {
    if (err) {
      throw err;
    }
  }
);
