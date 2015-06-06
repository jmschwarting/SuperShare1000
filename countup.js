// var distance = 10;
// var incrementSpeed = 100;
// var end = 1000;
// var start = end-distance;
// var incrementing = 0;


// var countup = function () {
// 	start++;
// 	$('#to').text(start);
// }

// var runCountup = function () {
// 	for (i = 0; i < distance; i++) { 
// 	    setTimeout(countup(), incrementSpeed);
// 	}
// }

// runCountup();

////////////////////////////////////////////////////////////////////////////////////////////

// var number = 10;

// var countup2 = function () {
// 	number++;
// 	$('#to2').text(number);
// 	if (number > 25) {
// 		clearInterval(countup2);
// 	}
// }

// setInterval(countup2, 1000);




// var target = 3
// var number = target - 10;

// var countup2 = setInterval(function () {
// 	console.log(number);
// 	number++;
// 	$('#to2').text(number);
// 	if (number > target) {
// 		clearInterval(countup2);
// 	}
// }, 50);



// var animateCount = function () {
//   var number = 0;
//   if (totalCount < 15) {
//     number = 0;
//   } else if (totalCount > 15) {
//     number = totalCount - 15;
//   }
//   var countup2 = setInterval(function () {
//     number++;
//     $('#to2').text(number);
//     if (number > totalCount) {
//       clearInterval(countup2);
//     }
//   }, countInterval);
// };