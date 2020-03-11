window.onload = () => {
    let input = prompt(`Enter a number`);

    alert(`You entered ${input} with a type of ${typeof input}`);

    /* Note how the equality operator (==) and strict equality operators (===) make their comparisons. */
    if (1 == input) {
        alert(`The input is equal to 1 (==).`);
    } else {
        alert(`The equality operator failed in its comparison.`);
    }

    if (1 === input) {
        alert(`The input is equal to 1 (===)`);
    } else {
        alert(`The strict equality operator failed in its comparison`);
    }
};
