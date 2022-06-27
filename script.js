'use strict'

const allBtn = document.querySelectorAll('.btn')

const iDoBtn = document.querySelector('.iDoBtn')
const MyChildBtn = document.querySelector('.MyChildBtn')
const SomeoneElseBtn = document.querySelector('.SomeoneElseBtn')

iDoBtn.addEventListener('click', () => {activeBtn(iDoBtn)})
MyChildBtn.addEventListener('click', () => {activeBtn(MyChildBtn)})
SomeoneElseBtn.addEventListener('click', () => {activeBtn(SomeoneElseBtn)})

let buttonActive = '';

function activeBtn(btn) {
    btn.classList.toggle('btn-off')
    btn.classList.toggle('btn-on')
}




