var input = document.querySelector('input');
var text='';
var finalLocation='';
input.addEventListener('keyup',(e)=>{
    if(e.key=='Enter' && text.length>0)
    {
        finalLocation=text;   
        updateInfo(finalLocation);     
    }
    text=e.target.value;
    // console.log(text);
    // console.log(e);
});

const updateInfo= async (location)=>{
    const result = await fetch('./data.json');
    let data = await result.json();
    let final = data.filter(city=>city.city===location);
    let place = final[0];
    let city= document.querySelector('.city');
    let weather = document.querySelector('.weather');
    let temp = document.querySelector('span');
    document.querySelector('.image').style.backgroundImage = `url(./images/${place.weather}.jpg)`;
    city.innerText= place.city.toUpperCase();
    weather.innerText=place.weather.toUpperCase();
    temp.innerText= place.temp;
    // temp.innerText += '&deg C'; 
    document.querySelector('.card').style.visibility='visible';
    console.log(final[0]);   
}


