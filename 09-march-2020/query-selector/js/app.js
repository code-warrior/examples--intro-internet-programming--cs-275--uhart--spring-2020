window.onload = () => {
    let firstParagraph = document.querySelector(`body > main > p`);
    let footer = document.querySelector(`footer`);

    footer.textContent = `Adding footer content on the fly.`;

    console.log(`The content of the first paragraph is “${firstParagraph.textContent}”`);
};
