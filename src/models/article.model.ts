import { Category } from "./category.model";

export interface Article {
  id: number;

  slug: string;
  title: string;
  excerpt: string;

  img: string;

  reading_time: string;
  featured: boolean;
  editors_choice: boolean;

  created_at: Date;
  updated_at: Date;
  published_at: Date;

  created_by_id: number;
  updated_by_id: number;

  content: string;

  categories: Array<Category>
}

export interface ArticlesCollection {
  articles : Array<Article>;
  count : number;
}