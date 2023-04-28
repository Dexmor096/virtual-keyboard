const data = {
  isCapsed: false,
  englishLang: true,
  // ru:[
  //    {key: '`', code: 'Backquote', shiftKey: '~'},
  //    {key: '1', code: Digit1, shiftKey: '~'},
  //    {key: '2', code: , shiftKey: '~'},
  //    {key: '3', code: , shiftKey: '~'},
  //    {key: '4', code: , shiftKey: '~'},
  //    {key: '5', code: , shiftKey: '~'},
  //    {key: '6', code: , shiftKey: '~'},
  //    {key: '7', code: , shiftKey: '~'},
  //    {key: '8', code: , shiftKey: '~'},
  //    {key: '9', code: , shiftKey: '~'},
  //    {key: '0', code: , shiftKey: '~'},
  //    {key: '-', code: , shiftKey: '~'},
  //    {key: '=', code: , shiftKey: '~'},
  //    {key: 'Backspace', code: , shiftKey: '~'},
  //    {key: 'Tab', code: , shiftKey: '~'},
  //    {key: 'q', code: , shiftKey: '~'},
  //    {key: 'w', code: , shiftKey: '~'},
  //    {key: 'e', code: , shiftKey: '~'},
  //    {key: 'r', code: , shiftKey: '~'},
  //    {key: 't', code: , shiftKey: '~'},
  //    {key: 'y', code: , shiftKey: '~'},
  //    {key: 'u', code: , shiftKey: '~'},
  //    {key: 'i', code: , shiftKey: '~'},
  //    {key: 'o', code: , shiftKey: '~'},
  //    {key: 'p', code: , shiftKey: '~'},
  //    {key: '[', code: , shiftKey: '~'},
  //    {key: ']', code: , shiftKey: '~'},
  //    {key: '&#92', code: , shiftKey: '~'},
  //    {key: 'Caps lock', code: , shiftKey: '~'},
  //    {key: 'a', code: , shiftKey: '~'},
  //    {key: 's', code: , shiftKey: '~'},
  //    {key: 'd', code: , shiftKey: '~'},
  //    {key: 'f', code: , shiftKey: '~'},
  //    {key: 'g', code: , shiftKey: '~'},
  //    {key: 'h', code: , shiftKey: '~'},
  //    {key: 'j', code: , shiftKey: '~'},
  //    {key: 'k', code: , shiftKey: '~'},
  //    {key: 'l', code: , shiftKey: '~'},
  //    {key: ';', code: , shiftKey: '~'},
  //    {key: '\'}', code: , shiftKey: '~'},
  //    {key: 'Enter', code: , shiftKey: '~'},
  //    {key: 'Shift', code: , shiftKey: '~'},
  //    {key: 'z', code: , shiftKey: '~'},
  //    {key: 'x', code: , shiftKey: '~'},
  //    {key: 'c', code: , shiftKey: '~'},
  //    {key: 'v', code: , shiftKey: '~'},
  //    {key: 'b', code: , shiftKey: '~'},
  //    {key: 'n', code: , shiftKey: '~'},
  //    {key: 'm', code: , shiftKey: '~'},
  //    {key: ',', code: , shiftKey: '~'},
  //    {key: '.', code: , shiftKey: '~'},
  //    {key: '/', code: , shiftKey: '~'},
  //    {key: 'Up', code: , shiftKey: '~'},
  //    {key: 'Shift', code: , shiftKey: '~'},
  //    {key: 'Ctrl', code: , shiftKey: '~'},
  //    {key: 'Win', code: , shiftKey: '~'},
  //    {key: 'Alt', code: , shiftKey: '~'},
  //    {key: ' ', code: , shiftKey: '~'},
  //    {key: 'Alt', code: , shiftKey: '~'},
  //    {key: 'Left', code: , shiftKey: '~'},
  //    {key: 'Down', code: , shiftKey: '~'},
  //    {key: 'Right', code: , shiftKey: '~'},
  //    {key: 'Ctrl', code: , shiftKey: '~'}
  // ],
  eng: [
    {
      code: 'Backquote',
      key: '`',
      shiftKey: '~',
    },
    {
      code: 'Digit1',
      key: '1',
      shiftKey: '!',
    },
    {
      code: 'Digit2',
      key: '2',
      shiftKey: '@',
    },
    {
      code: 'Digit3',
      key: '3',
      shiftKey: '#',
    },
    {
      code: 'Digit4',
      key: '4',
      shiftKey: '$',
    },
    {
      code: 'Digit5',
      key: '5',
      shiftKey: '%',
    },
    {
      code: 'Digit6',
      key: '6',
      shiftKey: '^',
    },
    {
      code: 'Digit7',
      key: '7',
      shiftKey: '&',
    },
    {
      code: 'Digit8',
      key: '8',
      shiftKey: '*',
    },
    {
      code: 'Digit9',
      key: '9',
      shiftKey: '(',
    },
    {
      code: 'Digit0',
      key: '0',
      shiftKey: ')',
    },
    {
      code: 'Minus',
      key: '-',
      shiftKey: '_',
    },
    {
      code: 'Equal',
      key: '=',
      shiftKey: '+',
    },
    {
      code: 'Backspace',
      key: 'Backspace',
    },
    {
      code: 'Tab',
      key: 'Tab',
    },
    {
      code: 'KeyQ',
      key: 'q',
      capsKey: 'Q',
    },
    {
      code: 'KeyW',
      key: 'w',
      capsKey: 'W',
    },
    {
      code: 'KeyE',
      key: 'e',
      capsKey: 'E',
    },
    {
      code: 'KeyR',
      key: 'r',
      capsKey: 'R',
    },
    {
      code: 'KeyT',
      key: 't',
      capsKey: 'T',
    },
    {
      code: 'KeyY',
      key: 'y',
      capsKey: 'Y',
    },
    {
      code: 'KeyU',
      key: 'u',
      capsKey: 'U',
    },
    {
      code: 'KeyI',
      key: 'i',
      capsKey: 'I',
    },
    {
      code: 'KeyO',
      key: 'o',
      capsKey: 'O',
    },
    {
      code: 'KeyP',
      key: 'p',
      capsKey: 'P',
    },
    {
      code: 'BracketLeft',
      key: '[',
      shiftKey: '{',
    },
    {
      code: 'BracketRight',
      key: ']',
      shiftKey: '}',
    },
    {
      code: 'Backslash',
      key: '&#92',
      shiftKey: '|',
    },
    {
      code: 'Delete',
      key: 'Del',
    },
    {
      code: 'CapsLock',
      key: 'CapsLock',
    },
    {
      code: 'KeyA',
      key: 'a',
      capsKey: 'A',
    },
    {
      code: 'KeyS',
      key: 's',
      capsKey: 'S',
    },
    {
      code: 'KeyD',
      key: 'd',
      capsKey: 'D',
    },
    {
      code: 'KeyF',
      key: 'f',
      capsKey: 'F',
    },
    {
      code: 'KeyG',
      key: 'g',
      capsKey: 'G',
    },
    {
      code: 'KeyH',
      key: 'h',
      capsKey: 'H',
    },
    {
      code: 'KeyJ',
      key: 'j',
      capsKey: 'J',
    },
    {
      code: 'KeyK',
      key: 'k',
      capsKey: 'K',
    },
    {
      code: 'KeyL',
      key: 'l',
      capsKey: 'L',
    },
    {
      code: 'Semicolon',
      key: ';',
      shiftKey: ':¨',
    },
    {
      code: 'Quote',
      key: "'",
      rightAlt: '"',
    },
    {
      code: 'Enter',
      key: 'Enter',
    },
    {
      code: 'ShiftLeft',
      key: 'Shift',
    },
    {
      code: 'KeyZ',
      key: 'z',
      capsKey: 'Z¨',
    },
    {
      code: 'KeyX',
      key: 'x',
      capsKey: 'X',
    },
    {
      code: 'KeyC',
      key: 'c',
      capsKey: 'C',
    },
    {
      code: 'KeyV',
      key: 'v',
      capsKey: 'V',
    },
    {
      code: 'KeyB',
      key: 'b',
      capsKey: 'B',
    },
    {
      code: 'KeyN',
      key: 'n',
      capsKey: 'N',
    },
    {
      code: 'KeyM',
      key: 'm',
      capsKey: 'M',
    },
    {
      code: 'Comma',
      key: ',',
      shiftKey: '<',
    },
    {
      code: 'Period',
      key: '.',
      shiftKey: '>',
    },
    {
      code: 'Slash',
      key: '/',
      shiftKey: '?',
    },
    {
      code: 'ArrowUp',
      key: '&uarr;',
    },
    {
      code: 'ShiftRight',
      key: 'Shift',
    },
    {
      code: 'ControlLeft',
      key: 'Ctrl',
    },
    {
      code: 'MetaLeft',
      key: 'Win',
    },
    {
      code: 'AltLeft',
      key: 'Alt',
    },
    {
      code: 'Space',
      key: ' ',
    },
    {
      code: 'AltRight',
      key: 'Alt',
    },
    {
      code: 'ArrowLeft',
      key: '&larr;',
    },
    {
      code: 'ArrowDown',
      key: '&darr;',
    },
    {
      code: 'ArrowRight',
      key: '&rarr;',
    },
    {
      code: 'ControlRight',
      key: 'Ctrl',
    },
  ],
};
// constructor
class Key {
  constructor({ key, code, shiftName }) {
    this.key = key;
    this.code = code;
    this.shiftName = shiftName;
  }

