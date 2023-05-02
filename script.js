import { selectNav } from "./nav.js"

const d = document

d.addEventListener("DOMContentLoaded", e => {
    selectNav(".options a", ".nav-bar-selected", "#tool h2")
})
