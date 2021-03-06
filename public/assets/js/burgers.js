// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newEat = $(this).data("neweat");
  
      var newEatState = {
        devoured: newEat
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatState
      }).then(
        function() {
          console.log("changed eat to", newEat);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      console.log("this is burgers.js inside .create-burger");
  
      var newBurger = {
        burger_name: $("#bu").val().trim(),
        devoured: 0
      };

      console.log("newBurger: " + JSON.stringify(newBurger));
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".delete-burger").on("click", function(event) {
      console.log("this is burgers.js inside .delete-burger");
      var id = $(this).data("id");
      console.log("id = " + id);
      
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger: ", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  


  });
  