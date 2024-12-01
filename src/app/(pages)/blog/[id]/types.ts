export interface BlogCardProps {
  title: string;
  description: string;
  author: string;
  date?: string; // Use `Date` if you parse it as a Date object
  slug: string | number;
  imageUrl: string;
}
