const textarea = document.createElement('textarea');
document.body.append(textarea);
textarea.classList.add('screen');

const keyboard = document.createElement('div');
document.body.append(keyboard);
keyboard.classList.add('keyboard');

let capsLock = 'CapsLock';

const keysEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\/', 'Del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', '←', '↓', '→', 'Ctrl'];

const keysRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\/', 'Del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', "э", 'Enter', 'Shift', 'я', 'ч', 'c', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'Shift', 'Ctrl', 'Win', 'Alt', '', 'Alt', '←', '↓', '→', 'Ctrl'];

const keyCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

  for(let i = 0; i < keysRu.length; i++) {
    let key = document.createElement('div');
    key.id += keyCode[i];
    key.classList.add('key');
    key.append(keysRu[i]);
    keyboard.append(key);
  }


document.querySelectorAll('.key').forEach(el => el.addEventListener('mousedown', (event) => {
    event.target.classList.add('active');
     const btn = document.querySelector(`[id=${event.code}]`);                                           
    document.querySelector('.screen').innerHTML += btn.innerHTML;
    })
    );

document.querySelectorAll('.key').forEach(el => el.addEventListener('mouseup', (event) => {
    event.target.classList.remove('active');
    }));




document.addEventListener('keydown', (event) => {
    const btn = document.querySelector(`[id=${event.code}]`);  
    document.querySelectorAll('.key').forEach(el => el.classList.remove('active'))
    btn.classList.add('active');     
});

document.addEventListener('keyup', (event) => {
    document.querySelectorAll('.key').forEach(el => el.classList.remove('active')) 
});


