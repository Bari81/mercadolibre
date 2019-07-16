module.exports = class Item {
  constructor(builder) {
    this.id = builder.id;
    this.title = builder.title;
    this.picture = builder.picture;
    this.condition = builder.condition;
    this.free_shipping = builder.free_shipping;
    this.price = builder.price;
    this.sold_quantity = builder.sold_quantity;
    this.description = builder.description;
  }
};
