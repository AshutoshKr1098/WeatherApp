var input = document.querySelector('input');
var text='';
var finalLocation='';
input.addEventListener('keyup',(e)=>{
    if(e.key=='Enter' && text.length>0)
    {
        finalLocation=text; 
        finalLocation = finalLocation.toLowerCase();  
        updateInfo(finalLocation);     
    }
    text=e.target.value;
    // console.log(text);
    // console.log(e);
});
let city= document.querySelector('.city');
let weather = document.querySelector('.weather');
let temp = document.querySelector('span');
let image= document.querySelector('.image');
const updateInfo= async (location)=>{
    const result = await fetch('./data.json');
    let data = await result.json();
    let final = data.filter(city=>city.city===location);
    if(final.length==0)
    {        
        document.querySelector('.card').style.visibility = "visible";       
        image.style.backgroundImage='linear-gradient(to right, gray, rgb(56, 51, 51))';
        city.innerText= "INVALID";
        weather.innerText="NOT FOUND"
        temp.innerText= "INVALID"
    }
    else 
    {        
        let place = final[0];        
        image.style.backgroundImage = `url(./images/${place.weather}.jpg)`;
        city.innerText= place.city.toUpperCase();
        weather.innerText=place.weather.toUpperCase();
        temp.innerText= place.temp;
        //document.querySelector('.wrapper').style.backgroundImage= `url(./images/${place.weather}.jpg)`;
        //document.querySelector('.wrapper').style.filter='blur(5px)';        
        // temp.innerText += '&deg C'; 
        document.querySelector('.card').style.visibility='visible';    
        //console.log(final[0]);  
    } 
}


