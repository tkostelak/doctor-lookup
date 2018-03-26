import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import './styles.css';

$(document).ready(function() {

  $("#containerClearName").click(function(){
    location.reload();
  });

  $("#containerClear").click(function(){
    location.reload();
  });

  $("#maladySubmit").click(function(event){
    event.preventDefault();
    $("#result").text('');

    let malady = $('#malady').val();

    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?query=${malady}&location=wa-seattle&user_location=47.6062%2C%20122.3321&sort=distance-asc&skip=0&limit=10&user_key=`).then(function(response){
      if(response.data.length === 0)
      {
        $("#doctorResult").append(`<h3>Your search criteria did not return any doctors, please try again!</h3>`);
      }

      for(let i = 0; i < response.data.length; i ++)
      {
        $("#doctorResult").append(`<div class="doctorContainer">
                                   <img src= '${response.data[i].profile.image_url}' id='profileImage'>
                                   <h3>Doctor: ${response.data[i].profile.first_name} ${response.data[i].profile.last_name}</h3>
                                   <h3>Phone Number: ${response.data[i].practices[0].phones[0].number}</h3>
                                   <h3>Address: ${response.data[i].practices[0].visit_address.street}</h3>
                                   <h3>${response.data[i].practices[0].visit_address.city}, ${response.data[i].practices[0].visit_address.state_long}, ${response.data[i].practices[0].visit_address.zip}</h3>
                                   <h3>Accepts new patients: ${response.data[i].practices[0].accepts_new_patients}</h3>
                                   <h3>Website: <a href='${response.data[i].practices[0].website}'>${response.data[i].practices[0].website}</a></h3>
                                   </div> <hr>`);
      }
      }).fail(function(error) {
      $("#errorText").append(`<h3>${error.responseText}</h3>`);
        });
      });

    $("#nameSubmit").click(function(event){
      event.preventDefault();

      let nameSearch = $('#name').val();

      $.get(`https://api.betterdoctor.com/2016-03-01/doctors?name=${nameSearch}&location=wa-seattle&user_location=47.6062%2C%20122.3321&sort=distance-asc&skip=0&limit=10&user_key=`)
        .then(function(response){
        if(response.data.length === 0)
        {
          $("#doctorResult").append(`<h3>Your search criteria did not return any doctors, please try again!</h3>`)
        }

        for(let i = 0; i < response.data.length; i ++)
        {
          $("#doctorResult").append(`<div class="doctorContainer">
                                     <img src= '${response.data[i].profile.image_url}' id='profileImage'>
                                     <h3>Doctor: ${response.data[i].profile.first_name} ${response.data[i].profile.last_name}</h3>
                                     <h3>Phone Number: ${response.data[i].practices[0].phones[0].number}</h3>
                                     <h3>Address: ${response.data[i].practices[0].visit_address.street}</h3>
                                     <h3>${response.data[i].practices[0].visit_address.city}, ${response.data[i].practices[0].visit_address.state_long}, ${response.data[i].practices[0].visit_address.zip}</h3>
                                     <h3>Accepts new patients: ${response.data[i].practices[0].accepts_new_patients}</h3>
                                     <h3>Website: <a href='${response.data[i].practices[0].website}'>${response.data[i].practices[0].website}</a></h3>
                                     </div> <hr>`);
        }
        }).fail(function(error) {
          $("#errorText").append(`<h3>${error.responseText}</h3>`);
          });
      });
  });
