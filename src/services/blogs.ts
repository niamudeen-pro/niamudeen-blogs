import fs from "fs";
import path from "path";
import matter from "gray-matter";

const getAllBlogs = () => {
  const blogsDir = path.join(process.cwd(), "src/content");
  const files = fs.readdirSync(blogsDir);
  if (files?.length === 0) return [];
  const blogs = files.map((file) => {
    const filePath = path.join(blogsDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return data;
  });
  return blogs || [];
};

const getSingleBlog = (id: string | null) => {
  if (!id) return null;
  // Get the directory path
  const blogsDir = path.join(process.cwd(), "src/content");

  // Read all the files in the directory
  const files = fs.readdirSync(blogsDir);

  // Find the file that matches the id
  const file = files.find((file) => file === `${id}.md`);

  // If the file doesn't exist, return null or throw an error
  if (!file) {
    console.error(`File not found: ${id}.md`);
    return null;
  }

  // Read the file content
  const filePath = path.join(blogsDir, file);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  // Return the file content as a string
  return fileContent;
};

export { getAllBlogs, getSingleBlog };
