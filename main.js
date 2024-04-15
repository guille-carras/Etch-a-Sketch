function createSquare(height, width, numberSquares) {
    let heightSquare = height/(numberSquares);
    let widthSquare = width/(numberSquares);

    const square = document.createElement('div');
    square.style.height =`${heightSquare}px`;
    square.style.width = `${widthSquare}px`;
    square.style.border = '0.05rem solid rgb(29, 29, 255)';

    return square;
}

function getRamdonColor() {
    let color = '';
    let colorR = Math.floor((Math.random() * 255) + 1);
    let colorG = Math.floor((Math.random() * 255) + 1);
    let colorB = Math.floor((Math.random() * 255) + 1);
    color = `rgba(${colorR}, ${colorG}, ${colorB}, 1)`;
    return color;
} 

const container = document.querySelector('#container');
const inputNumberSqr = document.querySelector('input');
const btnSend = document.querySelector('#send');
const btnsStyleColors = document.querySelector('#container-btns');
let acumulator = 0.2

btnSend.addEventListener('click', () => {
    const numberSquares = Number(inputNumberSqr.value);
    const heightContainer = Number(container.clientHeight);
    const widthContainer = Number(container.clientWidth);
    
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    for (let i = 0; i < numberSquares * numberSquares; i++) {
        let div = createSquare(heightContainer, widthContainer, numberSquares);
        container.appendChild(div);
    }
})

btnsStyleColors.addEventListener('click', (e) => {
    let target = e.target;
    
    switch(target.id) {
        case 'black':
            container.addEventListener('mouseover', (e) => {
                let target = e.target;
                target.style.backgroundColor = 'black';
                target.style.opacity = 1;
                e.stopPropagation();
            })
            break;
        case 'grayScale':
            container.addEventListener('mouseover', (e) => {
                
                let target = e.target;
                

                target.style.opacity = acumulator;

                if(acumulator === 1) {
                    acumulator = 0;
                } else if (acumulator < 1) {
                    acumulator += 0.2;
                }

                target.style.backgroundColor = 'black';
            })  
            break;
        case 'rainbow':
            container.addEventListener('mouseover', (e) => {
                let target = e.target;
                target.style.backgroundColor = getRamdonColor();
                target.style.opacity = 1;
                e.stopPropagation();
            })
            break;
    }
})


