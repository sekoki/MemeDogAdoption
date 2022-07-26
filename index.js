function myFunction(event) {
    event.preventDefault();
    console.log(event);
    document.getElementById('form').style.display ='none';
    // document.getElementsByClassName('child')[1].style.display = 'block';

}





    function myFunction(showStuff) {
        var divs = document.getElementsByClassName('div1');
        if (persona.value == 'introvert') {
            for (var i = 0; i < divs.length; i++) {
            divs[i].style.display = 'block';
        }
        }
    }

