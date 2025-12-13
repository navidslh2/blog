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
    image: "/1.jpg",
    description: "در این آموزش کامل، **تفاوت‌های کلیدی بین `forEach` و `map` در جاوااسکریپت** را بررسی می‌کنیم و با **نمونه کدهای واقعی** یاد می‌گیریم هر کدام چه کاربردی دارند و در چه شرایطی باید از آن‌ها استفاده کنیم."
  },
  
];


