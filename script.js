import { calculateIMC } from "./imc_calculator.js"
import { selectNav } from "./nav.js"

const d = document

d.addEventListener("DOMContentLoaded", e => {
    selectNav(".options a", ".nav-bar-selected", "#tool h2", ["calculadora", "opciones", "seguimiento", "encuesta"])
    calculateIMC(".input-height", ".input-weight", ".calculadora button",".imc-result")
})