import AppFunctional from "./AppFunctional"
// Write your tests here
let up = document.querySelector('#up')
let down = document.querySelector('#down')
let left = document.querySelector('#left')
let right = document.querySelector('#right')
let reset = document.querySelector('#reset')
let submit = document.querySelector('#submit')


describe('[A] Text elements render on the screen', () => {

  test('[A1] Up button renders', () => {
    expect(up).toBeVisible
  })
  test('[A2] Down button renders', () => {
    expect(down).toBeVisible
  })
  test('[A3] Left button renders', () => {
    expect(left).toBeVisible
  })
  test('[A4] Right button renders', () => {
    expect(right).toBeVisible
  })
  test('[A5] Reset button renders', () => {
    expect(reset).toBeVisible
  })
  test('[A6] Submit button renders', () => {
    expect(submit).toBeVisible
  })
  test('[A7] Heading renders', () => {
    let header = document.querySelector('h1')
    expect(header).toBeVisible
  })
  test('[A8] Functional link renders', () => {
    let demLinks = document.querySelectorAll('a')
    expect(demLinks).toBeVisible
  })
})
