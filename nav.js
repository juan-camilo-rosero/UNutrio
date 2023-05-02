const d = document

export function selectNav (btn, bar, title) {
    const $navBtns = d.querySelectorAll(btn),
    $bar = d.querySelector(bar),
    $title = d.querySelector(title)

    $navBtns.forEach((btn, index) => {
        btn.addEventListener("click", e => {
            $title.textContent = btn.textContent
            $navBtns.forEach(el => el.classList.remove("green"));
            btn.classList.add("green")
            switch (index) {
                case 0:
                    $bar.style.marginTop = "0vh"
                    break;
                case 1:
                    $bar.style.marginTop = "12.5vh"
                    break;
                case 2:
                    $bar.style.marginTop = "25vh"
                    break;
                case 3:
                    $bar.style.marginTop = "37.5vh"
                    break;
            }
        })
    });
}
