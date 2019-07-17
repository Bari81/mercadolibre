module.exports = class ItemsList {
  constructor(builder) {
    this.author = builder.author;
    this.categories = builder.categories;
    this.items = builder.items;
    this.available_filters = builder.available_filters;
  }
};
