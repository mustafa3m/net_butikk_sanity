export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },

    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },

    {
      title: "Description",
      name: "description",
      type: "text",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },

    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "seeproduct",
      title: "seeproduct",
      type: "string",
    },
    {
      title: "Quantity",
      name: "quantity",
      type: "number",
    },
  ],
};
