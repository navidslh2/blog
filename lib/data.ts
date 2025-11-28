import { describe } from "node:test";

export const navbar = [
  { title: "صفحه اصلی", href: "/" },
  {
    title: "دسته بندی",
    children: [
      { title: "java script", href: "/category/javascript" },
      { title: "type script", href: "/category/typescript" },
    ],
  },
];

export const posts = [
  {
    id: 1,
    title: "فرق بین forEach  و map ",
    subject: "java script",
    slug: "different-between-map-and-foreach",
    description: "different-between-map-and-foreach",
    image: "/1.jpg",
  },
  {
    id: 1,
    title: "فرق بین forEach  و map ",
    subject: "java script",
    slug: "different-between-map-and-foreach",
    description: "different-between-map-and-foreach",
    image: "/1.jpg",
  },
  {
    id: 1,
    title: "فرق بین forEach  و map ",
    subject: "java script",
    slug: "different-between-map-and-foreach",
    description: "different-between-map-and-foreach",
    image: "/1.jpg",
  },
  {
    id: 1,
    title: "فرق بین forEach  و map ",
    subject: "java script",
    slug: "different-between-map-and-foreach",
    description: "different-between-map-and-foreach",
    image: "/1.jpg",
  },
  {
    id: 1,
    title: "فرق بین forEach  و map ",
    subject: "java script",
    slug: "different-between-map-and-foreach",
    description: "different-between-map-and-foreach",
    image: "/1.jpg",
  },
  {
    id: 1,
    title: "فرق بین forEach  و map ",
    subject: "java script",
    slug: "different-between-map-and-foreach",
    description: "different-between-map-and-foreach",
    image: "/1.jpg",
  },
  {
    id: 1,
    title: "فرق بین forEach  و map ",
    subject: "java script",
    slug: "different-between-map-and-foreach",
    description: "different-between-map-and-foreach",
    image: "/1.jpg",
  },
  {
    id: 1,
    title: "فرق بین forEach  و map ",
    subject: "java script",
    slug: "different-between-map-and-foreach",
    description: "different-between-map-and-foreach",
    image: "/1.jpg",
  },
  {
    id: 1,
    title: "فرق بین forEach  و map ",
    subject: "java script",
    slug: "different-between-map-and-foreach",
    description: "different-between-map-and-foreach",
    image: "/1.jpg",
  },
  {
    id: 1,
    title: "فرق بین forEach  و map ",
    subject: "java script",
    slug: "different-between-map-and-foreach",
    description: "different-between-map-and-foreach",
    image: "/1.jpg",
  },
  {
    id: 1,
    title: "فرق بین forEach  و map ",
    subject: "java script",
    slug: "different-between-map-and-foreach",
    description: "different-between-map-and-foreach",
    image: "/1.jpg",
  },
];


export type Post = {
  id: number;
  title: string;
  subject: string;
  slug: string;
  description: string;
  image: string;
};