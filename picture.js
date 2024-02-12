import createTalker from "./talker.js";
import createRulesTablet from "./rules-tablet.js";
import createPoint from "./point.js";
import createDeniska from "./deniska.js";

export const picture = () => {
  //Массив с игрой и картинами
  const pictureGame = [
    {
      name: "Картина «Богатыри»",
      author: "В. М. Васнецов",
      description:
        "Картина повествует о временах, когда Древней Руси угрожало монголо-татарское иго. На ней изображены могучие, храбрые люди, защитники отечества. Они зорко смотрят вдаль, обозревают местность в поиске врага, который грозится напасть на Великую Русь.",
      images: [
        {
          name: "image1",
          src: "img/picture1.png",
          correct: false,
        },
        {
          name: "image2",
          src: "img/picture2.png",
          correct: true,
        },
        {
          name: "image3",
          src: "img/picture3.png",
          correct: false,
        },
      ],
    },
  ];
  //Создаем section game и присваиваем классы
  const game = document.createElement("section");
  game.classList.add("game", "picture_game");
  //Создаем заголовки, присваиваем классы и пишем текст
  const gameTitle = document.createElement("h1");
  gameTitle.classList.add("game__title");

  const gameSubtitle = document.createElement("h2");
  gameSubtitle.classList.add("game__subtitle");

  gameTitle.textContent = "Художественная галерея";
  gameSubtitle.innerHTML = "Узнай картину по описанию";
  //Создаем div со сценой всей игры
  const gameBlock = document.createElement("div");
  gameBlock.classList.add("game__block");
  //Для говоруши div
  const gameLeft = document.createElement("div");
  gameLeft.classList.add("game__left");
  //Для картин div
  const gameCenter = document.createElement("div");
  gameCenter.classList.add("game__center");

  //div правый
  const gameRight = document.createElement("div");
  gameRight.classList.add("game__right");

  //Для описания div
  const questionWrap = document.createElement("div");
  questionWrap.classList.add("question_wrap");
  const questionImg = document.createElement("img");
  questionImg.classList.add("question_img");
  const questionDesc = document.createElement("p");
  questionDesc.classList.add("question_desc");
  questionDesc.textContent = pictureGame[0].description;

  const description = document.createElement("p");
  description.textContent = "Описание";
  description.classList.add("description");

  gameRight.append(questionWrap);
  questionWrap.append(questionImg, questionDesc, description);

  questionImg.src = "img/crossword-questionWrap_desctop.png";

  const pictureWrapper = document.createElement("div");
  //Ставим game как главный section
  document.body.append(game);
  //Добавляем в section game все элементы
  game.append(gameTitle, gameSubtitle, gameBlock);
  //Добавляем в div gameblock правый, центральный и левый блок
  gameBlock.append(gameLeft, gameCenter, gameRight);
  //Добавляем в правый блок div с картинами
  gameCenter.append(pictureWrapper);

  //Создание шаблона одной карточки с картинкой
  const createPictureGame = (src, correct) => {
    pictureWrapper.classList.add("pictures_wrapper");
    const wrap = document.createElement("div");
    wrap.classList.add("wrap");
    const pictureBorder = document.createElement("div");
    pictureBorder.classList.add("picture_border");
    const pictureItem = document.createElement("img");
    pictureItem.src = src;
    pictureItem.setAttribute("data-crt", correct);
    pictureItem.classList.add("picture_item");

    pictureWrapper.append(wrap);
    wrap.append(pictureBorder);
    pictureBorder.append(pictureItem);
  };

  //Перебираем массив и отображаем картинки
  pictureGame[0].images.forEach((item) => {
    createPictureGame(item.src, item.correct);
  });

  //Окрашиваем картинки по клику в зеленый или красный
  const correctPicture = document.querySelectorAll(".picture_item");
  correctPicture.forEach((item) => {
    item.addEventListener("click", () => {
      setTimeout(() => {
        modalWrapper.style.display = "block";
      }, 3000);
      if (item.getAttribute("data-crt") === "true") {
        item.parentElement.parentElement.classList.add("correct");
        setTimeout(() => {
          happyDeniska.classList.remove("hidden");
        }, 7000);
        pointBlock.classList.add("animation");
        let points = JSON.parse(localStorage.getItem("points"));
        points += 1;
        localStorage.setItem("points", points);
        pointBlock.textContent = points;
      } else {
        item.parentElement.parentElement.classList.add("incorrect");
        setTimeout(() => {
          sadDeniska.classList.remove("hidden");
        }, 7000);
      }
      setTimeout(() => {
        modalWrapper.style.display = "none";
      }, 6000);

      document.querySelectorAll("img").forEach((item) => {
        item.style.pointerEvents = "none";
      });
    });
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

  gameBtnSkip.classList.add("game__btn", "game__btn--skip", "btn-reset");
  gameBtnNext.classList.add("game__btn", "game__btn--next", "btn-reset");

  gameBtnSkip.textContent = "Пропустить игру";
  gameBtnNext.textContent = "Следующая игра";

  //ГОВОРУША
  const gameRules = createTalker(
    "Ознакомься с описанием картины. Выбери правильный фрагмент."
  );

  gameLeft.append(gameRules.gameRules, gameBtnSkip, gameBtnNext);

  gameRules.rulesBtn.addEventListener("click", (e) => {
    e.preventDefault();
    gameBtnNext.remove();
    // const rulesBlock = createRulesTablet(
    //   "Что обозначают эти символы? Выбери правильный вариант ответа."
    // );
    game.append(rulesBlock);
    gameCenter.style.display = "block";
    gameRules.gameRules.style.display = "none";
    gameBtnSkip.style.display = "block";
    gameBlock.style.paddingBottom = "0";
    gameBlock.style.marginTop = "0";
    gameLeft.style.paddingTop = "0";
    gameBlock.style.overflowY = "scroll";
  });

  //ОЧКИ

  const pointBlock = createPoint();
  // let points = JSON.parse(localStorage.getItem("points"));
  // pointBlock.textContent = points;

  game.append(pointBlock);

  // Веселый дениска

  const happyDeniska = document.createElement("div");
  happyDeniska.classList.add("success-crossword", "hidden");

  const happyDeniskaImg = document.createElement("img");
  happyDeniskaImg.src = "img/deniska-funny.png";

  const happyDeniskaName = document.createElement("p");
  happyDeniskaName.classList.add("success_name", "assistent-name");
  happyDeniskaName.textContent = "Дениска";

  const happyDeniskaText = document.createElement("p");
  happyDeniskaText.classList.add("success_text", "assistent-text");
  happyDeniskaText.textContent =
    "Отлично! Задание выполнено. Тебе начислен 1 балл.";

  gameRight.append(happyDeniska);
  happyDeniska.append(happyDeniskaImg, happyDeniskaName, happyDeniskaText);

  // Грустный Дениска

  const sadDeniska = document.createElement("div");
  sadDeniska.classList.add("fail-crossword", "hidden");

  const sadDeniskaImg = document.createElement("img");
  sadDeniskaImg.src = "img/deniska_sedd.png";

  const sadDeniskaName = document.createElement("p");
  sadDeniskaName.classList.add("fail_name", "assistent-name");
  sadDeniskaName.textContent = "Дениска";

  const sadDeniskaText = document.createElement("p");
  sadDeniskaText.classList.add("fail_text", "assistent-text");
  sadDeniskaText.textContent = "Увы, выбран неверный фрагмент.";

  gameRight.append(sadDeniska);
  sadDeniska.append(sadDeniskaImg, sadDeniskaName, sadDeniskaText);

  // Модалка с картиной
  const modalWrapper = document.createElement("div");
  modalWrapper.classList.add("modal-wrapper");

  const modal = document.createElement("div");
  modal.classList.add("modal", "wrap");

  const modalImgWrapper = document.createElement("div");
  modalImgWrapper.classList.add("modal_border");

  const modalImg = document.createElement("img");
  modalImg.classList.add("modal-img");
  modalImg.src = "img/picture_modal.png";

  const modalDescription = document.createElement("div");
  modalDescription.classList.add("modal-description");

  const modalDescriptionImg = document.createElement("img");
  // modalImg.classList.add("modal-img");
  modalDescriptionImg.src = "img/picture_title.png";

  const modalDescriptionText = document.createElement("p");
  modalDescriptionText.classList.add("modal-text", "name");
  modalDescriptionText.textContent = pictureGame[0].name;

  const modalDescriptionTextAuthor = document.createElement("p");
  modalDescriptionTextAuthor.classList.add("modal-text", "author");
  modalDescriptionTextAuthor.textContent = pictureGame[0].author;

  game.append(modalWrapper);
  modalWrapper.append(modal, modalDescription);
  modalDescription.append(modalDescriptionImg);
  modalDescription.append(modalDescriptionText, modalDescriptionTextAuthor);
  modal.append(modalImgWrapper);
  modalImgWrapper.append(modalImg);
};

picture();

// АДАПТИВ


