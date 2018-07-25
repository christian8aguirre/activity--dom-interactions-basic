//--------------------------------------------------------
//TASK 1: Add the text 'List of Friends' to .title element  
//--------------------------------------------------------
var h3 = document.querySelector(".title");
h3.textContent = "List of Friends";


//--------------------------------------------------------
//TASK 2: Put this array of strings as <li> elements
//        onto the friends list 
//
//     BONUS: do it in reverse order.
//--------------------------------------------------------

var friendsList = ['Jimmy G.', 'Scotty M.', 'Patty L.', 'Kelly F.', 'Kitty S.']
var template = "";

    for(var i = friendsList.length -1 ; i >= 0 ; i-- ) {
        template += "<li>" + friendsList[i] + "</li>" 
    }
var ul = document.querySelector(".friends-list");
ul.innerHTML = template;


//--------------------------------------------------------
//TASK 3: Make all of the text capitalized in the <li> elements with a 
//        class of 'urgent'
//     
//        BONUS: Capitalize AND make bold the elements with
//               a class of 'urgent' 
//--------------------------------------------------------

var listUrgent = document.querySelectorAll(".urgent");
listUrgent = [...listUrgent];
var template = "";

listUrgent.forEach(function (item) {
    template = "<strong>" + item.textContent.toUpperCase() + "</strong>";
    item.innerHTML = template;
});
