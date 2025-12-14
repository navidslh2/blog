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
    description: `# ۴ تفاوت اصلی بین <code>forEach()</code> و <code>map()</code> در جاوااسکریپت

جاوااسکریپت متدهای کاربردی زیادی دارد که به ما کمک می‌کنند روی آرایه‌ها پیمایش (iterate) انجام دهیم.  
دو مورد از پرکاربردترین متدها برای این کار عبارت‌اند از:

- <code>Array.prototype.map()</code>
- <code>Array.prototype.forEach()</code>

اما این دو متد، مخصوصاً برای افراد مبتدی، معمولاً کمی گنگ هستند.  
چون هر دو عملیات پیمایش انجام می‌دهند و نوعی خروجی تولید می‌کنند، این سؤال پیش می‌آید:

**تفاوت آن‌ها چیست؟**

در این مقاله به موارد زیر می‌پردازیم:

- تعاریف  
- مقدار بازگشتی  
- قابلیت chain کردن متدهای دیگر  
- تغییرپذیری (Mutability)  
- سرعت اجرا  
- جمع‌بندی نهایی  

---

## تعاریف

### متد <code>map()</code>

متد <code>map()</code> یک تابع را به‌عنوان پارامتر دریافت می‌کند.  
سپس این تابع را روی تک‌تک عناصر آرایه اعمال کرده و یک **آرایه‌ی کاملاً جدید** برمی‌گرداند که با نتایج اجرای این تابع پر شده است.

این یعنی:
- همیشه یک آرایه جدید برمی‌گرداند
- تعداد عناصر آرایه جدید دقیقاً برابر با آرایه اصلی است

\`\`\`js
const myAwesomeArray = [5, 4, 3, 2, 1];

myAwesomeArray.map(x => x * x);

// خروجی: [25, 16, 9, 4, 1]
\`\`\`

---

### متد <code>forEach()</code>

مانند <code>map()</code>، متد <code>forEach()</code> نیز یک تابع را به‌عنوان آرگومان دریافت می‌کند و آن را یک‌بار برای هر عنصر آرایه اجرا می‌کند.

اما برخلاف <code>map()</code>، این متد **آرایه جدیدی برنمی‌گرداند** و خروجی آن <code>undefined</code> است.

\`\`\`js
const myAwesomeArray = [
  { id: 1, name: "john" },
  { id: 2, name: "Ali" },
  { id: 3, name: "Mass" },
];

myAwesomeArray.forEach(element => console.log(element.name));

// خروجی:
// john
// Ali
// Mass
\`\`\`

---

## ۱. مقدار بازگشتی

اولین تفاوت بین <code>map()</code> و <code>forEach()</code> مقدار بازگشتی آن‌هاست.

- <code>forEach()</code> مقدار <code>undefined</code> برمی‌گرداند
- <code>map()</code> یک آرایه جدید شامل عناصر تبدیل‌شده برمی‌گرداند

\`\`\`js
const myAwesomeArray = [1, 2, 3, 4, 5];

myAwesomeArray.forEach(x => x * x);
// مقدار بازگشتی: undefined

myAwesomeArray.map(x => x * x);
// مقدار بازگشتی: [1, 4, 9, 16, 25]
\`\`\`

---

## ۲. قابلیت chain کردن متدها

متد <code>map()</code> قابلیت زنجیره‌ای شدن دارد و می‌توان بعد از آن از متدهایی مانند <code>filter()</code> و <code>reduce()</code> استفاده کرد.  
اما این امکان برای <code>forEach()</code> وجود ندارد.

\`\`\`js
const result = myAwesomeArray
  .map(x => x * x)
  .reduce((total, value) => total + value);

// خروجی: 55
\`\`\`

---

## ۳. تغییرپذیری (Mutability)

- <code>map()</code> آرایه اصلی را تغییر نمی‌دهد و یک آرایه جدید برمی‌گرداند
- <code>forEach()</code> می‌تواند از طریق callback آرایه اصلی را تغییر دهد

به همین دلیل، <code>map()</code> بیشتر با الگوهای immutable استفاده می‌شود.

---

## ۴. سرعت اجرا

تفاوت سرعت بین <code>map()</code> و <code>forEach()</code> بسیار ناچیز است و در اغلب پروژه‌ها اهمیتی ندارد.  
خوانایی و ساختار کد اهمیت بیشتری دارند.

---

## جمع‌بندی نهایی

- <code>map()</code> برای تبدیل داده‌ها و ساخت آرایه جدید مناسب است
- <code>forEach()</code> برای اجرای عملیات بدون خروجی کاربرد دارد
- انتخاب نهایی به use-case و ساختار پروژه بستگی دارد`
  },
  
];


