

/*

const klikni = (dugme) => {
    console.log(dugme.innerText);
}


let btns = document.querySelectorAll('button');


btns.forEach(function (btn) {
    // event listener koji ceka za klik, za svaki button.
   btn.addEventListener('click', function(event) {
    let clicked_btn = event.target;

    console.log(clicked_btn.innerText);
   });
});


let link = document.querySelector('#link');
link.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.target);

})


let form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log('test');
});

*/

let opcije = document.querySelector('select');
opcije.addEventListener('change',(event) => {
    console.log(event.target.value);

});


window.addEventListener('resize', () => {
    if(window.innerWidth > 1000) {
        console.log('prozor veci od 1000');
    } else {
        console.log('prozor manji od 1000');
    }
});

let input = document.querySelector('input');

input.addEventListener("keydown", (event) => {
    if(event.key === "Delete") {
        alert('obrisano');

    }
})



/*
btn.addEventListener('click', function() {
    console.log('kliknuo');
});

*/




