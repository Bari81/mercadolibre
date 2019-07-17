var Item = require("./Item");
var ItemsList = require("./ItemsList");
//Builder used to create objects in response
module.exports = {
  itemsListBuilder: function() {
    let author;
    let categories;
    let items;
    let available_filters;

    return {
      setAuthor: function(author) {
        this.author = author;
        return this;
      },
      setCategories: function(categories) {
        this.categories = categories;
        return this;
      },
      setItems: function(items) {
        this.items = items;
        return this;
      },
      setAvailable_filters(available_filters) {
        this.available_filters = available_filters;
        return this;
      },
      build: function() {
        return new ItemsList(this);
      }
    };
  },

  itemBuilder: function() {
    let id;
    let title;
    let picture;
    let condition;
    let free_shipping;
    let price;
    let sold_quantity;
    let description;
    let condition_attr;

    return {
      setId: function(id) {
        this.id = id;
        return this;
      },
      setTitle: function(title) {
        this.title = title;
        return this;
      },
      setPicture: function(picture) {
        this.picture = picture;
        return this;
      },
      setCondition: function(condition) {
        this.condition = condition;
        return this;
      },
      setFree_shipping: function(free_shipping) {
        this.free_shipping = free_shipping;
        return this;
      },
      setPrice: function(price) {
        this.price = price;
        return this;
      },
      setSold_quantity: function(sold_quantity) {
        this.sold_quantity = sold_quantity;
        return this;
      },
      setDescription: function(description) {
        this.description = description;
        return this;
      },
      setCondition_attr: function(condition_attr) {
        this.condition_attr = condition_attr;
        return this;
      },
      build: function() {
        return new Item(this);
      }
    };
  }
};
