
const result = document.querySelector(".result span");
let sex = "man", weight, height, age, ratio=1.2;

function calcTotal(){
    console.log(sex, weight, height, age, ratio);
    if(!sex || !weight || !height || !age || !ratio){
        result.textContent = "____";
        return;
    }
    if(sex === 'woman'){
        result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1* height) - (4.3*age)) * ratio);
    }
    else{
        result.textContent = Math.round((88.32 + (13.4 * weight) + (4.8* height) - (5.7*age)) * ratio);
    }
    
}
calcTotal();

    function getStaticInformation(parentSelector, activeClass){
        const elements = document.querySelectorAll(`${parentSelector} div`);

        elements.forEach(item => {
            item.addEventListener('click', (e)=> {
                if(e.target.getAttribute('data-ratio')){
                    ratio = +e.target.getAttribute('data-ratio');
                }
                else{
                    sex = e.target.getAttribute("id");
                }
                console.log(ratio, sex);
    
                elements.forEach(el => {
                    el.classList.remove(activeClass);
                });
                e.target.classList.add(activeClass);
                calcTotal();
            });
        })

    }

    getStaticInformation(".body__sex", "_active");
    getStaticInformation(".active", "_active");

    function getDynamicInformation(selector){
        const input = document.querySelector(selector);

        input.addEventListener('input', ()=>{
            switch(input.getAttribute('id')){
                case 'weight': 
                    weight = +input.value;
                    break;
                case 'height':
                    height= +input.value;
                    break;
                case 'age':
                    age= +input.value;
                    break;
            }
            calcTotal();
        });
    }
    getDynamicInformation("#weight");
    getDynamicInformation("#height");
    getDynamicInformation("#age");
