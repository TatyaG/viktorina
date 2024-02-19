import createPoint from "./point.js";

export function createFinal() {
  const final = document.createElement("section");

  //   Логотип
  const logo = document.createElement("div");
  const logoLink = document.createElement("a");
  const logoImg = document.createElement("img");

  logoImg.src = "img/logo.svg";
  logoLink.setAttribute("href", "http://nsds1.ru/");
  logoLink.setAttribute("target", "_blank");

  //   Название
  const finalTitle = document.createElement("div");
  const title = document.createElement("h1");
  const titleImg = document.createElement("img");

  titleImg.src = "img/final-text_desktop.png";
  title.textContent = "Открывая мир";

  //   Содержимое
  const finalContent = document.createElement("div");
  const finalLeft = document.createElement("div");
  const finalCenter = document.createElement("div");
  const finalRight = document.createElement("div");

  logo.classList.add("logo");
  logoLink.classList.add("logo-link");
  logoImg.classList.add("logo-img");
  finalTitle.classList.add("final-title");
  title.classList.add("title_h1");

  final.classList.add("final");
  finalContent.classList.add("final-content", "flex");
  finalLeft.classList.add("final-left", "flex");
  finalCenter.classList.add("final-center", "flex");
  finalRight.classList.add("final-right", "flex");

  // Слева Говоруша
  const assistantPerrot = document.createElement("div");
  const perrotImg = document.createElement("img");
  const perrotName = document.createElement("p");
  const perrotText = document.createElement("p");
  const perrotButtonDiv = document.createElement("div");
  const perrotButtonText = document.createElement("p");
  const perrotButton = document.createElement("button");

  perrotImg.src = "img/final-parrot.png";

  assistantPerrot.classList.add("final_assistant-perrot");
  perrotName.classList.add("perrot_name", "final_assistent-name");
  perrotText.classList.add("perrot_text", "final_assistent-text");
  perrotButtonDiv.classList.add("perrot-btn", "flex");
  perrotButtonText.classList.add("perrot_textbtn", "final_assistent-text");
  perrotButton.classList.add("perrot-btn_img", "btn-reset");

  perrotName.textContent = "Говоруша";
  perrotText.textContent =
    "Хочешь узнать больше об известных личностях и музеях Чувашии?";
  perrotButtonText.textContent = "Жми сюда";

  // Центр
  const centerDiv = document.createElement("div");
  const centerImg = document.createElement("img");
  const centerText = document.createElement("p");
  centerImg.src = "img/final-arka.webp";
  centerText.textContent = "Конец игры";

  const pointBlock = createPoint();
//   let points = JSON.parse(localStorage.getItem("points") ?? 0);
  let points = 4;
  pointBlock.textContent = points + ` из 9`;

  const centerButtons = document.createElement("div");
  const gameBtnTakePrize = document.createElement("button");
  const gameBtnPlayAgain = document.createElement("button");

  gameBtnTakePrize.textContent = "Забрать приз";
  gameBtnPlayAgain.textContent = "Играть снова";

  centerDiv.classList.add("center_div");
  centerImg.classList.add("center_img");
  centerText.classList.add("center_text");
  centerButtons.classList.add("center_buttons", "flex");
  gameBtnTakePrize.classList.add(
    "game-crossword__btn",
    "game-crossword__btn--next",
    "btn-reset"
  );
  gameBtnPlayAgain.classList.add(
    "game-crossword__btn",
    "game-crossword__btn--skip",
    "btn-reset"
  );

  gameBtnPlayAgain.addEventListener("click", function () {
    window.location.href = "index.html";
  });

  // Добавление элементов
  document.body.append(final);
  final.append(logo, finalTitle, finalContent);
  logo.append(logoLink);
  logoLink.append(logoImg);
  finalTitle.append(title, titleImg);
  finalContent.append(finalLeft, finalCenter, finalRight);
  finalLeft.append(assistantPerrot);
  assistantPerrot.append(perrotImg, perrotName, perrotText, perrotButtonDiv);
  perrotButtonDiv.append(perrotButtonText, perrotButton);
  finalCenter.append(centerImg, centerDiv);
  centerDiv.append(centerText, pointBlock, centerButtons);
  centerButtons.append(gameBtnTakePrize, gameBtnPlayAgain);

  //   Справа Дениска
  const deniska = document.createElement("div");
  const deniskaImg = document.createElement("img");
  const deniskaName = document.createElement("p");
  const deniskaText = document.createElement("p");

  deniska.classList.add("final_deniska");
  deniskaName.classList.add("deniska_name", "final_assistent-name");
  deniskaText.classList.add("deniska_text", "final_assistent-text");

  deniskaName.textContent = "Дениска";

  finalRight.append(deniska);
  deniska.append(deniskaImg, deniskaName, deniskaText);

  //   -----------------

  // Логика
  if (points >= 0 && points <= 3) {
    gameBtnTakePrize.classList.add("hidden");
    deniskaImg.src = "img/final-boySad.png";
    deniskaText.textContent =
      "Для получения приза необходимо набрать больше баллов. Попробуй пройти игру снова.";
    deniska.style.marginBottom = "40px";
    centerImg.style.height = "140%";
    centerImg.style.top = "-21%";
    finalCenter.style.width = "42%";
    finalRight.append(gameBtnPlayAgain);
    gameBtnPlayAgain.style.top = "-30%";
  } else {
    deniskaImg.src = "img/final-boySmile.png";
    deniskaName.style.top = "47%";
    deniskaName.style.left = "35.5%";
    deniskaText.innerHTML = "Поздравляю! <br> Можешь теперь забрать свой приз!";
  }

  //   Футер
  const footer = document.createElement("footer");
  const footerContainer = document.createElement("div");
  const footerText = document.createElement("small");
  const itLogo = document.createElement("div");
  const footerLogoText = document.createElement("small");
  const footerLogo = document.createElement("div");
  const footerLogoTitle = document.createElement("small");
  const itLink = document.createElement("a");
  const footerLogoImg = document.createElement("img");
  const footerSpan = document.createElement("span");
  const titansLink = document.createElement("a");

  footer.classList.add("footer", "flex");
  footerContainer.classList.add("footer__container");
  footerText.classList.add("footer__text");
  itLogo.classList.add("IT-logo", "flex");
  footerLogoText.classList.add("IT-logo__text");
  footerLogo.classList.add("IT-logo__column", "flex");
  footerLogoTitle.classList.add("IT-logo__title", "flex");

  footerText.textContent = "© 2023 Чебоксарская НОШ для обучающихся с ОВЗ № 1";
  footerLogoText.textContent = "Сделано в: ";
  footerSpan.textContent = " | ";
  footerSpan.style.marginRight = "7px";
  titansLink.textContent = "ITitans";

  footerLogoImg.src = "img/logo_1T.svg";
  itLink.setAttribute("href", "https://xn--g1ani7c.xn--p1ai/");
  itLink.setAttribute("target", "_blank");
  titansLink.setAttribute(
    "href",
    "https://xn--g1ani7c.xn--p1ai/my/teams/space/2989122108225482194?name=ITitans&space=610"
  );
  titansLink.setAttribute("target", "_blank");

  final.append(footer);
  footer.append(footerContainer, itLogo);
  footerContainer.append(footerText);
  itLogo.append(footerLogoText, footerLogo);
  footerLogo.append(footerLogoTitle);
  footerLogoTitle.append(itLink, footerSpan, titansLink);
  itLink.append(footerLogoImg);

  //   Адаптив
  const mediaQuery1 = window.matchMedia("(max-width: 1800px)");
  function handleTabletChange1(e) {
    if (e.matches) {
      if (points >= 0 && points <= 3) {
        // gameBtnTakePrize.classList.add("hidden");
        // deniskaImg.src = "img/final-boySad_tablet.png";
        // deniskaText.textContent =
        //   "Для получения приза необходимо набрать больше баллов. Попробуй пройти игру снова.";
        // deniska.style.marginBottom = "40px";
        // finalRight.append(gameBtnPlayAgain);
        gameBtnPlayAgain.style.top = "-15%";
      } 
    //   else {
        // deniskaImg.src = "img/final-boySmile_tablet.png";
        // deniskaName.style.left = "34%";
        // deniskaText.innerHTML =
        //   "Поздравляю! <br> Можешь теперь забрать свой приз!";
    //   }
    }
  }
  mediaQuery1.addListener(handleTabletChange1);
  handleTabletChange1(mediaQuery1);

  const mediaQuery = window.matchMedia("(max-width: 1600px)");
  function handleTabletChange(e) {
    if (e.matches) {
      perrotImg.src = "img/final-parrot_tablet.png";
      footerLogoImg.style.width = "62px";

      // Логика
      if (points >= 0 && points <= 3) {
        // gameBtnTakePrize.classList.add("hidden");
        deniskaImg.src = "img/final-boySad_tablet.png";
        // deniskaText.textContent =
        //   "Для получения приза необходимо набрать больше баллов. Попробуй пройти игру снова.";
        // deniska.style.marginBottom = "40px";
        // finalRight.append(gameBtnPlayAgain);
        deniskaText.style.left = "20%";
        centerImg.style.height = "150%";
        centerImg.style.top = "-29%";
      } else {
        deniskaImg.src = "img/final-boySmile_tablet.png";
        // deniskaName.style.left = "34%";
        // deniskaText.innerHTML =
        //   "Поздравляю! <br> Можешь теперь забрать свой приз!";
      }
    }
  }
  mediaQuery.addListener(handleTabletChange);
  handleTabletChange(mediaQuery);

  const mediaQuery2 = window.matchMedia("(max-width: 1440px)");
  function handleTabletChange2(e) {
    if (e.matches) {
      titleImg.src = "img/final-text_tablet.png";
      deniskaName.style.left = "38%";

      if (points >= 0 && points <= 3) {
        centerImg.style.top = "-8%";
        pointBlock.style.top = "58%";
      }
    }
  }
  mediaQuery2.addListener(handleTabletChange2);
  handleTabletChange2(mediaQuery2);


  const mediaQuery3 = window.matchMedia("(max-width: 1366px)");
  function handleTabletChange3(e) {
    if (e.matches) {
        if (points >= 0 && points <= 3) {
        gameBtnPlayAgain.style.position = "absolute";
        gameBtnPlayAgain.style.top = "76%";
        gameBtnPlayAgain.style.right = "5.5%";
        deniskaText.style.left = "13%";
        deniskaText.style.top = "62%";
        pointBlock.style.top = "70%";
        centerImg.style.height = "155%";
        }
    }
  }
  mediaQuery3.addListener(handleTabletChange3);
  handleTabletChange3(mediaQuery3);


  const mediaQuery4 = window.matchMedia("(max-width: 1300px)");
  function handleTabletChange4(e) {
    if (e.matches) {
      if (points >= 0 && points <= 3) {
        finalCenter.style.width = "55%";
      }
    }
  }
  mediaQuery4.addListener(handleTabletChange4);
  handleTabletChange4(mediaQuery4);


  const mediaQuery5 = window.matchMedia("(max-width: 1024px)");
  function handleTabletChange5(e) {
    if (e.matches) {
      if (points >= 0 && points <= 3) {
        gameBtnPlayAgain.style.top = "61%";
        gameBtnPlayAgain.style.right = "4%";
        pointBlock.style.top = "85%";
        finalContent.style.marginBottom = "234px";
      }
    }
  }
  mediaQuery5.addListener(handleTabletChange5);
  handleTabletChange5(mediaQuery5);

  return final;
}

createFinal();
