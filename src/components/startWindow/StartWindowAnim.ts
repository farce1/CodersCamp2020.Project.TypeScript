export const startWindowAnim = (imgClass:string, titleClass:string, btnClass:string): void => {
  let _gsap = require('gsap')
  if(imgClass){
    _gsap.TweenMax.set(`.${imgClass}`, {
      scale: 0,
      transformOrigin: "50% 50%"
    })
    _gsap.TweenMax.from(`.${titleClass}`, 2,{ x:1500, ease: 'bounce', delay: 0});
    _gsap.TweenMax.from(`.${btnClass}`, 1.5, {y:1000, ease: 'power3', delay: 2.2});
    _gsap.TweenMax.from(`.${imgClass}`, 2, {x:-300, ease:'power1',delay:1.8});
    _gsap.TweenMax.from(`.${imgClass}`, 2, {y:-300, ease:'bounce',delay:1.8});
    _gsap.TweenMax.to(`.${imgClass}`, 2, {scale:1, delay: 1.8} );
  }
}
