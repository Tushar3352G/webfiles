
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

gsap.from(".nlink",{
    stagger:.2,
    y:15,
    duration:.5,
    opacity:0,
    ease:Power3,
})



Shery.textAnimate(".Ephemeral .heading h2", {
    style:2,
    y: 10,
    delay: 0.3,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,

  });


  gsap.from(".anim2",{
    stagger:.3,
    y:25,
    opacity:0,
    ease:Expo,
    duration:1,
    
  })

Shery.imageEffect(".Ephermeral-img img",{
    style:3,
    ease:Expo,
    config:{"uFrequencyX":{"value":20.66,"range":[0,100]},"uFrequencyY":{"value":4.13,"range":[0,100]},"uFrequencyZ":{"value":27.27,"range":[0,100]},"geoVertex":{"range":[1,64],"value":16.62},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.800344971005341},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.73,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    // debug:true
})


Shery.imageEffect(".imgeff",{
    style:5,
    ease:Expo,
    config:{"a":{"value":1.74,"range":[0,30]},"b":{"value":-0.87,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6923077610822865},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.63,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    // debug:true
})


gsap.from(".Ephermeral-img",{
    y:100,
    z:-3,
    duration:1.5,
    ease:Expo,
})

Shery.imageEffect(".bimg-left",{
    style:5,
    gooey:true,
    // debug:true,
    config:{"a":{"value":3.72,"range":[0,30]},"b":{"value":-1,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.8134765084541884},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":8.06,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.17,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":1.49,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":32}},"discard_threshold":{"value":0.34,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.25,"range":[0,2]},"noise_scale":{"value":20.66,"range":[0,100]}},
})


document.querySelector(".vid-btn a").addEventListener("mouseover",function(){
    gsap.to(".vid-sec video",{
        opacity:1,
        ease:Expo,
        duration:1,
    })
})
document.querySelector(".vid-btn a").addEventListener("mouseleave",function(){
    gsap.to(".vid-sec video",{
        opacity:0,
        duration:1,
    })
})