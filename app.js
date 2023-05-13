const container = document.getElementsByClassName('container')
const line = document.querySelector('.liner-top')
const leftBtn = document.querySelector('#leftBtn')
const rightBtn = document.querySelector('#rightBtn')
let slidebar = document.querySelector('.slidebar')

let linesize = line.offsetWidth
let lineMaxleft = linesize * 3
let lineLeft = line.offsetLeft
let offset = 0


function rightLine(linesize, lineMaxleft) {
  if (offset < linesize) {
line.style.transform = `translateX(${linesize + 0}px`
return       offset += linesize
  } else if (offset < lineMaxleft) {
line.style.transform = `translateX(${linesize + offset}px`
offset += linesize
  } else if (offset >= lineMaxleft) {
  line.style.transform = `translateX(${lineMaxleft - offset }px`
  return offset = 0
  }
}

function leftLine(linesize, lineMaxleft) {
  if (offset === 0 ) {
    line.style.transform = `translateX(${lineMaxleft}px`
    return offset += lineMaxleft 
        } else if (offset <= lineMaxleft) {
    line.style.transform = `translateX(${offset - linesize}px`
    return offset -= linesize
  } 
}


function leftScroll() {
  slidebar.children[0].classList.remove('active')
  lastChild = slidebar.lastElementChild
  slidebar.removeChild(slidebar.lastElementChild)
  slidebar.prepend(lastChild)
  leftLine(linesize, lineMaxleft)
  slidebar.children[0].classList.add('active')
}

function rightScroll() {
  slidebar.children[0].classList.remove('active')
  firstChild = slidebar.firstElementChild
  slidebar.removeChild(slidebar.firstElementChild)
  slidebar.append(firstChild)
  rightLine(linesize, lineMaxleft)
  slidebar.children[0].classList.add('active')
}

slidebar.children[0].classList.add('active')


leftBtn.addEventListener('click', () => { 
  leftScroll ()
} )

rightBtn.addEventListener('click', () => {
  rightScroll()
} )

setInterval(function() {
  rightScroll()
}, 2000)
