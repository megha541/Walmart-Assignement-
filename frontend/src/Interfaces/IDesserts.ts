type nutritionInfo = {
  calories: number | null | string | File;
  fat:   number | null | string | File;
  carbs:   number | null | string | File;
  protein:  number | null | string | File;
};

export interface IDessert {
  dessert:  number | null | string | File;
  nutritionInfo: nutritionInfo;
}
