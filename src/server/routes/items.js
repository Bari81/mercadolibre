var express = require("express");
var router = express.Router();
var request = require("request");
var https = require("https");
var responseBuilder = require("../dto/responseBuilder");

/* GET item and description. */
router.get("/:id", function(req, res, next) {
  let itemResponse = {};
  let descriptionResponse = {};
  function buildResponse() {
    console.log("CALL TO BUILDRESPONSE");
    requestItemPromise(req.params.id).then(function(result) {
      itemResponse = result;
      requestItemDescriptionPromise(req.params.id).then(function(result) {
        descriptionResponse = result;
        buildItem(itemResponse, descriptionResponse, function(data) {
          res.setHeader("Content-Type", "application/json");
          res.json(data);
        });
      });
    });
  }

  buildResponse();
});

function requestItemPromise(id) {
  return new Promise((resolve, reject) => {
    let promiseResponse = {};
    request(`https://api.mercadolibre.com/items/${id}`, (err, res, body) => {
      if (err) {
        return console.log(err);
      }
      resolve(returnPromise(body));
      reject();
    });
    function returnPromise(p) {
      return JSON.parse(p);
    }
  });
}

function requestItemDescriptionPromise(id) {
  return new Promise((resolve, reject) => {
    let promisedResponse = "";
    request(
      `https://api.mercadolibre.com/items/${id}/description`,
      (err, res, body) => {
        if (err) {
          return console.log(err);
        }
        resolve(returnPromise(body));
        reject();
      }
    );
    function returnPromise(p) {
      // console.log("DescriptionPromise: " + p);
      return JSON.parse(p);
    }
  });
}

function buildItem(element, description, callback) {
  //console.log("DESCRIPTION: " + description);
  let author = {};
  author.name = "Alvaro";
  author.lastname = "Eibes";

  let {
    id,
    title,
    thumbnail,
    condition,
    free_shipping,
    currency_id,
    price,
    decimals
  } = element;

  //console.log(id, title, condition, price);

  let priceObj = {};
  priceObj.currency = currency_id;
  priceObj.amount = price;
  priceObj.decimals = decimals;

  let itemObj = new responseBuilder.itemBuilder()
    .setId(id)
    .setTitle(title)
    .setPicture(thumbnail)
    .setCondition(condition)
    .setFree_shipping(free_shipping)
    .setPrice(priceObj)
    .setDescription(description)
    .build();

  callback(itemObj);
}

//GET list of items
router.get("/", function(req, res, next) {
  getJson(req.query.q, function(data) {
    res.json(data);
  });
  function getJson(myId, callback) {
    request(
      "https://api.mercadolibre.com/sites/MLA/search",
      {
        qs: {
          q: req.query.q
        },
        json: true
      },

      (err, res, body) => {
        if (err) {
          return console.log(err);
        }

        let author = {};
        author.name = "Alvaro";
        author.lastname = "Eibes";

        let items = [];
        for (const key in body.results) {
          if (body.results.hasOwnProperty(key)) {
            const element = body.results[key];
            let {
              id,
              title,
              thumbnail,
              condition,
              free_shipping,
              currency_id,
              price,
              decimals
            } = element;

            let priceObj = {};
            priceObj.currency = currency_id;
            priceObj.amount = price;
            priceObj.decimals = decimals;

            let itemObj = new responseBuilder.itemBuilder()
              .setId(id)
              .setTitle(title)
              .setPicture(thumbnail)
              .setCondition(condition)
              .setFree_shipping(free_shipping)
              .setPrice(priceObj)
              .build();

            items.push(itemObj);
          }
        }

        let itemsList = new responseBuilder.itemsListBuilder()
          .setAuthor(author)
          .setItems(items)
          .build();

        callback(itemsList);
      }
    );
  }
});
module.exports = router;
