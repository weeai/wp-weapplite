'use strict';

var API_URI = 'https://www.xianduoji.cn/wp-json/wp/v2/';

function _api(endpoint){
  return API_URI + endpoint;
}

module.exports = {
  Pages: _api('pages')
};