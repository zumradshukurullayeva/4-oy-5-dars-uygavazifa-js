const myMesseges = document.getElementsByClassName('messages')[0];
const myInput = document.getElementsByClassName('input')[0];

myInput.addEventListener('keyup', function(event){
    if(event.keyCode === 13) {
        myMesseges.innerHTML += '<div class="message">' + event.target.value + '</div>';
        event.target.value = "";
    }
})

