window.onload = () => {
    let paragraphs = document.querySelectorAll(`body > main > p`);
    let message = document.getElementById(`message`);

    message.innerHTML = `<code>querySelectorAll</code> returned ${paragraphs.length} items`;
};
