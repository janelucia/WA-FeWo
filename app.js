// Selectors
const detailsHeader = document.querySelector('.fewo-header');
const detailsButton = document.querySelector('.details-btn');
const detailsDiv = document.querySelector('.details-div');
const informationLeft = document.querySelector('.info-left');
const imgFewoDiv = document.querySelector('.img-wrapper');
const characteristicsDiv = document.querySelector('.characteristics-wrapper');
const descriptionSection = document.querySelector('.description-wrapper');
const featuresWrapper = document.querySelector('.features-wrapper');
const informationRight = document.querySelector('.info-right');
const calendarAndPrice = document.querySelector('.calendar-price');
const reviewsDiv = document.querySelector('.reviews-div');
const hostDiv = document.querySelector('.host-div');

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
  addAboutPageDetails(details);
  document.title = details.name;
}

// richtige about Seite öffnen

function getFewoDetails(e) {
  let params = new URL(document.location).searchParams;
  let id = parseInt(params.get('id'));
  const details = inputDetails.fewos.find((f) => f.id === id);
  return details;
}

// hilft beim rendern der Seite

function addDetail(tagName, className, parent) {
  const detail = document.createElement(tagName);
  if (className) {
    detail.classList.add(className);
  }
  parent.appendChild(detail);
  return detail;
}

function addAboutPageDetails(details) {
  // header information

  const fewoHeader = addDetail('h1', null, detailsHeader);
  fewoHeader.innerText = details.name;

  // information details left side

  const imgFewo = addDetail('img', 'fewo-img', imgFewoDiv);
  imgFewo.setAttribute('src', details.img);
  imgFewo.setAttribute('alt', details.alt);

  const characteristicsEntries = Object.entries(details.characteristics);
  characteristicsEntries.map(([key, val], i) => {
    const characteristic = addDetail('span', null, characteristicsDiv);
    characteristic.innerText = `${inputDetails.emojiMapper.characteristics[key]} ${val}`;
  });

  const descriptionTitle = addDetail('h2', null, descriptionSection);
  descriptionTitle.innerText = 'Beschreibung';
  const descriptionArticle = addDetail('article', null, descriptionSection);
  descriptionArticle.innerText = details.description;

  const featuresTitle = addDetail('h2', null, featuresWrapper);
  const featuresList = addDetail('ul', 'features-list', featuresWrapper);
  featuresTitle.innerText = 'Ausstattungsmerkmale';
  const featuresValue = Object.values(details.features);
  featuresValue.map((f) => {
    const feature = addDetail('li', null, featuresList);
    feature.innerText = f;
  });

  // information details right side

  // calendar
  renderCalendar();

  const priceNight = addDetail('p', 'price', calendarAndPrice);
  priceNight.innerText = `${details.price_night}€ / Nacht`;

  const hostImgWrapper = addDetail('div', 'host-img-wrapper', hostDiv);
  const hostImg = addDetail('img', 'host-img', hostImgWrapper);
  hostImg.setAttribute('src', details.host.img);
  hostImg.setAttribute('alt', details.host.alt);
  const hostName = addDetail('p', null, hostDiv);
  hostName.innerText = details.host.name;
  const hostOrigin = addDetail('p', null, hostDiv);
  hostOrigin.innerText = `Nationalität: ${details.host.origin}`;
  const hostAnswer = addDetail('p', null, hostDiv);
  hostAnswer.innerText = `Antwortet in: ${details.host.answer_time} min`;

  // review overview

  const reviewHeader = addDetail('div', 'review-header', reviewsDiv);
  const reviewTitle = addDetail('h2', null, reviewHeader);
  reviewTitle.innerText = `${details.reviews.review_num} Bewertungen`;

  const linkReviewsDiv = addDetail('div', 'link-reviews', reviewHeader);
  const linkReviews = addDetail('a', null, linkReviewsDiv);
  linkReviews.innerText = 'Mehr anzeigen';
  const linkIcon = addDetail('p', 'material-symbols-rounded', linkReviewsDiv);
  linkIcon.innerText = 'chevron_right';

  const reviewList = addDetail('div', 'review-list', reviewsDiv);

  const reviewsValue = Object.values(details.reviews.review_text);
  reviewsValue.map((review) => {
    const oneReviewDiv = addDetail('div', 'one-review-wrapper', reviewList);
    const author = addDetail('p', 'author', oneReviewDiv);
    author.innerText = review.author;
    const reviewText = addDetail('p', null, oneReviewDiv);
    reviewText.innerText = review.text;
  });

  detailsHeader.appendChild(fewoHeader);
}

//todo: i frame und calendar
