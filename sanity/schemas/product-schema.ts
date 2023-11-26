import { defineField, defineType } from "sanity";

export const product = defineType({
  name:"product",
  title:"Products",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Product Name",
      type: "string",
    }),
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "image",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "sku",
      title: "SKU",
      type: "string",
    },
    {
      name: "currency",
      title: "Currency",
      type: "string",
    },
  ],
});
