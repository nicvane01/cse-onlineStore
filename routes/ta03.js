const path = require("path");

const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  const request = require("request");
  let url = "'https://byui-cse.github.io/cse341-course/lesson03/items.json'";
  let options = { json: true };

  request(url, options, (error, res, body) => {
    if (error) {
      return console.log(error);
    }

    if (!error && res.statusCode == 200) {
      const data = JSON.stringify(body);
    }
  });
  res.render("ta03", {
    pageTitle: "Team Activity 3",
    path: "/admin/ta03",
    data: data,
  });
});

module.exports = router;
