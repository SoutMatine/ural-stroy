// function loadComponent(selector, url) {
//     const container = document.querySelector(selector)
//     if (!container) return

//     fetch(url)
//         .then(res => {
//             if (!res.ok) {
//                 throw new Error(`Ошибка ${url}`)
//             }
//             return res.text()
//         })
//         .then(html => {
//             container.innerHTML = html
//         })
//         .catch(err => {
//             console.log(err)
//         })
//

fetch('assets/components/header/header.html')
    .then(r => r.text())
    .then(html => {
        document.querySelector('#header').innerHTML = html

        document.dispatchEvent(new Event('header:loaded'))
    })


document.addEventListener('header:loaded', () => {
    const header = document.querySelector('.header')
    console.log('header готов')
})

fetch('assets/components/footer/footer.html')
    .then(r => r.text())
    .then(html => {
        document.querySelector('#footer').innerHTML = html

        document.dispatchEvent(new Event('footer:loaded'))
    })

export function createButton(text, container, width = "content", btnType = "primary") {
    const el = container.addClass("btn--ural").text(text)
    if (btnType === "primary") el.addClass('btn-primary--ural')
    else if (btnType == "secondary") el.addClass('btn-secondary--ural')

    if (width === "content") el.addClass('content')
    else if (width === "max") el.addClass('w-100')
    else if (width === "huge") el.addClass('huge')


    container.append(el)
    return el
}