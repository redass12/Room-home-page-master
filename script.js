const img = document.querySelectorAll('#img');
// const btnNext = document.getElementById('next');
// const btnPrev = document.getElementById('prev');
const sliders = document.querySelectorAll('.slider');


// let i = 0;

// const check = document.getElementById('check');


// const nextSlider = () => {
//     sliders[i].classList.remove('active');
//     // console.log(i);
//     if(i>=sliders.length-1){
//         i =-1;
//     }
//     sliders[i+1].classList.add('active');
//     i++;

// }

// const prevSlider = () => {
// console.log(i);
// sliders[i].classList.remove('active');
// if(i === 0) {
//     i = 3;
// }
// sliders[i-1].classList.add('active');
// console.log(i);
// i--;
// }


// const prevNextBtn = (prevOrNext) =>{
// if(prevOrNext === 'Next'){
//     return nextSlider();
// }else{
//     return prevSlider();
// }
// }



console.log(img);


function displayAllImgs (x){
    if(x.matches){
        img.forEach((img,i)=> {
            img.src = `./images/mobile-image-hero-${i+1}.jpg`
        });


    }else{
        img.forEach((img,i)=> {
            img.src = `./images/desktop-image-hero-${i+1}.jpg`
        })
    }
    
}

const x = window.matchMedia("(max-width: 420px)");
displayAllImgs(x);

// btnNext.addEventListener('click', prevNextBtn.bind(null,'Next'));
// btnPrev.addEventListener('click',prevNextBtn.bind(null,'Prev'));
// check.addEventListener('change', () => {
//     console.log(check.checked);
//     if(check.checked) {
//         console.log('reda');
//     }
// })