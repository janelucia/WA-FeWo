// Selectors
const detailsHeader = document.querySelector('.header-details');
const detailsButton = document.querySelector('.details-btn');
const detailsDiv = document.querySelector('.details-div');
const reviewDiv = document.querySelector('.review-div');

// Event Listeners

document.addEventListener('DOMContentLoaded', () => {
  const currentPath = window.location.pathname;

  if (currentPath === '/about.html') {
    renderAboutPage();
  }
});

// Functions

function renderAboutPage() {
  const details = getFewoDetails();
  addDetails(details);
  document.title = details.name;
}

// richtige about Seite öffnen
function getFewoDetails(e) {
  let params = new URL(document.location).searchParams;
  let id = parseInt(params.get('id'));
  const details = inputDetails.fewos.find((f) => f.id === id);
  return details;
}

// calendar Funktion
function calendar(selectMonth) {
  let date = new Date();
  let currYear = date.getFullYear();
  let currMonth = date.getMonth();

  const months = [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
  ];

  const week = [
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
    'Sonntag',
  ];

  let currentMonth;
  let lastDateOfMonth;
  if (selectMonth === 'prev') {
    currentMonth = months[currMonth - 1];
    console.log(currentMonth);
    lastDateOfMonth = new Date(currYear, currMonth - 1, 0).getDate(); //get last date of the month
  } else if (selectMonth === 'next') {
    currentMonth = months[currMonth + 1];
    lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(); //get last date of the month
  } else {
    currentMonth = months[currMonth];
    lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(); //get last date of the month
  }

  let dayArr = [];

  for (let i = 1; i < lastDateOfMonth; i++) {
    dayArr[i - 1] = i;
  }

  return { currentYear: currYear, currentMonth, week, dayArr };
}

// hilft beim rendern der Seite

function addDetails(details) {
  function addDetail(tagName, className, parent) {
    const detail = document.createElement(tagName);
    if (className) {
      detail.classList.add(className);
    }
    parent.appendChild(detail);
    return detail;
  }

  // header information

  const fewoHeader = addDetail('h1', null, detailsHeader);
  fewoHeader.innerText = details.name;

  // information details left side

  const informationLeft = addDetail('div', 'info-left', detailsDiv);

  const imgFewoDiv = addDetail('div', 'img-wrapper', informationLeft);
  const imgFewo = addDetail('img', 'fewo-img', imgFewoDiv);
  imgFewo.setAttribute('src', details.img);
  imgFewo.setAttribute('alt', details.alt);

  const characteristicsDiv = addDetail(
    'div',
    'characteristics-wrapper',
    informationLeft
  );

  const characteristicsEntries = Object.entries(details.characteristics);

  characteristicsEntries.map(([key, val], i) => {
    const characteristic = addDetail('span', null, characteristicsDiv);
    characteristic.innerText = `${inputDetails.emojiMapper.characteristics[key]} ${val}`;
  });

  const descriptionSection = addDetail(
    'div',
    'description-wrapper',
    informationLeft
  );
  const descriptionTitle = addDetail('h2', null, descriptionSection);
  descriptionTitle.innerText = 'Beschreibung';
  const descriptionArticle = addDetail('article', null, descriptionSection);
  descriptionArticle.innerText = details.description;

  const featuresWrapper = addDetail('ul', 'features-wrapper', informationLeft);
  const featuresTitle = addDetail('h2', null, featuresWrapper);
  const featuresList = addDetail('ul', 'features-list', featuresWrapper);
  featuresTitle.innerText = 'Ausstattungsmerkmale';
  const featuresValue = Object.values(details.features);
  featuresValue.map((f) => {
    const feature = addDetail('li', null, featuresList);
    feature.innerText = f;
  });

  // information details right side

  const informationRight = addDetail('div', 'info-right', detailsDiv);
  const sidePanelDiv = addDetail('div', 'sidepanel-div', informationRight);

  // calendar
  const calendarObj = calendar();
  console.log(calendarObj);

  const calendarWrapper = addDetail('div', 'calendar-wrapper', sidePanelDiv);
  const calendarHead = addDetail('div', 'calendar-head', calendarWrapper);
  const headTitle = addDetail('p', null, calendarHead);
  headTitle.innerText = `${calendarObj.currentMonth} ${calendarObj.currentYear}`;
  const iconWrapper = addDetail('div', 'icons', calendarHead);
  const chevronLeft = addDetail(
    'span',
    'material-symbols-rounded',
    iconWrapper
  );
  chevronLeft.addEventListener('click', () => {
    calendar('prev');
  });
  chevronLeft.innerText = 'chevron_left';
  const chevronRight = addDetail(
    'span',
    'material-symbols-rounded',
    iconWrapper
  );
  chevronRight.innerText = 'chevron_right';
  chevronRight.addEventListener('click', () => {
    calendar('next');
  });

  const calendarBody = addDetail('div', 'calendar-body', calendarWrapper);
  const weekList = addDetail('ul', 'weeks', calendarBody);
  calendarObj.week.map((day) => {
    const dayLi = addDetail('li', null, weekList);
    dayLi.innerText = day.slice(0, 2);
  });

  const dayList = addDetail('ul', 'days', calendarBody);
  calendarObj.dayArr.map((date) => {
    const dayLi = addDetail('li', null, dayList);
    dayLi.innerText = date;
  });

  const priceNight = addDetail('p', 'price', sidePanelDiv);
  priceNight.innerText = `${details.price_night}€ / Nacht`;

  const hostSection = addDetail('section', 'host-section', informationRight);

  const hostImgWrapper = addDetail('div', 'host-img-wrapper', hostSection);
  const hostImg = addDetail('img', 'host-img', hostImgWrapper);
  hostImg.setAttribute('src', details.host.img);
  hostImg.setAttribute('alt', details.host.alt);
  const hostName = addDetail('p', null, hostSection);
  hostName.innerText = details.host.name;
  const hostOrigin = addDetail('p', null, hostSection);
  hostOrigin.innerText = `Nationalität: ${details.host.origin}`;
  const hostAnswer = addDetail('p', null, hostSection);
  hostAnswer.innerText = `Antwortet in: ${details.host.answer_time} min`;

  // review overview

  const reviewTitle = addDetail('h2', null, reviewDiv);
  reviewTitle.innerText = `Bewertungen (${details.reviews.review_num})`;

  const reviewsValue = Object.values(details.reviews.review_text);
  reviewsValue.map((r) => {
    const review = addDetail('p', null, reviewDiv);
    review.innerText = r;
  });

  detailsHeader.appendChild(fewoHeader);
}

//todo: i frame und calendar
