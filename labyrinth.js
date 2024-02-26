import createTalker from "./talker.js";
import createPoint from "./point.js";
import createDeniska from "./deniska.js";

export const labyrinth = () => {
  //Создаем section game и присваиваем классы
  const game = document.createElement("section");
  game.classList.add("game", "labyrinth-game");

  //Создаем заголовки, присваиваем классы и пишем текст
  const gameTitle = document.createElement("h1");
  gameTitle.classList.add("game__title", "game__title-labyrinth");

  const gameSubtitle = document.createElement("h2");
  gameSubtitle.classList.add("game__subtitle");

  gameTitle.textContent = "Таланты Чувашской земли";
  gameSubtitle.innerHTML = "Лабиринт";

  //ОЧКИ

  const pointBlock = createPoint();

  //Создаем GAMEBLOCK со всем содержимым игры
  const gameBlock = document.createElement("div");
  gameBlock.classList.add("game__block", "game__block-labyrinth");

  //Для говоруши div GAMELEFT
  const gameLeft = document.createElement("div");
  gameLeft.classList.add("game__left", "game__left-labyrinth");

  //Сам Говоруша
  const gameRules = createTalker(
    "Найди путь от музея «Научно-технический музей истории трактора» к музею «Бичурин и современность»."
  );

  gameRules.rulesBtn.addEventListener("click", (e) => {
    e.preventDefault();
    gameBtnNext.remove();
    gameCenter.style.display = "block";
    gameRules.gameRules.style.display = "none";
    gameBtnSkip.style.display = "block";
    gameBlock.style.paddingBottom = "0";
    gameBlock.style.marginTop = "0";
    gameLeft.style.paddingTop = "0";
    gameBlock.style.overflowY = "scroll";
  });

  //Модалка пропустить игру
  const gameBtnSkip = document.createElement("button");
  const gameBtnNext = document.createElement("button");

  gameBtnSkip.addEventListener("click", (e) => {
    e.preventDefault();
    const deniska = createDeniska(
      "При переходе к следующей игре ты, к сожалению, не получишь балл за эту игру. Продолжать?"
    );
    document.body.append(deniska.deniska);
    deniska.rulesDeniska.src = "img/deniska-sad.webp";
    game.classList.add("game-blur");
    const btns = document.createElement("div");
    const yesBtn = document.createElement("button");
    const noBtn = document.createElement("button");

    yesBtn.textContent = "Да";
    noBtn.textContent = "Нет";

    btns.classList.add("btns-group");
    yesBtn.classList.add(
      "btn-reset",
      "game__btn",
      "game__btn--yes",
      "game__btn--next"
    );
    noBtn.classList.add(
      "btn-reset",
      "game__btn",
      "game__btn--no",
      "game__btn--next"
    );
    btns.append(yesBtn, noBtn);
    deniska.rulesText.append(btns);

    yesBtn.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.innerHTML = "";
    });

    noBtn.addEventListener("click", (e) => {
      e.preventDefault();
      deniska.deniska.remove();
      game.classList.remove("game-blur");
    });
  });

  gameBtnSkip.classList.add(
    "game__btn",
    "game__btn--skip",
    "btn-reset",
    "game__btn--skip-picture"
  );
  gameBtnNext.classList.add(
    "game__btn",
    "game__btn--next",
    "btn-reset",
    "game__btn--next-picture"
  );

  gameBtnSkip.textContent = "Пропустить игру";
  gameBtnNext.textContent = "Следующая игра";

  //GAMECENTER с лабиринтом
  const gameCenter = document.createElement("div");
  gameCenter.classList.add("game__center", "game__center-labyrinth");

  const labyrinthWrap = document.createElement("div");
  labyrinthWrap.classList.add("labyrinth-wrap");










  
  //GAMERIGHT для Дениски
  const gameRight = document.createElement("div");
  gameRight.classList.add("game__right", "game__right-labyrinth");

  //Создаем вложенность созданных элементов
  document.body.append(game);
  game.append(gameTitle, gameSubtitle, gameBlock, pointBlock);
  gameBlock.append(gameLeft, gameCenter, gameRight);
  gameLeft.append(gameRules.gameRules, gameBtnSkip, gameBtnNext);
  gameCenter.append(labyrinthWrap);
};

labyrinth();
