```javascript
/* ============================================================
   3D DIGITAL ID CARD
   Interactive Parallax / Tilt
============================================================ */

const card = document.getElementById("idCard");


/* ------------------------------------------------------------
   CONFIGURATION
------------------------------------------------------------ */

const CONFIG = {

    maxRotation: 8,

    perspective: 1200,

    hoverScale: 1.015,

    transitionSpeed: 0.15

};


/* ------------------------------------------------------------
   MOUSE ENTER
------------------------------------------------------------ */

card.addEventListener("mouseenter", () => {

    card.style.transition =
        "transform 0.15s ease-out";

});


/* ------------------------------------------------------------
   MOUSE MOVE
------------------------------------------------------------ */

card.addEventListener("mousemove", (event) => {

    const rect =
        card.getBoundingClientRect();


    /*
        Convert mouse position into
        -1 → +1
    */

    const x =
        (event.clientX - rect.left)
        / rect.width;

    const y =
        (event.clientY - rect.top)
        / rect.height;


    const normalizedX =
        (x - 0.5) * 2;

    const normalizedY =
        (y - 0.5) * 2;


    /*
        Calculate rotation
    */

    const rotateY =
        normalizedX *
        CONFIG.maxRotation;

    const rotateX =
        normalizedY *
        -CONFIG.maxRotation;


    /*
        Apply transform
    */

    card.style.transform = `
        perspective(${CONFIG.perspective}px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(${CONFIG.hoverScale})
    `;

});


/* ------------------------------------------------------------
   MOUSE LEAVE
------------------------------------------------------------ */

card.addEventListener("mouseleave", () => {

    card.style.transition =
        "transform 0.5s cubic-bezier(.2,.8,.2,1)";

    card.style.transform = `
        perspective(${CONFIG.perspective}px)
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
    `;

});


/* ------------------------------------------------------------
   TOUCH SUPPORT
------------------------------------------------------------ */

card.addEventListener(
    "touchstart",
    () => {

        card.style.transition =
            "transform 0.25s ease";

        card.style.transform = `
            perspective(${CONFIG.perspective}px)
            rotateX(0deg)
            rotateY(0deg)
            scale(1.01)
        `;

    },
    {
        passive: true
    }
);


card.addEventListener(
    "touchend",
    () => {

        card.style.transition =
            "transform 0.5s ease";

        card.style.transform = `
            perspective(${CONFIG.perspective}px)
            rotateX(0deg)
            rotateY(0deg)
            scale(1)
        `;

    },
    {
        passive: true
    }
);


/* ------------------------------------------------------------
   OPTIONAL: DYNAMIC YEAR
------------------------------------------------------------ */

const currentYear =
    new Date().getFullYear();


const yearElement =
    document.querySelector(".technical-mark-two");


if (yearElement) {

    yearElement.textContent =
        currentYear;

}
```
