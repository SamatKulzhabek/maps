const tooltip = document.querySelector('.tooltipa');
const continents = document.querySelectorAll('.continent');
const popupBg = document.querySelector('.info__bg');
const popup = document.querySelector('.info');


continents.forEach( continent => {
    continent.addEventListener('click', function(){
        popup.querySelector('.info__title').innerText = this.dataset.title;
        popupBg.classList.add('active');
    });
    continent.addEventListener('mousemove', function(e){
        tooltip.innerHTML= this.dataset.title;
        tooltip.style.top = (e.y + 20) + 'px';
        tooltip.style.left = (e.x + 20) + 'px';
    });
    continent.addEventListener('mouseenter', function(){
        tooltip.style.display = 'block';
    });

    continent.addEventListener('mouseleave', function(){
        tooltip.style.display = 'none';
    });
});

document.addEventListener('click', (e)=>{
    if(e.target === popupBg){
        popupBg.classList.remove('active');
    }
});