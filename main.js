const scrollRevealOptions ={
    distance: "50",
    origin:"bottom",
    duration: 1000,
};

ScrollReveal().reveal(".container . letter-s",{
    ...scrollRevealOptions,
    //duration: 1000,
    delay: 1000,
});

ScrollReveal().reveal(".container . img",{
    ...scrollRevealOptions,
    //duration: 1000,
    delay: 1500,
});
ScrollReveal().reveal(".container .text__left",{
    ...scrollRevealOptions,
    origin: "right",
    delay: 2000,
});
ScrollReveal().reveal(".container .text__right",{
    ...scrollRevealOptions,
    origin: "left",
    delay: 2000,
});
ScrollReveal().reveal(".container .explore",{
    ...scrollRevealOptions,
    //duration: 1000,
    delay: 2500,
});
ScrollReveal().reveal(".container .catalog",{
    ...scrollRevealOptions,
   // duration: 1000,
    delay: 5000,
});
ScrollReveal().reveal(".container .print",{
    ...scrollRevealOptions,
    //duration: 1000,
    delay: 5500,
});
ScrollReveal().reveal(".container .h5",{
    ...scrollRevealOptions,
    //duration: 1000,
    interval:500,
    delay: 3000,
});
ScrollReveal().reveal(".footer p",{
    ...scrollRevealOptions,
   // duration: 1000,
    delay: 7000,
});



