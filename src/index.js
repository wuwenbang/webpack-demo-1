import x from './x.js'
import './x.scss'
import './y.less'
import './z.styl'
import image from './assets/cat.jpg'

const div = document.getElementById('app')
div.innerHTML = `
    <img src="${image}">
`
div.children[0].style.width = "200px"
// const img = new Image();
// img.src = image;
// div.appendChild(img)
// img.style.width = "200px"

const button = document.createElement('button')
div.appendChild(button)
button.innerHTML = 'LazyLoader'
button.onclick = () => {
    const promise = import('./lazy')
    promise.then((module) => {
        module.default()
    }, () => {
        console.log('error')
    })
}