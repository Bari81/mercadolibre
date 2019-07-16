module.exports = class ItemOfList {
  constructor(builder) {
    this.author = builder.author;
    this.categories = builder.categories;
    this.items = builder.items;
  }
};
