interface category {
  categoryId: string;
  name: string;
  level: number;
  sortOrder: number;
}

export default interface categoryGroup {
  groupId: number;
  name: string;
  sortOrder: number;
  icon: string;
  categories: category[];
}
