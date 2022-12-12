// change lang
function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

let language = {
  ru: {
    title: "Онлайн кредит без справок и поручителей",
    text: "Сравним и подберем лучшие условия для Вас!",
    infoCall: "звонок бесплатный",
  },
  kz: {
    title: "АНЫҚТАМАЛАРСЫЗ ЖӘНЕ КЕПІЛГЕРЛЕРСІЗ ОНЛАЙН НЕСИЕ",
    text: "Біз сіз үшін ең жақсы жағдайларды салыстырамыз және таңдаймыз!",
    infoCall: "қоңырау шалу тегін",
  },
};

if (window.location.hash) {
  if (window.location.hash == "#ru") {
    mainTitle.textContent = language.ru.title;
    mainText.textContent = language.ru.text;
    infoCall.textContent = language.ru.infoCall;
  } else if (window.location.hash == "#kz") {
    mainTitle.textContent = language.kz.title;
    mainText.textContent = language.kz.text;
    infoCall.textContent = language.kz.infoCall;
  }
}
