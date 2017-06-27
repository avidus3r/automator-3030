const request   = require('request'),
      Selector  = require('testcafe').Selector
      element   = require('protractor').element;

let testEngine = 'testcafe';

const Utils = {
  // return http status
  getStatus: (url) => {
    return new Promise((fulfill, reject) => {
      request(url, (error, response, body) => {
        if (error) reject(error);
        fulfill(response.statusCode);
      });
    });
  },
  // select element by selector
  getElement: (selector) => {
    return testEngine === 'testcafe' ? Selector(selector) : element(by.css(selector));
  },
  // select element by element
  findElement: (selector, parent) => {
    return parent.find(selector);
  }
};

module.exports = Utils;