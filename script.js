const $items = document.querySelectorAll('.item');
const $placeHolders = document.querySelectorAll('.placeholder');
let dragItem = 0;

for (const item of $items) {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
}

function dragStart(event) {
    dragItem = event.target;
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0);  
}

function dragEnd(event) {
    dragItem = 0;
    event.target.className = 'item';
}

for (const placeHolder of $placeHolders) {
    placeHolder.addEventListener('dragover', dragOver);
    placeHolder.addEventListener('dragenter', dragEnter);
    placeHolder.addEventListener('dragleave', dragLeave);
    placeHolder.addEventListener('drop', dragDrop);
}

function dragOver(event) {
    event.preventDefault();
}

function dragEnter(event) {
	event.target.classList.add('hovered');
    let color='';

    switch (event.target.classList[1]) {
        case 'placeholder-start':
            color = window.getComputedStyle(document.querySelector('.start')).backgroundColor;
            event.target.style.cssText = `border: 2px solid ${color};`;
            break;
        case 'placeholder-progress':
            color = window.getComputedStyle(document.querySelector('.progress')).backgroundColor;
            event.target.style.cssText = `border: 2px solid ${color};`;
            break;
        case 'placeholder-done':
            color = window.getComputedStyle(document.querySelector('.done')).backgroundColor;
            event.target.style.cssText = `border: 2px solid ${color};`;
            break;
    }
}

function dragLeave(event) {
    event.target.style.cssText = '';
    event.target.classList.remove('hovered');
}

function dragDrop(event) {
    event.target.append(dragItem);
    event.target.style.cssText = '';
    event.target.classList.remove('hovered');
}