  // keys generator
  keyGenerator() {
    const key = document.createElement('div');
    key.classList.add('key');
    key.innerHTML = this.key;
    key.dataset.code = this.code;
    return key;
  }
}

// render
const renderKeysToDom = () => {
  data.eng.forEach((el) => {
    const key = new Key(el);
    document.querySelector('.keyboard_wrapper').append(key.keyGenerator());
  });
};

// render Global container
const renderGlobalWrapper = () => {
  const container = document.createElement('div');
  container.classList.add('container');

  container.innerHTML = `
  <h1 class="keyboard_title neon_text_flicker">RSS Виртуальная клавиатура</h1>
  <textarea 
    name="display" 
    id="display" 
    class="keyboard_display">
  </textarea>
  <div class="keyboard_wrapper neonBox"></div>
  `;

  document.body.append(container);
  return container;
};
const addActiveClass = (code) => {
  const currentKey = document.querySelector(`.key[data-code=${code}]`);
  currentKey.classList.add('active');
};
const removeActiveClass = (code) => {
  const currentKey = document.querySelector(`.key[data-code=${code}]`);
  currentKey.classList.remove('active');
};

// слушатель для нажатия кнопки
const downKeyHandler = () => {
  const { body } = document;
  body.addEventListener('keydown', (event) => {
    event.preventDefault();
    addActiveClass(event.code);
    console.log(event);
  });
};
// слушатель для отжатия кнопки
const upKeyHandler = () => {
  const { body } = document;
  body.addEventListener('keyup', (event) => {
    event.preventDefault();
    removeActiveClass(event.code);
  });
};





// слушатель для перерендера (капс)

// init render function
window.onload = function () {
  // render global wrapper
  renderGlobalWrapper();
  // render keys
  renderKeysToDom();
  downKeyHandler();
  upKeyHandler();
};
