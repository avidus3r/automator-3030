const request   = require('request'),
      Selector  = require('testcafe').Selector
      element   = require('protractor').element;

let testEngine = 'testcafe';

const Utils = {
  getStatus: (url) => {
    return new Promise((fulfill, reject) => {
      request(url, (error, response, body) => {
        if (error) reject(error);
        fulfill(response.statusCode);
      });
    });
  },
  getElement: (selector) => {
    return testEngine === 'testcafe' ? Selector(selector) : element(by.css(selector));
  },
  findElement: (selector, parent) => {
    return parent.find(selector);
  }
};

module.exports = Utils;