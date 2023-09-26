const slides=document.querySelectorAll(".slider")
 var counter=0;
 slides.forEach(
    (slider,index) => {
    slider.style.left = `${index * 100}%`
    
 })
 const prev= () =>
{ 
    if (counter == 0) {
        counter = slides.length - 1;
        slideImage();
    } else {
        counter--;
        slideImage();
    }
}
const next= () =>
{
    if (counter == slides.length - 1) {
        counter = 0;
        slideImage();
    } else {
        counter++;
        slideImage();
    }
} 
 const slideImage=() =>
 {
    slides.forEach(
        (slider) =>
        {
            slider.style.transform =`translateX(-${counter *100}%)`
        }
    )
 }
 
