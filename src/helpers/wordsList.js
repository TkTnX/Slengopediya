const words = [
  {
    title: "Чекать",
    desc: "проверять, изучать или просматривать что-либо.",
    example: "Я буду чекать свою почту, чтобы увидеть новые сообщения.",
  },
  {
    title: "Мерч",
    desc: "официальная продукция с символикой различных музыкальных коллективов, исполнителей, спортивных команд, фильмов и т.д.",
    example:
      "Я купил футболку с символикой своей любимой группы - это официальный мерч",
  },
  {
    title: "Шмот",
    desc: "сокращенное название для одежды или ее атрибутов.",
    example: "Мне нужно купить новые шмотки на вечеринку",
  },
  {
    title: "Оффнуться",
    desc: "означает замолчать или уйти из какой-либо ситуации.",
    example: "Он ничего не сказал, просто оффнулся и ушел",
  },
  {
    title: "Жиза",
    desc: " выражение, используемое для описания жизненной ситуации или случая, с которым говорящий лично столкнулся",
    example:
      "Это была наша самая сложная жиза - мы потеряли работу и сломали машину в один день",
  },
  {
    title: "Душнила",
    desc: "негативное определение для человека, который является неприятным, навязчивым или занудным",
    example:
      "Он постоянно повторяет одни и те же истории - он настоящая душнила",
  },
  {
    title: "Кринж ",
    desc: "чувство стыда или смущения, вызванное чьим-то поведением или действиями",
    example:
      "Я смотрел видео его выступления и просто не мог не почувствовать кринж",
  },
  {
    title: "Хейтер ",
    desc: "человек, который ненавидит что-либо или кого-либо, и выражает свою ненависть критикой или негативными комментариями",
    example:
      "Он всегда оставляет негативные комментарии - он настоящий хейтер.",
  },
  {
    title: "Кореш",
    desc: "друг, товарищ или приятель",
    example: "Это мой лучший кореш - мы дружим с детства.",
  },
  {
    title: "Чилл ",
    desc: "время отдыха в спокойной и приятной обстановке",
    example: "Давай просто отдохнем и проведем время в чилл атмосфере.",
  },
  {
    title: "Треш ",
    desc: "слово, используемое для описания мусора или хлама",
    example: "В комнате было так много треша, что трудно было найти что-либо.",
  },
  {
    title: "Катка ",
    desc: "отдельная партия или сражение, в результате которого кто-то выигрывает, а кто-то проигрывает",
    example:
      "Мы сыграли несколько каток в настольный хоккей, и мой друг выиграл большинство из них.",
  },
  {
    title: "Вайб ",
    desc: "настроение или атмосфера, которую может создать человек, место или ситуация",
    example:
      "Эта вечеринка имеет очень хороший вайб - все просто веселятся и наслаждаются.",
  },
  {
    title: "Краш ",
    desc: "термин, который может использоваться для описания сильной симпатии или влюбленности в кого-то",
    example:
      "У нее краш на своего коллегу - она стесняется показать свои чувства.",
  },
  {
    title: "Хайп ",
    desc: "шум, создаваемый в медиа и социальных сетях вокруг определенной темы, предмета или персоны",
    example:
      "Этот видеоклип стал настоящим хайпом - все говорят о нем и показывают его друзьям.",
  },
  {
    title: "Пранк",
    desc: "шутка или розыгрыш, организованный с целью разыграть кого-то.",
    example: "Он сделал мне пранк, и я повелся на это - было очень забавно.",
  },
  {
    title: "Рандом ",
    desc: "что-то случайное или неожиданное, происходящее без предупреждения",
    example: "Я взял рандомную книгу с полки и начал читать.",
  },
  {
    title: "Рофл ",
    desc: "громко смеяться или шутить",
    example: "Мы рофлим над его забавными комментариями.",
  },
  {
    title: "Хейт",
    desc: "проявление ненависти, неприязни или неудовлетворенности кого-либо к творчеству или деятельности другого человека",
    example: "Она получает много хейта за свою музыку, но продолжает творить.",
  },
  {
    title: "Челлендж",
    desc: " испытание или задача, которую нужно выполнить или решить",
    example:
      "Я участвовал в челлендже, где нужно было сделать 100 отжиманий за минуту.",
  },
  {
    title: "Нефор",
    desc: "широкий термин, который описывает людей, следующих альтернативным или нетрадиционным стилям жизни",
    example: "Он выглядел как нефор.",
  },
];
words.sort((a, b) => a.title.localeCompare(b.title));

export { words };
