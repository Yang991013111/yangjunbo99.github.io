let imgs = document.querySelectorAll('.imgs')
let texts = document.querySelectorAll('.texts')
for(let i = 0; i < imgs.length; i++){
    imgs[i].onclick = function () {
        if(texts[i].classList.contains('text_cons')){
            imgs[i].src = 'images/up.png'
            texts[i].classList.remove('text_cons')
        }else {
            imgs[i].src = 'images/down.png'
            texts[i].classList.add('text_cons')
        }
    }
}

let con1 = document.querySelector('.con1')

setInterval(() => {
    con1.style.color = getRandomRgbColor()
},1000  )

function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}