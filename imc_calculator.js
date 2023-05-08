const d = document

export function calculateIMC(inputHeight, inputWeight, btn, result) {
    const $inputHeight = d.querySelector(inputHeight),
    $inputWeight = d.querySelector(inputWeight),
    $btn = d.querySelector(btn),
    $result = d.querySelector(result)

    $btn.addEventListener("click", e => {
        let height = $inputHeight.value,
        weight = $inputWeight.value,
        result = ((weight) / (height*height)).toFixed(1)

        if(result < 18.5) result = `Tu IMC es de ${result}, lo que significa que tienes un peso bajo`
        else if(result >= 18.5 && result < 25) result = `Tu IMC es de ${result}, lo que significa que tienes un peso normal`
        else if(result >= 25 && result < 30) result = `Tu IMC es de ${result}, lo que significa que tienes sobrepeso`
        else if(result >= 30) result = `Tu IMC es de ${result}, lo que significa que tienes obesidad`
        $result.textContent = result
    })
}