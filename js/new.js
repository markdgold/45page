var year = new Date().getFullYear();
var month = new Date().getMonth();
var months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug','sep','oct','nov','dec']
var climbs = document.getElementsByTagName('article');

$("section").find('article:not(.' + months[month]+')').css("display", "none");