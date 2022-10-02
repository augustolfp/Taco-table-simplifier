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
    kcals: food.attributes.energy?.kcal,
  };
});

const outlierEnergy = simplifiedFoodList.filter((food) => {
  if (typeof food.kcals !== "number") return true;
});

fs.writeFile(
  "./results/outlierEnergy.json",
  JSON.stringify(outlierEnergy),
  (err) => {
    if (err) {
      throw err;
    }
  }
);
