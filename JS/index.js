import { Router } from "./routers.js"

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/the-universe", "/pages/the-universe.html")
router.add("/exploration", "/pages/exploration.html")

const body = document.querySelector('body')
const buttonHome = document.querySelector('.home')
const buttonTheUniverse = document.querySelector('.the-universe')
const buttonExploration = document.querySelector('.exploration')

buttonHome.addEventListener('click', () => {
  body.classList.replace(body.classList, 'home-cover')
  buttonHome.classList.add('span')
  buttonTheUniverse.classList.remove('span')
  buttonExploration.classList.remove('span')
})

buttonTheUniverse.addEventListener('click', () => {
  body.classList.replace(body.classList, 'the-universe-cover')
  buttonTheUniverse.classList.add('span')
  buttonHome.classList.remove('span')
  buttonExploration.classList.remove('span')
})

buttonExploration.addEventListener('click', () => {
  body.classList.replace(body.classList, 'exploration-cover')
  buttonExploration.classList.add('span')
  buttonTheUniverse.classList.remove('span')
  buttonHome.classList.remove('span')
})

router.handle()
window.onpopstate = () => router.handle()
window.route = () => router.route()


