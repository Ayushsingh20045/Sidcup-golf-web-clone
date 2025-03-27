
 var cursor = document.querySelector(".cursor");

document.addEventListener("mousemove",function(detail){

   cursor.style.left=detail.x+"px"
   cursor.style.top=detail.y+"px"
    
   
})
document.addEventListener("mousemove",function(detail){
 gsap.to(".cursor-blur",{
    x:detail.x-150+"px",
    y:detail.y-150+"px",
    duration:1.5
 })
})

var allh4 = document.querySelectorAll('.nav h4')
allh4.forEach((elem)=>{
elem.addEventListener("mouseenter",()=>{
   cursor.style.scale=4
   cursor.style.border="1px solid white"
   cursor.style.backgroundColor="transparent"
   
})
elem.addEventListener("mouseleave",()=>{
   cursor.style.scale=1
   cursor.style.border="none"
   cursor.style.backgroundColor="#95C11E"
   
})
})
   


gsap.to(".nav ",{
  backgroundColor:"#000",
  duration:0.5,
  height:"120px",
 scrollTrigger:{
    trigger:".nav",
    scroller:"body",
    // markers:true,
    start:"top -13%",
    end:"top -14",
    scrub:1
 }
})

gsap.to(".main",{
   backgroundColor:"#000",
   scrollTrigger:{
    trigger:".main",
    scroller:"body",
   // markers:true,
   start:"top -25%,",
   end:"top -70%",
   scrub:2
   }
})

gsap.from(".about-us-in , .about-us img",{
   y:50,
   opacity:0,
   duration:1.5,
  
   scrollTrigger:{
      trigger:".about-us",
      scroller:"body",
      // markers:true,
      start:"top 70%",
      end:"top 65%",
      scrub:2
   }
})

gsap.from("#colon1",{
   y:-70,
   x:-70,
  
   scrollTrigger:{
      trigger:"#colon1",
      scroller:"body",
      // markers:true,
      start:"top 55%",
      end:"top 45%",
      scrub:2
   }
})
gsap.from("#colon2",{
   y:70,
   x:70,
  
   scrollTrigger:{
      trigger:"#colon1",
      scroller:"body",
      // markers:true,
      start:"top 60%",
      end:"top 50%",
      scrub:2
   }
})

gsap.from(".page4 h1",{
   y:50,
   duration:1,
   scrollTrigger:{
      trigger:".page4 h1",
      scroller:"body",
      // markers:true,
      start:"top 90%",
      end:"top 95%",
      scrub:2
   }
})