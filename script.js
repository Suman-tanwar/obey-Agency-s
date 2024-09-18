tl = gsap.timeline();
tl.from(".line h1, h2",{
    y:150,
    stagger:0.2,
    duration:0.6,
    delay:0.5,
})
tl.from("#line1-part1",{
    opacity:0,
    onStart:function(){
        var h5itmes = document.querySelector("#line1-part1 h5")
        var growth = 0;
        setInterval(function(){
            if(growth<100){
             h5itmes.innerHTML =  growth++;
            }
            else{
             h5itmes.innerHTML = growth;
            }
            // console.log(growth);
        
        },30)   
    }
})
tl.to(".line h2",{
    animationName:"anime",
    opacity:1,
   
})
tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:3,
})
tl.from("#page1",{
    delay:0.2,
    y:1200,
    opacity:0,
    duration:0.4,
    ease:Power4,
})
tl.to("#loader",{
    display:none,
})