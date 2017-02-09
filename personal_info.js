// event handler upon clicking submit button


var userBMR = 0

$('#userDataSubmit').click(function(event) {
  //obtain user inputs
    var userAgeNum = parseInt(document.getElementById("userAge").value)
    var userHeightNum = parseInt(document.getElementById("userHeight").value)
    var userWeightNum = parseInt(document.getElementById("userWeight").value)
    var userGenderValue = document.getElementById("userGender").value
    var userSelection = document.getElementById("beerChoice").value

    // Males: BMR = (15.875*Height + 4.54*Weight - 5*Age + 5) * 1.5
    // Women: BMR = (15.875*Height + 4.54*Weight - 5*Age - 161) * 1.5

    // use gender-appropriate formula
    switch (userGenderValue) {
      case 'Male':
        userBMR = parseInt((15.875*userHeightNum + 4.54*userWeightNum - 5*userAgeNum + 5) * 1.5);
        break;
      case "Female":
      userBMR = parseInt((15.875*userHeightNum + 4.54*userWeightNum - 5*userAgeNum - 161) * 1.5);
      break;
    }
    //alert("Your daily calorie allowance is " + userBMR);

    $('#bmrResultsBox').text('Your daily calorie allowance is: ' + userBMR);
    event.preventDefault(event);

});
