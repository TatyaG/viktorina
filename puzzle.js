import createPoint from "./point.js";
import createDeniska from "./deniska.js";
import createTalker from "./talker.js";
import createRulesTablet from "./rules-tablet.js";
import {createFindExtra} from './find-extra.js';


let puzzleGame = () => {
    console.log('my')
    //pieces
    const rows = 4;
    const columns = 3;
    let currTile;
    let otherTile;
    let pieces = [];
    for (let i = 1; i <= rows * columns; i++) {
        pieces.push(i.toString());
    }
    pieces.reverse();
    for (let i = 0; i < pieces.length; i++) {
        let j = Math.floor(Math.random() * pieces.length);
        let tmp = pieces[i];
        pieces[i] = pieces[j];
        pieces[j] = tmp;
    }

    for (let i = 0; i < pieces.length; i++) {
        let tile = document.createElement("img");
        tile.src = "./img/puzzle" + pieces[i] + ".jpg";
        tile.addEventListener("dragstart", dragStart); //click on image to drag
        tile.addEventListener("dragover", dragOver);   //drag an image
        tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
        tile.addEventListener("drop", dragDrop);       //drop an image onto another one
        tile.addEventListener("dragend", dragEnd);      //after you completed dragDrop
        document.getElementById("pieces").append(tile);
    }


//DRAG TILES
    function dragStart() {
        currTile = this; //this refers to image that was clicked on for dragging
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function dragEnter(e) {
        e.preventDefault();
    }

    function dragDrop() {
        otherTile = this; //this refers to image that is being dropped on
    }

    function dragEnd() {
        let currImg = currTile.src;
        let currElem = pieces.indexOf(currImg.split('puzzle')[1].split('.')[0])
        let otherImg = otherTile.src;

        let otherElem = pieces.indexOf(otherImg.split('puzzle')[1].split('.')[0])
        currTile.src = otherImg;
        otherTile.src = currImg;
        /*  pieces[currElem] = pieces[otherElem]
          pieces[otherElem] = pieces[currElem]*/
        console.log(currElem, otherElem)
        console.log(pieces)

    }

}
export const createPuzzleGame = () => {
    console.log('start')
    const game = document.createElement('section');
    const boardPuzzle = document.createElement('div')
    boardPuzzle.id = 'pieces'
    const gameTitle = document.createElement('h1');
    const gameSubtitle = document.createElement('h2');
    const gameBlock = document.createElement('div');
    const gameLeft = document.createElement('div');
    const gameRight = document.createElement('div');
    const gameBtnSkip = document.createElement('button');
    const gameBtnNext = document.createElement('button');
    const symbolsBlock = document.createElement('form');


    const pointBlock = createPoint();
    let points = JSON.parse(localStorage.getItem('points'));
    pointBlock.textContent = points;
    gameBtnSkip.addEventListener('click', (e) => {
        e.preventDefault();
        const deniska = createDeniska('При переходе к следующей игре ты, к сожалению, не получишь балл за эту игру. Продолжать?');
        document.body.append(deniska.deniska);
        deniska.rulesDeniska.src = 'img/deniska-sad.webp';
        game.classList.add('game-blur');
        const btns = document.createElement('div');
        const yesBtn = document.createElement('button');
        const noBtn = document.createElement('button');

        yesBtn.textContent = 'Да';
        noBtn.textContent = 'Нет';

        btns.classList.add('btns-group');
        yesBtn.classList.add('btn-reset', 'game__btn', 'game__btn--yes', 'game__btn--next');
        noBtn.classList.add('btn-reset', 'game__btn', 'game__btn--no', 'game__btn--next');
        btns.append(yesBtn, noBtn);
        deniska.rulesText.append(btns);

        yesBtn.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.innerHTML = '';
            const findExtra = createFindExtra();
            document.body.append(findExtra);
        })

        noBtn.addEventListener('click', (e) => {
            e.preventDefault();
            deniska.deniska.remove();
            game.classList.remove('game-blur');
        })
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


    gameBtnNext.addEventListener("click", (e) => {
        document.body.innerHTML = "";
        const findExtra = createFindExtra();
        document.body.append(findExtra);
      });


    game.classList.add('game', 'symbols')


    document.body.append(game);
    game.append(gameTitle, gameSubtitle, gameBlock, pointBlock);
    gameBlock.append(gameLeft, gameRight);
    gameLeft.append(gameRules.gameRules, gameBtnSkip, gameBtnNext);
    gameRight.append(boardPuzzle);


    gameRules.rulesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        gameBtnNext.remove()
        const rulesBlock = createRulesTablet('Что обозначают эти символы? Выбери правильный вариант ответа.');
        game.append(rulesBlock);
        gameRight.style.display = 'block';
        gameRules.gameRules.style.display = 'none';
        gameBtnSkip.style.display = 'block';
        gameBlock.style.paddingBottom = '0';
        gameBlock.style.marginTop = '0';
        gameLeft.style.paddingTop = '0';
        gameBlock.style.overflowY = 'scroll';

    })
    puzzleGame()
}
createPuzzleGame()


