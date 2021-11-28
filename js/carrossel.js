var lastIndex = 0;
var images = document.querySelectorAll('.list-img');

images.forEach((element,index)=>{
    document.querySelectorAll('.bullet')[index].addEventListener('click', () => {
        let lastImage = document.querySelectorAll('.list-img')[lastIndex];
        let actualImage = document.querySelectorAll('.list-img')[index];
        lastImage.style.opacity = 0;
        actualImage.style.opacity = 1;

        document.querySelectorAll('.bullet')[lastIndex].classList.remove('active-bullet');
        document.querySelectorAll('.bullet')[index].classList.add('active-bullet');


        lastIndex = index;
    })
});

