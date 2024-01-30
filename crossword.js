export function createCrossword() {
  const game = document.createElement("section");
  const gameTitle = document.createElement("h1");
  const gameSubtitle = document.createElement("h2");
  const gameBlock = document.createElement("div");
  const gameLeft = document.createElement("div");
  const gameCenter = document.createElement("div");

  const gameRight = document.createElement("div");
  const gameBtnSkip = document.createElement("button");
  const gameBtnNext = document.createElement("button");
  const gameBtnAccept = document.createElement("button");

  // Правила для мобилки

  const rulesBtnImg = document.createElement("svg");
  rulesBtnImg.classList.add("rules-img-btn", "opacity");
  rulesBtnImg.innerHTML = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 5.33618C22.9 5.35218 25.804 5.48152 26.828 6.50552C28 7.67752 28 9.56285 28 13.3335V21.3335C28 25.1055 28 26.9908 26.828 28.1628C25.6573 29.3335 23.7707 29.3335 20 29.3335H12C8.22933 29.3335 6.34267 29.3335 5.172 28.1628C4 26.9895 4 25.1055 4 21.3335V13.3335C4 9.56285 4 7.67752 5.172 6.50552C6.196 5.48152 9.1 5.35218 12 5.33618" fill="url(#paint0_linear_608_5149)"/>
    <path d="M20 5.33618C22.9 5.35218 25.804 5.48152 26.828 6.50552C28 7.67752 28 9.56285 28 13.3335V21.3335C28 25.1055 28 26.9908 26.828 28.1628C25.6573 29.3335 23.7707 29.3335 20 29.3335H12C8.22933 29.3335 6.34267 29.3335 5.172 28.1628C4 26.9895 4 25.1055 4 21.3335V13.3335C4 9.56285 4 7.67752 5.172 6.50552C6.196 5.48152 9.1 5.35218 12 5.33618" stroke="#9382C2" stroke-width="1.5"/>
    <path d="M13.9997 18.6667H22.6663H13.9997ZM9.33301 18.6667H9.99967H9.33301ZM9.33301 14H9.99967H9.33301ZM9.33301 23.3333H9.99967H9.33301ZM13.9997 14H22.6663H13.9997ZM13.9997 23.3333H22.6663H13.9997Z" fill="white"/>
    <path d="M13.9997 18.6667H22.6663M9.33301 18.6667H9.99967M9.33301 14H9.99967M9.33301 23.3333H9.99967M13.9997 14H22.6663M13.9997 23.3333H22.6663" stroke="#9382C2" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M12 4.66675C12 4.13631 12.158 3.62761 12.4393 3.25253C12.7206 2.87746 13.1022 2.66675 13.5 2.66675H18.5C18.8978 2.66675 19.2794 2.87746 19.5607 3.25253C19.842 3.62761 20 4.13631 20 4.66675V6.00008C20 6.53051 19.842 7.03922 19.5607 7.41429C19.2794 7.78937 18.8978 8.00008 18.5 8.00008H13.5C13.1022 8.00008 12.7206 7.78937 12.4393 7.41429C12.158 7.03922 12 6.53051 12 6.00008V4.66675Z" fill="url(#paint1_linear_608_5149)" stroke="#9382C2" stroke-width="1.5"/>
    <defs>
    <linearGradient id="paint0_linear_608_5149" x1="15.9652" y1="5.33618" x2="15.9819" y2="29.3335" gradientUnits="userSpaceOnUse">
    <stop stop-color="#EEDBFD"/>
    <stop offset="0.265654" stop-color="#DBDEFD"/>
    <stop offset="0.784194" stop-color="#E4D8FC"/>
    <stop offset="1" stop-color="#D9B4EA"/>
    </linearGradient>
    <linearGradient id="paint1_linear_608_5149" x1="15.9884" y1="2.66675" x2="15.9909" y2="8.00009" gradientUnits="userSpaceOnUse">
    <stop stop-color="#EEDBFD"/>
    <stop offset="0.265654" stop-color="#DBDEFD"/>
    <stop offset="0.784194" stop-color="#E4D8FC"/>
    <stop offset="1" stop-color="#D9B4EA"/>
    </linearGradient>
    </defs>
    </svg>`;

  const rules = document.createElement("div");
  const rulesBlock = document.createElement("div");
  const rulesText = document.createElement("p");
  const rulesBtnClose = document.createElement("svg");

  rules.classList.add("rules", "opacity");
  rulesBlock.classList.add("rules_block");
  rulesText.classList.add("rules_text");
  rulesBtnClose.classList.add("rules_close");

  rulesText.textContent =
    "Разгадай кроссворд (каждой клетке соответствует одна буква).";
  rulesBtnClose.innerHTML = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 5L5 15M5 5L15 15" stroke="#9382C2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`;

  game.append(rules);
  rules.append(rulesBlock);
  rulesBlock.append(rulesText, rulesBtnClose);

  rulesBtnImg.onclick = function () {
    rules.classList.toggle("opacity");
  };

  rulesBtnClose.onclick = function () {
    rules.classList.add("opacity");
  };

  // Поле для начисления очков
  const pointsAbs = document.createElement("div");
  const points = document.createElement("div");
  const pointsImg = document.createElement("svg");
  const pointsNumber = document.createElement("div");
  const pointsScore = document.createElement("p");

  pointsScore.textContent = "0";
  pointsImg.innerHTML = `<svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dii_1478_2236)">
<path d="M58.7879 0L40 20L21.2121 0V20H0L21.2121 39.3939L0 60H21.2121V80L40 60L58.7879 80V60H80L58.7879 39.3939L80 20H58.7879V0Z" fill="url(#paint0_linear_1478_2236)"/>
</g>
<defs>
<filter id="filter0_dii_1478_2236" x="-2" y="0" width="84" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.629167 0 0 0 0 0.531058 0 0 0 0 0.0969965 0 0 0 1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1478_2236"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1478_2236" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="2"/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_1478_2236"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-2"/>
<feGaussianBlur stdDeviation="1"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_1478_2236" result="effect3_innerShadow_1478_2236"/>
</filter>
<linearGradient id="paint0_linear_1478_2236" x1="41.6301" y1="80" x2="41.6301" y2="3.70339e-06" gradientUnits="userSpaceOnUse">
<stop stop-color="#DB850F"/>
<stop offset="0.0491384" stop-color="#DB850F"/>
<stop offset="0.111143" stop-color="#E89C0F"/>
<stop offset="0.522424" stop-color="#F7B510"/>
<stop offset="0.604167" stop-color="#F9C223"/>
<stop offset="1" stop-color="#FFE560"/>
</linearGradient>
</defs>
</svg>`;

  pointsAbs.classList.add("points_abs");
  points.classList.add("points_wrap", "flex");
  pointsImg.classList.add("points_img");
  pointsNumber.classList.add("points_number");
  pointsScore.classList.add("points_score");

  game.append(pointsAbs);
  pointsAbs.append(points);
  points.append(pointsImg, pointsNumber);
  pointsNumber.append(pointsScore);

  // Создаем блок с вопросами и ответами
  const questionWrap = document.createElement("div");
  const questionImg = document.createElement("img");
  const questionList = document.createElement("ol");
  const questionItem1 = document.createElement("li");
  const questionItem2 = document.createElement("li");
  const questionItem3 = document.createElement("li");
  const questionItem4 = document.createElement("li");
  const answer1 = document.createElement("p");
  const answer2 = document.createElement("p");
  const answer3 = document.createElement("p");
  const answer4 = document.createElement("p");

  questionImg.src = "img/crossword-questionWrap_desctop.png";

  gameTitle.textContent = "Краеведческий калейдоскоп";
  gameSubtitle.innerHTML = `Кроссворд`;
  gameBtnSkip.textContent = "Пропустить игру";
  gameBtnNext.textContent = "Следующая игра";
  gameBtnAccept.textContent = "Принять ответы";

  questionItem1.textContent = "Чувашское традиционное праздничное блюдо";
  questionItem2.textContent =
    "Чувашский народный музыкальный смычковый инструмент";
  questionItem3.textContent = "Древнее название чуваш";
  questionItem4.textContent =
    "Название птицы, изображённой на старом гербе города Чебоксары";
  answer1.textContent = "Правильный ответ: Шартан";
  answer2.textContent = "Правильный ответ: Купас";
  answer3.textContent = "Правильный ответ: Сувар";
  answer4.textContent = "Правильный ответ: Утка";

  game.classList.add("game", "crossword");
  gameTitle.classList.add("game__title");
  gameSubtitle.classList.add("game__subtitle");
  gameBlock.classList.add("game__block", "flex");
  gameLeft.classList.add("game__left", "flex");
  gameCenter.classList.add("game__center");
  gameRight.classList.add("game__right");
  gameBtnSkip.classList.add("game__btn", "game__btn--skip", "btn-reset");
  gameBtnNext.classList.add(
    "game__btn",
    "game__btn--next",
    "game__btn--next_mobile",
    "btn-reset",
    "hidden"
  );
  gameBtnAccept.classList.add(
    "game__btn",
    "game__btn--next",
    "btn-reset",
    "hidden"
  );

  questionWrap.classList.add("question_wrap");
  questionImg.classList.add("question_img");
  questionList.classList.add(
    "question_list",
    "question_list-scroll",
    "list-reset"
  );
  questionItem1.classList.add("question_item");
  questionItem2.classList.add("question_item");
  questionItem3.classList.add("question_item");
  questionItem4.classList.add("question_item");
  answer1.classList.add("question_answer", "hidden");
  answer2.classList.add("question_answer", "hidden");
  answer3.classList.add("question_answer", "hidden");
  answer4.classList.add("question_answer", "hidden");

  document.body.append(game);
  game.append(gameTitle, gameSubtitle, gameBlock);
  gameBlock.append(gameLeft, gameCenter, gameRight);
  gameRight.append(questionWrap);
  questionWrap.append(questionImg, questionList);
  questionList.append(
    questionItem1,
    questionItem2,
    questionItem3,
    questionItem4
  );
  questionItem1.append(answer1);
  questionItem2.append(answer2);
  questionItem3.append(answer3);
  questionItem4.append(answer4);

  // Говоруша
  const assistantPerrot = document.createElement("div");
  const perrotImg = document.createElement("img");
  const perrotName = document.createElement("p");
  const perrotText = document.createElement("p");

  perrotImg.src = "img/perrot_desktop.png";

  assistantPerrot.classList.add("assistant-perrot");
  perrotName.classList.add("perrot_name", "assistent-name");
  perrotText.classList.add("perrot_text", "assistent-text");

  perrotName.textContent = "Говоруша";
  perrotText.textContent =
    "Разгадай кроссворд (каждой клетке соответствует одна буква). Если хочешь исправить свой ответ, просто выбери нужную клетку и введи другую букву.";

  gameLeft.append(assistantPerrot, gameBtnSkip, gameBtnNext, gameBtnAccept);
  assistantPerrot.append(perrotImg, perrotName, perrotText);

  // Веселый Дениска

  const success = document.createElement("div");
  const successImg = document.createElement("img");
  const successName = document.createElement("p");
  const successText = document.createElement("p");

  successImg.src = "img/deniska-funny.png";

  success.classList.add("success", "hidden");
  successName.classList.add("success_name", "assistent-name");
  successText.classList.add("success_text", "assistent-text");

  successName.textContent = "Дениска";
  successText.textContent = "Отлично! Задание выполнено. Тебе начислен 1 балл.";

  gameRight.append(success);
  success.append(successImg, successName, successText);

  // Грустный Дениска

  const fail = document.createElement("div");
  const failImg = document.createElement("img");
  const failName = document.createElement("p");
  const failText = document.createElement("p");

  failImg.src = "img/deniska_sedd.png";

  fail.classList.add("fail", "hidden");
  failName.classList.add("fail_name", "assistent-name");
  failText.classList.add("fail_text", "assistent-text");

  failName.textContent = "Дениска";
  failText.textContent = "К сожалению, разгаданы не все слова!";

  gameRight.append(fail);
  fail.append(failImg, failName, failText);

  // Дениска с вопросом

  const ask = document.createElement("div");
  const askImg = document.createElement("img");
  const askName = document.createElement("p");
  const askText1 = document.createElement("p");
  const askText2 = document.createElement("p");
  const askButtonsWrap = document.createElement("div");
  const askButtonYes = document.createElement("button");
  const askButtonNo = document.createElement("button");

  askImg.src = "img/deniska-question.png";

  ask.classList.add("ask", "hidden");
  askName.classList.add("ask_name", "assistent-name");
  askText1.classList.add("ask_text1", "assistent-text");
  askText2.classList.add("ask_text2", "assistent-text");
  askButtonsWrap.classList.add("askBtn-wrap");
  askButtonYes.classList.add("game__btn", "btn-yes", "btn-reset");
  askButtonNo.classList.add("game__btn", "btn-no", "btn-reset");

  askName.textContent = "Дениска";
  askText1.textContent =
    "При переходе к следующей игре ты, к сожалению, не получишь балл за эту игру.";
  askText2.textContent = "Продолжать?";
  askButtonYes.textContent = "Да";
  askButtonNo.textContent = "Нет";

  document.body.append(ask);
  ask.append(askImg, askName, askText1, askText2, askButtonsWrap);
  askButtonsWrap.append(askButtonYes, askButtonNo);

  // Кроссворд

  const answers = ["шартан", "купас", "сувар", "утка"];

  const grid = [
    [
      null,
      { ids: ["2"], start: "2", class: "input_top" },
      null,
      null,
      { ids: ["3"], start: "3", class: "input_top" },
      null,
      null,
      null,
    ],
    [
      null,
      { ids: ["2"] },
      null,
      null,
      { ids: ["3", "4"], start: "4" },
      { ids: ["4"] },
      { ids: ["4"] },
      { ids: ["4"], class: "input_right" },
    ],
    [null, { ids: ["2"] }, null, null, { ids: ["3"] }, null, null],
    [
      { ids: ["1"], start: "1", class: "input_left" },
      { ids: ["1", "2"] },
      { ids: ["1"] },
      { ids: ["1"] },
      { ids: ["1", "3"] },
      { ids: ["1"], class: "input_right" },
      null,
      null,
    ],
    [
      null,
      { ids: ["2"], class: "input_bottom" },
      null,
      null,
      { ids: ["3"], class: "input_bottom" },
      null,
      null,
      null,
    ],
  ];

  let previousItem = null;
  let currentItem = [0, 0];

  const getNextItem = () => {
    if (previousItem) {
      if (previousItem[0] === currentItem[0]) {
        return [currentItem[0], currentItem[1] + 1];
      }

      if (previousItem[1] === currentItem[1]) {
        return [currentItem[0] + 1, currentItem[1]];
      }
    }

    if (grid[currentItem[0]][currentItem[1] + 1]) {
      return [currentItem[0], currentItem[1] + 1];
    }

    if (grid[currentItem[0] + 1][currentItem[1]]) {
      return [currentItem[0] + 1, currentItem[1]];
    }

    return null;
  };

  const inputFocus = (event) => {
    event.target.select();

    const id = event.target.getAttribute("data-id");

    if (id) {
      const [x, y] = id.split(",");

      currentItem = [Number(x) || 0, Number(y) || 0];
    }
  };

  const inputKeyDown = (event) => {
    event.preventDefault();

    if (event.key === "Backspace") {
      event.target.value = "";
    } else if (/[а-яё]/i.test(event.key)) {
      event.target.value = event.key.toUpperCase();

      const nextItem = getNextItem();

      if (nextItem) {
        previousItem = currentItem;
        currentItem = nextItem;

        document.querySelector(`[data-id='${nextItem.join(",")}']`)?.focus();
      }
    }

    const inputs = [...document.querySelectorAll(".crossword_input")];

    if (inputs.every(({ value }) => value)) {
      gameBtnAccept.classList.remove("hidden");
      gameBtnSkip.classList.add("hidden");
    } else {
      gameBtnAccept.classList.add("hidden");
      gameBtnSkip.classList.remove("hidden");
    }
  };

  const tbody = document.createElement("tbody");

  grid.map((row, rowIndex) => {
    const tr = document.createElement("tr");

    row.map((item, cellIndex) => {
      const td = document.createElement("td");

      td.classList.add("cell");

      tr.appendChild(td);

      if (item) {
        const input = document.createElement("input");

        input.setAttribute("data-id", `${rowIndex},${cellIndex}`);
        input.setAttribute("data-ids", item.ids.join(","));
        input.classList.add("crossword_input", item.class);
        input.onfocus = inputFocus;
        input.onkeydown = inputKeyDown;

        if (item.start) {
          input.setAttribute("data-start", item.start);
          const span = document.createElement("span");

          span.textContent = item.start;
          span.classList.add("start_word");

          td.appendChild(span);
        }

        td.appendChild(input);
      }
    });

    tbody.appendChild(tr);
  });

  const table = document.createElement("table");

  table.appendChild(tbody);

  gameCenter.appendChild(table);

  const checkWords = () => {
    const errorWords = [];

    answers.forEach((word, index) => {
      const id = index + 1;

      const wordInputs = [...document.querySelectorAll(`[data-ids*='${id}']`)];
      const currentWord = wordInputs
        .reduce((acc, { value }) => acc + value, "")
        .toLowerCase();

      if (word === currentWord) {
        wordInputs.forEach((input) => {
          input.classList.add("crossword_input--success");
        });
      } else {
        errorWords.push(id);

        wordInputs.forEach((input) => {
          input.classList.add("crossword_input--error");
        });
      }
    });

    return errorWords;
  };

  gameBtnAccept.onclick = () => {
    const errorWords = checkWords();

    answer1.classList.remove("hidden");
    answer2.classList.remove("hidden");
    answer3.classList.remove("hidden");
    answer4.classList.remove("hidden");
    questionImg.src = "img/crossword-questionWrap_desctop2.png";

    if (errorWords.length > 0) {
      errorWords.forEach((index) => {
        switch (index) {
          case 1:
            answer1.classList.add("question_answer--error");

            break;

          case 2:
            answer2.classList.add("question_answer--error");

            break;

          case 3:
            answer3.classList.add("question_answer--error");

            break;

          case 4:
            answer4.classList.add("question_answer--error");

            break;

          default:
            break;
        }
      });

      setTimeout(() => {
        fail.classList.remove("hidden");
      }, 2000);
    } else {
      pointsImg.innerHTML = `<svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_ddddii_1478_2274)">
    <path d="M61.2121 120L80 100L98.7879 120L98.7879 100L120 100L98.7879 80.6061L120 60L98.7879 60L98.7879 40L80 60L61.2121 40L61.2121 60L40 60L61.2121 80.6061L40 100L61.2121 100L61.2121 120Z" fill="url(#paint0_linear_1478_2274)"/>
    </g>
    <defs>
    <filter id="filter0_ddddii_1478_2274" x="0" y="0" width="160" height="160" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dy="1"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.629167 0 0 0 0 0.531058 0 0 0 0 0.0969965 0 0 0 1 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1478_2274"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset/>
    <feGaussianBlur stdDeviation="20"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.764706 0 0 0 0 0.145098 0 0 0 0.5 0"/>
    <feBlend mode="normal" in2="effect1_dropShadow_1478_2274" result="effect2_dropShadow_1478_2274"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset/>
    <feGaussianBlur stdDeviation="10"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.764706 0 0 0 0 0.145098 0 0 0 0.5 0"/>
    <feBlend mode="normal" in2="effect2_dropShadow_1478_2274" result="effect3_dropShadow_1478_2274"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset/>
    <feGaussianBlur stdDeviation="5"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
    <feBlend mode="normal" in2="effect3_dropShadow_1478_2274" result="effect4_dropShadow_1478_2274"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_1478_2274" result="shape"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dx="2"/>
    <feGaussianBlur stdDeviation="1"/>
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
    <feBlend mode="normal" in2="shape" result="effect5_innerShadow_1478_2274"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dx="-2"/>
    <feGaussianBlur stdDeviation="1"/>
    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
    <feBlend mode="normal" in2="effect5_innerShadow_1478_2274" result="effect6_innerShadow_1478_2274"/>
    </filter>
    <linearGradient id="paint0_linear_1478_2274" x1="78.3699" y1="40" x2="78.3699" y2="120" gradientUnits="userSpaceOnUse">
    <stop stop-color="#DB850F"/>
    <stop offset="0.0491384" stop-color="#DB850F"/>
    <stop offset="0.111143" stop-color="#E89C0F"/>
    <stop offset="0.522424" stop-color="#F7B510"/>
    <stop offset="0.604167" stop-color="#F9C223"/>
    <stop offset="1" stop-color="#FFE560"/>
    </linearGradient>
    </defs>
    </svg>`;

      pointsImg.style.left = "-100%";
      pointsScore.textContent = Number(pointsScore.textContent) + 1;

      setTimeout(() => {
        success.classList.remove("hidden");
      }, 2000);
    }
    // Показываем кнопку "Перейти к следующей игре"
    gameBtnNext.classList.remove("hidden");

    // Скрываем кнопку "Принять ответы"
    gameBtnAccept.classList.add("hidden");
  };

  gameBtnSkip.onclick = () => {
    ask.classList.remove("hidden");
    game.classList.add("blur");
  };

  askButtonNo.onclick = () => {
    ask.classList.add("hidden");
    game.classList.remove("blur");
  };

  // Адаптив

  const mediaQuery = window.matchMedia("(max-width: 1750px)");
  function handleTabletChange(e) {
    if (e.matches) {
      gameLeft.append(questionWrap);
      assistantPerrot.append(gameBtnSkip, gameBtnNext, gameBtnAccept);
      perrotImg.src = "img/perrot_tablet.png";
      perrotText.textContent =
        "Разгадай кроссворд (каждой клетке соответствует одна буква).";
    }
  }
  mediaQuery.addListener(handleTabletChange);
  handleTabletChange(mediaQuery);

  const mediaQuery2 = window.matchMedia("(max-width: 1200px)");
  function handleTabletChange2(e) {
    if (e.matches) {
      failImg.src = "img/deniska_sed_tablet.png";
      successImg.src = "img/deniska-funny_tablet.png";
      askImg.src = "img/deniska-question_tablet.png";
      questionImg.src = "img/crossword-questionWrap_tablet.png";

      gameBtnAccept.onclick = () => {
        const errorWords = checkWords();

        answer1.classList.remove("hidden");
        answer2.classList.remove("hidden");
        answer3.classList.remove("hidden");
        answer4.classList.remove("hidden");
        questionImg.src = "img/crossword-questionWrap2_tablet.png";

        if (errorWords.length > 0) {
          errorWords.forEach((index) => {
            switch (index) {
              case 1:
                answer1.classList.add("question_answer--error");

                break;

              case 2:
                answer2.classList.add("question_answer--error");

                break;

              case 3:
                answer3.classList.add("question_answer--error");

                break;

              case 4:
                answer4.classList.add("question_answer--error");

                break;

              default:
                break;
            }
          });

          setTimeout(() => {
            fail.classList.remove("hidden");
          }, 2000);
        } else {
          pointsImg.innerHTML = `<svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_ddddii_1478_2274)">
        <path d="M61.2121 120L80 100L98.7879 120L98.7879 100L120 100L98.7879 80.6061L120 60L98.7879 60L98.7879 40L80 60L61.2121 40L61.2121 60L40 60L61.2121 80.6061L40 100L61.2121 100L61.2121 120Z" fill="url(#paint0_linear_1478_2274)"/>
        </g>
        <defs>
        <filter id="filter0_ddddii_1478_2274" x="0" y="0" width="160" height="160" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.629167 0 0 0 0 0.531058 0 0 0 0 0.0969965 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1478_2274"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="20"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.764706 0 0 0 0 0.145098 0 0 0 0.5 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow_1478_2274" result="effect2_dropShadow_1478_2274"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="10"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.764706 0 0 0 0 0.145098 0 0 0 0.5 0"/>
        <feBlend mode="normal" in2="effect2_dropShadow_1478_2274" result="effect3_dropShadow_1478_2274"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
        <feBlend mode="normal" in2="effect3_dropShadow_1478_2274" result="effect4_dropShadow_1478_2274"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_1478_2274" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
        <feBlend mode="normal" in2="shape" result="effect5_innerShadow_1478_2274"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-2"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
        <feBlend mode="normal" in2="effect5_innerShadow_1478_2274" result="effect6_innerShadow_1478_2274"/>
        </filter>
        <linearGradient id="paint0_linear_1478_2274" x1="78.3699" y1="40" x2="78.3699" y2="120" gradientUnits="userSpaceOnUse">
        <stop stop-color="#DB850F"/>
        <stop offset="0.0491384" stop-color="#DB850F"/>
        <stop offset="0.111143" stop-color="#E89C0F"/>
        <stop offset="0.522424" stop-color="#F7B510"/>
        <stop offset="0.604167" stop-color="#F9C223"/>
        <stop offset="1" stop-color="#FFE560"/>
        </linearGradient>
        </defs>
        </svg>`;

          pointsImg.classList.add("points_img__shine");
          pointsImg.style.left = "-62px";
          pointsImg.style.top = "-37px";
          pointsScore.textContent = Number(pointsScore.textContent) + 1;

          setTimeout(() => {
            success.classList.remove("hidden");
          }, 2000);
        }
        // Показываем кнопку "Перейти к следующей игре"
        gameBtnNext.classList.remove("hidden");

        // Скрываем кнопку "Принять ответы"
        gameBtnAccept.classList.add("hidden");
      };
    }
  }
  mediaQuery2.addListener(handleTabletChange2);
  handleTabletChange2(mediaQuery2);

  const mediaQuery3 = window.matchMedia("(max-width: 768px)");
  function handleTabletChange3(e) {
    if (e.matches) {
      // Делаем слайдер

      const slider = document.createElement("div");
      const sliderWrapper = document.createElement("div");
      const slide1 = document.createElement("div");
      const slideBtn = document.createElement("div");
      const slide2 = document.createElement("div");

      slider.classList.add("swiper", "mySwiper");
      sliderWrapper.classList.add("swiper-wrapper");
      slide1.classList.add("swiper-slide");
      slideBtn.classList.add("swiper-button-next");
      slide2.classList.add("swiper-slide", "slide2", "flex");
      gameLeft.classList.add("hidden");
      questionList.classList.remove("question_list-scroll");

      gameBlock.append(slider);
      slider.append(sliderWrapper);
      sliderWrapper.append(slide1, slide2);
      slide1.append(assistantPerrot);
      assistantPerrot.append(slideBtn);
      slide2.append(questionWrap, gameCenter, gameBtnSkip, gameBtnAccept);
      document.body.append(fail, success, gameBtnNext);

      // кнопка правил на втором слайде

      game.append(rulesBtnImg);
      const swiper = new Swiper(".swiper", {
        // allowTouchMove: false,
      });

      // при листании сенсорно

      swiper.on("slideChange", function () {
        rulesBtnImg.classList.add(
          "rules-img-btn",
          "opacity",
          `rules-slider_${swiper.realIndex + 1}`
        ); //В зависимости от того, на каком по счёту слайде сейчас находимся
      });

      // при листании кнопкой

      slideBtn.onclick = function () {
        rulesBtnImg.classList.remove("opacity");
      };

      // -------

      perrotImg.src = "img/perrot_mobile.png";
      questionImg.src = "img/crossword-questionWrap_mobile.png";
      successImg.src = "img/deniska-funny_mobile.png";
      failImg.src = "img/deniska_sed_mobile.png";
      askImg.src = "img/deniska-question_mobile.png";

      askText1.textContent =
        "При переходе к следующей игре ты, к сожалению, не получишь балл.";

      gameBtnAccept.onclick = () => {
        const errorWords = checkWords();

        answer1.classList.remove("hidden");
        answer2.classList.remove("hidden");
        answer3.classList.remove("hidden");
        answer4.classList.remove("hidden");
        questionImg.src = "img/crossword-questionWrap_mobile.png";
        questionList.classList.add("question_list-scroll");

        if (errorWords.length > 0) {
          errorWords.forEach((index) => {
            switch (index) {
              case 1:
                answer1.classList.add("question_answer--error");

                break;

              case 2:
                answer2.classList.add("question_answer--error");

                break;

              case 3:
                answer3.classList.add("question_answer--error");

                break;

              case 4:
                answer4.classList.add("question_answer--error");

                break;

              default:
                break;
            }
          });

          setTimeout(() => {
            fail.classList.remove("hidden");
            game.classList.add("blur");
            gameBtnNext.classList.remove("hidden");
          }, 4000);
        } else {
          pointsImg.innerHTML = `<svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_ddddii_1478_2274)">
        <path d="M61.2121 120L80 100L98.7879 120L98.7879 100L120 100L98.7879 80.6061L120 60L98.7879 60L98.7879 40L80 60L61.2121 40L61.2121 60L40 60L61.2121 80.6061L40 100L61.2121 100L61.2121 120Z" fill="url(#paint0_linear_1478_2274)"/>
        </g>
        <defs>
        <filter id="filter0_ddddii_1478_2274" x="0" y="0" width="160" height="160" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.629167 0 0 0 0 0.531058 0 0 0 0 0.0969965 0 0 0 1 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1478_2274"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="20"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.764706 0 0 0 0 0.145098 0 0 0 0.5 0"/>
        <feBlend mode="normal" in2="effect1_dropShadow_1478_2274" result="effect2_dropShadow_1478_2274"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="10"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.976471 0 0 0 0 0.764706 0 0 0 0 0.145098 0 0 0 0.5 0"/>
        <feBlend mode="normal" in2="effect2_dropShadow_1478_2274" result="effect3_dropShadow_1478_2274"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset/>
        <feGaussianBlur stdDeviation="5"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"/>
        <feBlend mode="normal" in2="effect3_dropShadow_1478_2274" result="effect4_dropShadow_1478_2274"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_1478_2274" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="2"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
        <feBlend mode="normal" in2="shape" result="effect5_innerShadow_1478_2274"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="-2"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0"/>
        <feBlend mode="normal" in2="effect5_innerShadow_1478_2274" result="effect6_innerShadow_1478_2274"/>
        </filter>
        <linearGradient id="paint0_linear_1478_2274" x1="78.3699" y1="40" x2="78.3699" y2="120" gradientUnits="userSpaceOnUse">
        <stop stop-color="#DB850F"/>
        <stop offset="0.0491384" stop-color="#DB850F"/>
        <stop offset="0.111143" stop-color="#E89C0F"/>
        <stop offset="0.522424" stop-color="#F7B510"/>
        <stop offset="0.604167" stop-color="#F9C223"/>
        <stop offset="1" stop-color="#FFE560"/>
        </linearGradient>
        </defs>
        </svg>`;

          pointsImg.classList.add("points_img__shine");
          pointsImg.style.left = "-44px";
          pointsImg.style.top = "-21px";
          pointsScore.textContent = Number(pointsScore.textContent) + 1;

          setTimeout(() => {
            success.classList.remove("hidden");
            game.classList.add("blur");
            gameBtnNext.classList.remove("hidden");
          }, 4000);
        }

        gameBtnAccept.classList.add("opacity");
      };
    }
  }
  mediaQuery3.addListener(handleTabletChange3);
  handleTabletChange3(mediaQuery3);

  return game;
}

createCrossword();
