export interface Category {
  id: number;

  slug: string;
  title: string;
  description: string;

  img: string;

  created_at: Date;
  updated_at: Date;
  published_at: Date;

  created_by_id: number;
  updated_by_id: number;
}

export interface CategoryCollection {
  categories : Array<Category>,
  count : number
}