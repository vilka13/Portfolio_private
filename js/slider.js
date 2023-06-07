const itemsSlider = document.querySelectorAll(".project");
const countSliderShow = 3;
let currentpage = 0;

document.querySelector('.projects').style.height = itemsSlider[4].clientHeight + 50 + "px";
for (let index = 0; index < itemsSlider.length; index++) {
    const element = itemsSlider[index];
    element.style.position = "absolute";
    element.style.transform = `translateX(calc(${index*100}% + ${index*30}px))`;
}

document.querySelector(".btn-slider.right").addEventListener('click' , ()=>{
    setTimeout(()=>{
        if(currentpage+1 == itemsSlider.length / countSliderShow){
            currentpage = 0;
            for (let index = 0; index < countSliderShow; index++) {
                itemsSlider[(index) * (currentpage+1)].style.transition = '0s';
                itemsSlider[(index) * (currentpage+1)].style.transform = `translateX(calc(${100*(index+3)}% + ${index*30}px))`;
                setTimeout(()=>{
                    itemsSlider[(index) * (currentpage+1)].style.transition = '0.3s'

                    itemsSlider[(index) * (currentpage+1)].style.transform = `translateX(calc(${100*(index)}% + ${index*30}px))`;

                },50)
                let pos = 3 - index;
                itemsSlider[(index+3) * (currentpage+1)].style.transform = `translateX(calc(${-100*pos}% + ${(index+3)*-30}px))`;
                itemsSlider[(index+3) * (currentpage+1)].style.transition = '0.37s';


                setTimeout(()=>{
                    itemsSlider[(index+3) * (currentpage+1)].style.transition = '0s';
                    itemsSlider[(index+3) * (currentpage+1)].style.transform = `translateX(calc(${100*(index+3)}% + ${(index+3)*30}px))`;
                    setTimeout(()=>{
                        itemsSlider[(index+3) * (currentpage+1)].style.transition = '0.4s'

                    },20)
                },400)
            }
        }else{
            currentpage++;
            for (let index = 0; index < countSliderShow; index++) {
                let pos = 3 - index;
                itemsSlider[index * currentpage].style.transform = `translateX(calc(${-100*pos}% + ${index*-30}px))`;
                itemsSlider[(index+3) * currentpage].style.transform = `translateX(calc(${index*100}% + ${index*30}px))`;
            }
        }
    }, 100)


})
document.querySelector(".btn-slider.left").addEventListener('click' , ()=>{
    if(currentpage == 0){
        currentpage++;
        for (let index = 0; index < countSliderShow; index++) {
            let pos = 3 - index;
            itemsSlider[index+3 * currentpage].style.transition = '0s';
            itemsSlider[index+3 * currentpage].style.transform = `translateX(calc(${-100*pos}% + ${index*30}px))`;
            setTimeout(()=>{
                itemsSlider[index+3 * currentpage].style.transition = '0.35s'

                itemsSlider[index+3 * currentpage].style.transform = `translateX(calc(${100*index}% + ${index*30}px))`;

            },50)
            itemsSlider[index * currentpage].style.transform = `translateX(calc(${100*(index+3)}% + ${(index+3)*30}px))`;
            itemsSlider[index * currentpage].style.transition = '0.35s';
            setTimeout(()=>{
                itemsSlider[index * currentpage].style.transition = '0s';
                let pos = 3 - index;
                itemsSlider[index * currentpage].style.transform = `translateX(calc(${-100*pos}% + ${index*30}px))`;
                setTimeout(()=>{
                    itemsSlider[index * currentpage].style.transition = '0.5s'
                },20)
            },400)
        }
    }else{
        for (let index = 0; index < countSliderShow; index++) {
            itemsSlider[(index+3) * currentpage].style.transform = `translateX(calc(${(index+3)*100}% + ${(index+3)*30}px))`;
            itemsSlider[index * currentpage].style.transform = `translateX(calc(${index*100}% + ${index*30}px))`;
        }
        currentpage--;
    }
})