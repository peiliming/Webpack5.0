import '../assets/sass/normalize.scss';
import '../assets/sass/common.scss';

import $ from 'jquery';
window.$ = $;
window.jQuery = $;

$(function () {
  alert($('h1').text());
});
