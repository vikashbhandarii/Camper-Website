gsap.to("#navbar", {
    backgroundColor: "#011a2f",
    scrollTrigger:{
        trigger:"#navbar",
        scroller:"body",
        start:"top -10%",
        end: "top -20%",
        scrub: 1
    }
})