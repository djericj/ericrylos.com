"use strict";

const fs = require("fs");
const request = require("request");

const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url).pipe(fs.createWriteStream(path)).on("close", callback);
  });
};

async function getData(name, url) {
  let path = "/var/www/ericrylos.com/assets/" + name + ".json";
  download(url, path, () => {
    console.log(path + " ✅ Done!");
  });

  let rawdata = fs.readFileSync(
    "/var/www/ericrylos.com/assets/" + name + ".json"
  );
  let data = JSON.parse(rawdata);
  let savePath = "/var/www/ericrylos.com/assets/disc/" + name + "/";

  for (var d in data.results) {
    let t = data.results[d];
    let fileName = t.trackId + ".jpg";
    let url = t.artworkUrl100.replace("100x100", "1000x1000");
    let path = savePath + fileName;
    console.log(url);
    download(url, path, () => {
      console.log(path + " ✅ Done!");
    });
  }
}

getData(
  "downgrooves",
  "https://itunes.apple.com/search?term=Downgrooves&limit=100"
);
getData(
  "eric-rylos",
  "https://itunes.apple.com/search?term=Eric%20Rylos&limit=100"
);
getData("evotone", "https://itunes.apple.com/search?term=Evotone&limit=100");
getData(
  "mario-and-eric-j",
  "https://itunes.apple.com/search?term=Mario%20and%20Eric%20J&limit=100"
);

// getImages("downgrooves");
// getImages("eric-rylos");
// getImages("evotone");
// getImages("mario-and-eric-j");
