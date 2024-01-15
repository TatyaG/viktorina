import createTalker from './talker.js';
import createDeniska from './deniska.js';
import createPoint from './point.js';

export function createGameSymbols() {
    const game = document.createElement('section');
    const gameTitle = document.createElement('h1');
    const gameSubtitle = document.createElement('h2');
    const gameBlock = document.createElement('div');
    const gameLeft = document.createElement('div');
    const gameRight = document.createElement('div');
    const gameBtnSkip = document.createElement('button');
    const gameBtnNext = document.createElement('button');
    const symbolsBlock = document.createElement('form');

    const pointBlock = createPoint();


    const items = [
        {
            id: 1,
            img: 'img/symbol-1.svg',
            inputs: ['Солнце, лад, созвучие', 'Братская помощь, солидарность', 'Небесный свод, вселенная']
        },
        {
            id: 2,
            img: 'img/symbol-2.svg',
            inputs: ['Духовная и родовая связь', 'Дом, кров, домашний приют', 'Эпоха, период, течение времени']
        },
        {
            id: 3,
            img: 'img/symbol-3.svg',
            inputs: ['Верность, единство, любовь', 'Жизненный путь, уклад', 'Мысль, знание']
        },
        {
            id: 4,
            img: 'img/symbol-4.svg',
            inputs: ['Сила семьи, дух нации', 'Мера грехов и доброты', 'Равенство, понимание и принятие']
        }
    ]

    items.forEach(item => {
        const symbolItem = document.createElement('div');
        const symbolItemBlock = document.createElement('div');
        const symbolImg = document.createElement('img');

        symbolItem.classList.add('symbols__item', 'symbol');
        symbolItemBlock.classList.add('symbol__block');
        symbolImg.classList.add('symbol__img');

        symbolImg.src = item.img;
        

        item.inputs.forEach(el => {
            const label = document.createElement('label');
            const input = document.createElement('input');
            const button = document.createElement('span');

            button.textContent = el

            label.classList.add('symbol__label');
            input.classList.add('symbol__input');
            button.classList.add('symbol__radio');

            input.type = 'radio';
            input.name = `symbol-${item.id}`;
            symbolItemBlock.append(label);
            label.append(input, button);
        })

        symbolsBlock.append(symbolItem);
        symbolItem.append(symbolImg, symbolItemBlock);
    })


    const gameRules = createTalker('Что обозначают эти символы? Выбери правильный вариант ответа.');

    game.classList.add('game', 'symbols');
    gameTitle.classList.add('game__title');
    gameSubtitle.classList.add('game__subtitle');
    gameBlock.classList.add('game__block');
    gameLeft.classList.add('game__left');
    gameRight.classList.add('game__right');
    gameBtnSkip.classList.add('game__btn', 'game__btn--skip', 'btn-reset');
    gameBtnNext.classList.add('game__btn', 'game__btn--next', 'btn-reset');
    symbolsBlock.classList.add('symbols__form');


    gameTitle.textContent = 'Краеведческий калейдоскоп';
    gameSubtitle.innerHTML = `Символы <span class="blue-text">Чувашии</span> и их значение`;
    gameBtnSkip.textContent = 'Пропустить игру';
    gameBtnNext.textContent = 'Следующая игра';


    game.classList.add('game', 'symbols')


    document.body.append(game);
    game.append(gameTitle, gameSubtitle, gameBlock, pointBlock);
    gameBlock.append(gameLeft, gameRight);
    gameLeft.append(gameRules.gameRules, gameBtnSkip, gameBtnNext);
    gameRight.append(symbolsBlock);


    gameRules.rulesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        gameRight.style.display = 'block';
        gameRules.gameRules.style.display = 'none';
        gameBtnSkip.style.display = 'block';
        gameBlock.style.paddingBottom = '0';
        gameBlock.style.marginTop = '0';
        gameLeft.style.paddingTop = '0';

    })

    return game;
}