let popup = document.getElementById('popup');
let btn = document.getElementsByClassName('element_catalog');
let close_btn = document.getElementById('close-btn');

async function fill(i) {
    const response = await fetch("main.json");
    const jsonData = await response.json();
    console.log(jsonData[0].name);

    let name = document.getElementById('bike__name');
    name.innerText = jsonData[i].name;
    let bikeimg = document.getElementById('bike__img');
    bikeimg.src = jsonData[i].img;
    let har = document.getElementById('bike__har');
    har.innerText = jsonData[i].har;
    let type = document.getElementById('bike__type');
    type.innerText = jsonData[i].type;
    let engine = document.getElementById('bike__engine');
    engine.innerText = jsonData[i].engine;
    let cilin = document.getElementById('bike__cilin');
    cilin.innerText = jsonData[i].cilin;
}

for (let i = 0; i<btn.length; i++){
    btn[i].addEventListener("click", function(){
        let a = ["Nightster Special", "Sportster S", "Street Bob 114","Sport Glide","Low Rider ST", "Road King Special", "Road Glide ST", "Pan America 1250", "Freewheeler"];
        let b = a.indexOf(this.getElementsByClassName('elem_title')[0].innerText);
        fill(b);
        popup.classList.remove('display__none');
    });
}

close_btn.addEventListener("click", function(){
    popup.classList.add('display__none');
});

document.addEventListener('keydown', function(event) {
    event.preventDefault();
    console.log(event.code);
    if(!popup.classList.contains('display__none')){
        if (event.code == 'Escape') {
            popup.classList.add('display__none');
        }
    }
});
