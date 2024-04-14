function createSquare(height, width, numberSquares) {
    let heightSquare = height/(numberSquares);
    let widthSquare = width/(numberSquares);

    const square = document.createElement('div');
    square.style.height =`${heightSquare}px`;
    square.style.width = `${widthSquare}px`;
    square.style.border = '0.05rem solid rgb(29, 29, 255)';

    return square;
}

const container = document.querySelector('#container');
const inputNumberSqr = document.querySelector('input');
const btnSend = document.querySelector('#send');

btnSend.addEventListener('click', () => {
    const numberSquares = Number(inputNumberSqr.value);
    const heightContainer = Number(container.clientHeight);
    const widthContainer = Number(container.clientWidth);
    console.log(container.children.length > 1);
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i < numberSquares * numberSquares; i++) {
        let div = createSquare(heightContainer, widthContainer, numberSquares);
        container.appendChild(div);
    }
})