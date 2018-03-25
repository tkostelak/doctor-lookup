import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
// import '../.env';

$(document).ready(function() {

  $('#maladySubmit').click(function(event){
    event.preventDefault();

    $('#result').text('');

    let malady = $('#malady').val();

    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${malady}&location=wa-seattle&skip=0&limit=10&user_key=`).then(function(response){
      console.log(response);
    });
  });
});
