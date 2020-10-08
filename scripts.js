const inputShape = document.querySelector('#select-shape')
const inputRadius = document.querySelector('#input-radius')
const inputHeight = document.querySelector('#input-height')
const displayTotal = document.querySelector('#display-total')

inputShape.addEventListener('input', calculateVolume)
inputRadius.addEventListener('input', calculateVolume)
inputHeight.addEventListener('input', calculateVolume)

function calculateVolume(){
    const shape = inputShape.value
    const radius = parseFloat(inputRadius.value)
    const height = parseFloat(inputHeight.value)

    if (shape == "Cone"){
        const total = (1/3) * 3.14 * Math.pow(radius,2) * height
        displayTotal.innerHTML = 'Total Volume: ' + total.toFixed(2)
    }
    else if (shape == "Sphere"){
        const total = (4/3) * 3.14 * Math.pow(radius,3)
        displayTotal.innerHTML = 'Total Volume: ' + total.toFixed(2)
    }
    else {
        const total = 3.14 * Math.pow(radius,2) * height
        displayTotal.innerHTML = 'Total Volume: ' + total.toFixed(2)
    }
}