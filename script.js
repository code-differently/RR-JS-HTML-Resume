document.addEventListener('scroll', (event)=>{

    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    if(scrollTop> 700){
        console.log('hello');
        const socialBanner = document.querySelector('.banner__splash__social');
        console.log({socialBanner})
        socialBanner.classList.add('banner__splash__social--fixed')
    }
    if(scrollTop < 800){
        console.log('hello');
        const socialBanner = document.querySelector('.banner__splash__social');
        console.log({socialBanner})
        socialBanner.classList.remove('banner__splash__social--fixed')
    }
})