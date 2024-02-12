// document.addEventListener("mousemove", function (details) {

//     var rect = document.querySelector("#rect");

//     var rectLoc = gsap.utils.mapRange(
//         0,
//         document.innerWidth,
//         100 + rect.getBoundingClientRect().width / 2,
//         document.innerWidth - (100 + rect.getBoundingClientRect().width / 2),
//         details.clientX
//     );

//     gsap.to("#rect", {
//         left: rectLoc,
//         ease: Power3
//     });
// });

document.addEventListener("mousemove", function (details) {
    var rect = document.querySelector("#rect");

    var rectLoc = gsap.utils.mapRange(
        0,
        window.innerWidth,
        100 + rect.getBoundingClientRect().width / 2,
        window.innerWidth - (100 + rect.getBoundingClientRect().width / 2),
        details.clientX
    );

    gsap.to("#rect", {
        left: rectLoc,
        ease: Power3.easeInOut  // Fix: Add .easeInOut or choose another ease type
    });
});
