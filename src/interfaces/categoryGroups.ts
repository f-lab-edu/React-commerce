export interface category {
  categoryId: string;
  name: string;
  level: number;
  sortOrder: number;
}

export interface categoryGroup {
  groupId: number;
  name: string;
  sortOrder: number;
  icon: string;
  categories: category[];
}

export interface categoryData {
  data: categoryGroup[];
}
