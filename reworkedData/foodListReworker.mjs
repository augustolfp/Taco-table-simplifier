import foodList from "../originalData/foodList.json" assert { type: "json" };
import fs from "fs";

function resolveOutlierQty(qty) {
  if (qty === undefined) return 0;
  if (qty === "*") return qty;
  if (typeof qty === "string" && qty !== "*") return 0;
  if (typeof qty === "number") return qty;
}

function resolveOutlierUnits(unit) {
  if (unit === undefined) return "g";
  else return unit;
}

function resolveOutlierEnergy(energy) {
  if (typeof energy === "number") return energy;
  if (energy === "NA") return 0;
  if (energy === "*") return energy;
}

let reworkedFoodList = foodList.map((food) => {
  return {
    description: food.description,
    baseQty: food.base_qty,
    baseUnit: food.base_unit,
    proteins: resolveOutlierQty(food.attributes.protein?.qty),
    proteinUnit: resolveOutlierUnits(food.attributes.protein?.unit),
    carbs: resolveOutlierQty(food.attributes.carbohydrate?.qty),
    carbUnit: resolveOutlierUnits(food.attributes.carbohydrate?.unit),
    fats: resolveOutlierQty(food.attributes.lipid?.qty),
    fatUnit: resolveOutlierUnits(food.attributes.lipid?.unit),
    kcals: resolveOutlierEnergy(food.attributes.energy.kcal),
  };
});

fs.writeFile(
  "reworkedFoodList.json",
  JSON.stringify(reworkedFoodList),
  (err) => {
    if (err) {
      throw err;
    }
  }
);
