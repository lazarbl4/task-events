/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let button = document.createElement('button');
    button.innerHTML = 'Удали меня';
    document.body.insertAdjacentElement('afterbegin', button);
    button.addEventListener('click', function () {
        button.remove();
    });
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    const ul = document.createElement('ul');
    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.textContent = arr[i];
        li.addEventListener('mouseover', () => {
            li.title = li.textContent;
        });
        ul.insertAdjacentElement('beforeend', li);
    }
    document.body.insertAdjacentElement('afterbegin', ul);
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    const a = document.createElement('a');
    let text = 'tensor';
    a.textContent = text;
    a.href = 'https://tensor.ru/';
    document.body.insertAdjacentElement('afterbegin', a);
    a.addEventListener('click', (event) => {
        if (a.textContent == text) {
            event.preventDefault();
            a.textContent += ' ' + a.href;
        }
    });
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    li.textContent = 'Пункт';
    ul.insertAdjacentElement('beforeend', li);
    const button = document.createElement('button');
    button.textContent = 'Добавить пункт';
    document.body.insertAdjacentElement('beforeend', ul);
    document.body.insertAdjacentElement('beforeend', button);
    button.addEventListener('click', () => {
        ul.insertAdjacentElement('beforeend', li.cloneNode(true));
    });
    ul.addEventListener('click', function (event) {
        if (event.target && event.target.nodeName === 'LI') {
            event.target.textContent += '!';
        }
    });
}
