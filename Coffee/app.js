var button = document.querySelector("#btn__submit");

button.addEventListener("click", function(e){
    e.preventDefault();
    var name__user = document.querySelector('#name__user').value;
    var surname__user = document.querySelector('#surname__user').value;

    var span__return = document.querySelector(".span__return");
    span__return.textContent =`Здравствуйте, ${name__user} ${surname__user}`;
});