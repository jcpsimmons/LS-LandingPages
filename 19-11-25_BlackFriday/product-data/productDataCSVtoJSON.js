const csv = require("csv-parser");
const fs = require("fs");

json = {};

fs.createReadStream("ProductData.csv")
  .pipe(csv())
  .on("data", row => {
    sku = parseInt(row["sku"]);
    if (!Number.isNaN(sku)) {
      json[sku] = row;
    }
  })
  .on("end", () => {
    json = JSON.stringify(json);
    fs.writeFile("./output.json", json, err => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("File has been created");
    });
  });
