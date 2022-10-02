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

let outlierProteinUnits = simplifiedFoodList.filter((food) => {
  if (food.proteins && food.proteinUnit !== "g") return true;
});

let outlierCarbUnits = simplifiedFoodList.filter((food) => {
  if (food.carbs && food.carbUnit !== "g") return true;
});

let outlierFatUnits = simplifiedFoodList.filter((food) => {
  if (food.fats && food.fatUnit !== "g") return true;
});

fs.writeFile(
  "./results/outlierProteinUnits.json",
  JSON.stringify(outlierProteinUnits),
  (err) => {
    if (err) {
      throw err;
    }
  }
);

fs.writeFile(
  "./results/outlierCarbUnits.json",
  JSON.stringify(outlierCarbUnits),
  (err) => {
    if (err) {
      throw err;
    }
  }
);

fs.writeFile(
  "./results/outlierFatUnits.json",
  JSON.stringify(outlierFatUnits),
  (err) => {
    if (err) {
      throw err;
    }
  }
);
