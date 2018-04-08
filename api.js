var request = require('request');
const _Cache = [];
function getData (callback) {
  var options = { method: 'GET',
  url: 'http://terriblytinytales.com/test.txt',
  headers: {}};

  request(options, function (error, response, body) {
    if (error) { callback (error, null)}
    callback(null, body);
  });
}

function wordFrequency(txt , callback){
  var wordArray = txt.split(/[ .?!,*'"]/);
  var newArray = [], wordObj;
  wordArray.forEach(function (word) {
    wordObj = newArray.filter(function (w){
      return w.text == word;
    });
    if (wordObj.length) {
      wordObj[0].size += 1;
    } else {
      newArray.push({text: word, size: 1});
    }
  });
  newArray = newArray.sort(function (o1, o2) {
    return o2.size - o1.size
  });
  callback(null, newArray);
}

function reqRecords(input, records, callback) {
  let topRecords = records.slice(1, parseInt(input) + 1);
  callback(null, topRecords);
}

module.exports = function (input, callback) {
  getData(function (err, snippet) {
    if (err) { callback (err, null)}
    wordFrequency(snippet, function (err, records) {
      if(err) {callback (err, null)}
      reqRecords(input, records, function (err, selectedRecords) {
        if(err) {callback(err,null)}
        callback(null, selectedRecords);
      });
    })
  })
}