const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

slides.forEach(function(slide,index){
    slide.style.left = `${index*100}%`
})



let counter = 0;

nextBtn.addEventListener("click",function(){
    counter++;
    carousel();
})

prevBtn.addEventListener("click",function(){
    counter--;
    carousel();
})


function carousel(){
    slides.forEach(function(slide){
        console.log(counter);

        if(counter == slides.length){
            counter = 0;
        }
        if(counter == -1){
            counter = slides.length - 1;
        }

        // if(counter <= 0){
        //     prevBtn.style.display = "none"

        // }
        // else{
        //         prevBtn.style.display = "block"
        // }

        // if(counter == slides.length -1){
        //     nextBtn.style.display = "none"
        // }
        // else{
        //     nextBtn.style.display = "block"
        // }
           

        slide.style.transform = `translateX(-${counter*100}%)`
    })
}
// prevBtn.style.display = "none"