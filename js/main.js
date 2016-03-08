var $newH1 = $('<h1>');
var $belowveggies = $('<ul>');
var $aboveH1 = $('<h1>');
var $aboveveggies = $('<ul>');

$newH1.html('Below ground veggies');
$('body').prepend($newH1);


$('body').prepend($belowveggies);

$aboveH1.html('Above ground veggies');
$('body').append($aboveH1);


$('body').append($aboveveggies);

$('ul li').each(function (aboveH1) {
  $(above).prepend('aboveveggies')
});

$('ul li').each(function (newH1) {
  $(below).append('belowveggies')
});
