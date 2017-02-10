// working file for rough draft

var myAppId = '8a645784';
var myAppKey = '311449cd85d0a73dd09cad74ee661a9d'
var dailyCals = 0;


// Males: BMR = (15.875*Height + 4.54*Weight - 5*Age + 5) * 1.5
// Women: BMR = (15.875*Height + 4.54*Weight - 5*Age - 161) * 1.4

function callNixApi(userInput) {
	var calledSearchItem;
	$('.resultBox').html('');
	$.ajax({
		type: 'GET',
		async: true,
		url: 'https://api.nutritionix.com/v1_1/search/'+ userInput +'?'+
		'fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2C&appId=' + myAppId + '&appKey=' + myAppKey,
		success: function(d) {
			calledSearchItem = d.hits;
			calledSearchItem.map(function(item) {
				var foodLists = item.fields
				$('.resultBox').append(
					'<div class="foodResultContainer">'+
						'<h2>' + foodLists.brand_name +  "  " +  foodLists.item_name + '</h2>' +
						'<h3>Calories: <span class="calories">' + foodLists.nf_calories + '</span></h3>' +
						'<h3>Serving Size: ' + foodLists.nf_serving_size_qty + ' ' + foodLists.nf_serving_size_unit +'</h3>' +
					'</div>'
					);
			});
		}
	});
}

function searchValue() {
	var listValue = document.getElementById('searchBar').value;
	callNixApi(listValue);
}

// keeps page from reformatting and forgetting everything
$('#searchForm').submit(function(e) {
	e.preventDefault();
});

// event handler
$(document).on("click", ".foodResultContainer", function(e) {
	dailyCals += parseInt($(this).find('.calories').text())
	$('.dailyTotal').text('Daily Running Calorie Total: ' + dailyCals)
	$('.resultBox').html('')
})

$(document).on("click", ".yourBeerDisplayBox", function() {
	var finalBMR = localStorage.getItem('BMR')
  var selectedBeer = document.getElementById("beerChoice").value
  switch (selectedBeer) {
    case "1":
      yourBeers = parseInt((finalBMR - dailyCals)/90)
      break;
    case "2":
      yourBeers = parseInt((finalBMR - dailyCals)/150)
      break;
    case "3":
      yourBeers = parseInt((finalBMR - dailyCals)/180)
      break;
    case "4":
      yourBeers = parseInt((finalBMR - dailyCals)/220)
      break;
  }


  alert('You get ' + yourBeers + ' today!');
})
