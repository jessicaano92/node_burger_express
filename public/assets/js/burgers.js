//REFACTORED
   $(function(){
     $(".change-devoured").on("click", function(event){
       var id = $(this).data("id");
       var newDevoured = $(this).data("newdevoured")
    
    var newDevouredState = {
      devoured: newDevoured
    };

   //sending PUT request
   $.ajax("/api/burgers/" + id, {

      type: "PUT",

      data: newDevouredState

    }).then (
      function() {
        console.log("changed devoured to", newDevoured);
        // Reloading page to get the updated list
        location.reload();
      });

  });

  
  $(".create-form").on("submit", function(event) {
    //preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      devoured: 0
        };

    // sending POST request
    $.ajax("/api/burgers", {

      type: "POST",

      data: newBurger

     }).then (
      function() {
        console.log("created new burger");
        // Reloading page to get updated list
        location.reload();
       }

     );

   });

      //event listener for the delete button for a burger
  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Sending DELETE request
    $.ajax("/api/burgers/" + id, {

     type: "DELETE"

     }).then (
      function() {
        console.log("deleted burger", id);

        // Reloading page to get the updated list
        location.reload();
       }
     );


   });

 });











