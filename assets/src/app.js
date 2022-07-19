const progress = document.querySelector('#progress');
const progressPoints = document.querySelectorAll('.progress-point');
const presentation = document.querySelector('#presentation');
const presentationContent = document.querySelector('.presentation-content');
const loader = document.querySelector('#loader')

window.onload = () => {
    loader.style.display = 'none';
    document.querySelector('body').style.overflow = 'initial'
}



function sliding(i = 0) {
    point = progressPoints[i]
    len = progressPoints.length

    if(i >= len) {
        i = 0
        sliding(0)
    }

    progress.querySelector('.active').classList.remove('active');
    point.classList.add('active');

    presentation.querySelector('.active').classList.remove('active');
    console.log(`${point.attributes.href.nodeValue}`)
    document.querySelector(`${point.attributes.href.nodeValue}`).classList.add('active')

    setTimeout(() => {
        sliding(i+1)
    }, 10000)
}

setTimeout(() => {
    sliding(1)
}, 8000)


const panels = document.querySelectorAll('.panel');
const panelsContainer = document.querySelector('.container');
panels.forEach(panel => {
    panel.addEventListener('click', function (e) {
        panel.parentElement.querySelector('.active').classList.remove('active');
        panel.classList.add('active');
    });
});
