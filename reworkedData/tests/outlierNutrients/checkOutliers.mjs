import reworkedFoodList from "../../reworkedFoodList.json" assert { type: "json" };
import fs from "fs";

const outliers = reworkedFoodList.filter((food) => {
  if (typeof food.proteins !== "number") return true;
  if (typeof food.carbs !== "number") return true;
  if (typeof food.fats !== "number") return true;
  if (typeof food.kcals !== "number") return true;
});

fs.writeFile("./results/outliers.json", JSON.stringify(outliers), (err) => {
  if (err) {
    throw err;
  }
});
