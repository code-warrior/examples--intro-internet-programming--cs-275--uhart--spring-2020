window.onload = () => {
    let paragraph = document.getElementsByTagName(`p`)[1];
    let divs = document.querySelectorAll(`div`);

    divs[0].addEventListener(`click`, (e) => {
        console.log(`${e.target.id} was clicked. This is the outer div.\n\n`);
    });

    divs[1].addEventListener(`click`, (evt) => {
        console.log(`${evt.target.id} was clicked. This is the inner div.`);
    });

    paragraph.addEventListener(`click`, (event) => {
        console.log(`${event.target.id} was clicked. This is the paragraph.`);
    });

    // for(let i = 0; i < divs.length; i++) {
    //     divs[i].addEventListener(`click`, (event) => {
    //         console.log(`${event.target.id} clicked`);
    //     });
    // }
};
