import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

$(document).ready(function() {


  $("#maladySubmit").click(function(event){
    event.preventDefault();

    $("#result").text('');

    let malady = $('#malady').val();

    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${malady}&location=wa-seattle&skip=0&limit=10&user_key=`).then(function(response){
      if(response.data.length === 0)
      {
        $("#doctorResult").text('Your search criteria did not return any doctors, please try again!')
      }

      for(let i = 0; i < response.data.length; i ++)
      {
        $("#doctorResult").append(`<h3>${response.data[i].practices[0].name}</h3>`);
      }
    });
  });
});
