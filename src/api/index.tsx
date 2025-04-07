const api = {
  product: {
    list: "/products",
    default: "/product",
    // image: "/product/getimage",

    // filter by category, type,
    category: (id: string) => `/product/category/${id}`,
    type: (id: string) => `/product/type/${id}`,
    stock: (id: string) => `/product/depot/${id}`,
  },
  stock: { list: "/stocks", default: "/stock" },
  category: {
    list: "/categorys",
    default: "/category",
    sub: "/category/subCategories",
  },
  type: { list: "/types", default: "/type", sub: "/type/subTypes" },
  summary: { list: "/movements", default: "/movement" },
  user: {
    list: "/users",
    default: "/user",
    auth: "/auth",
    email: "/user/email",
  },
  brand: {
    list: "/brands",
    default: "/brands",
  },
  testimonial: {
    list: "/testimonials",
    default: "/testimonial",
  },
  actuality: {
    list: "actualities",
    default: "actuality",
  },
};

export default api;
