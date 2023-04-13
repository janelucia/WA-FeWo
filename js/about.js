// Selectors

const detailsHeader = document.querySelector('.fewo-header');
const detailsButton = document.querySelector('.details-btn');
const detailsDiv = document.querySelector('.details-div');
const informationLeft = document.querySelector('.info-left');
const imgFewoDiv = document.querySelector('.img-wrapper');
const characteristicsDiv = document.querySelector('.characteristics-wrapper');
const descriptionSection = document.querySelector('.description-wrapper');
const featuresWrapper = document.querySelector('.features-wrapper');
const locationDiv = document.querySelector('.location');
const informationRight = document.querySelector('.info-right');
const calendarAndPrice = document.querySelector('.calendar-price');
const reviewsDiv = document.querySelector('.reviews-div');
const hostDiv = document.querySelector('.host-div');

// Functions

// richtige about Seite öffnen

async function getFewoDetails(e) {
  let params = new URL(document.location).searchParams;
  let id = parseInt(params.get('id'));
  const details = (await csvData(listingCsvUrl)).data[id];
  const getReviews = (await csvData(reviewsCsvUrl)).data;
  const reviews = getReviews.filter((r) => details.id === r.listings_id);
  console.log(reviews);

  return details;
}

async function renderAboutPage() {
  const details = await getFewoDetails();
  addAboutPageDetails(details);
  document.title = details.name;
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

// add about page details

async function addAboutPageDetails(details) {
  // header information

  const fewoHeader = addDetail('h1', null, detailsHeader);
  fewoHeader.innerText = details.name;

  // information details left side

  const imgFewo = addDetail('img', 'fewo-img', imgFewoDiv);
  imgFewo.setAttribute('src', details.picture_url);
  imgFewo.setAttribute('alt', details.alt);

  // characteristics

  const neighborhood = addDetail('span', null, characteristicsDiv);
  neighborhood.innerText = `🌆 ${details.neighbourhood_cleansed}`;

  const typeAccommodation = addDetail('span', null, characteristicsDiv);
  typeAccommodation.innerText = `🏠 ${details.property_type}`;

  const maxGuests = addDetail('span', null, characteristicsDiv);
  maxGuests.innerText = `🧑 max. ${details.accommodates} Guests`;

  const minNight = addDetail('span', null, characteristicsDiv);
  minNight.innerText = `💤 Min. ${details.maximum_minimum_nights} Nights`;

  const bathroom = addDetail('span', null, characteristicsDiv);
  bathroom.innerText = `🛁 ${details.bathrooms_text} bathroom(s)`;

  const bedroom = addDetail('span', null, characteristicsDiv);
  bedroom.innerText = `🛏️ ${details.bedrooms} Bedroom(s)`;

  const bed = addDetail('span', null, characteristicsDiv);
  bed.innerText = `🛏️ ${details.beds} Bed(s)`;

  const descriptionTitle = addDetail('h2', null, descriptionSection);
  descriptionTitle.innerText = 'Die Unterkunft';
  const descriptionArticle = addDetail('article', null, descriptionSection);
  descriptionArticle.innerHTML = details.description;

  const featuresTitle = addDetail('h2', null, featuresWrapper);
  const featuresList = addDetail('ul', 'features-list', featuresWrapper);
  featuresTitle.innerText = 'Ausstattungsmerkmale';
  const featuresValue = JSON.parse(details.amenities);
  featuresValue.map((f) => {
    const feature = addDetail('li', null, featuresList);
    feature.innerText = f;
  });

  const neighbourrhoodInformation = addDetail(
    'div',
    'location-info',
    locationDiv
  );
  const neighbourhoodTitle = addDetail('h2', null, neighbourrhoodInformation);
  neighbourhoodTitle.innerText = 'Nachbarschaft';
  const neighbourhoodLocation = addDetail('p', null, neighbourrhoodInformation);
  neighbourhoodLocation.innerText = details.neighbourhood;
  const neighbourhoodDescription = addDetail(
    'p',
    null,
    neighbourrhoodInformation
  );
  neighbourhoodDescription.innerHTML = details.neighborhood_overview;

  // information details right side

  // calendar
  renderCalendar();

  const priceNight = addDetail('p', 'price', calendarAndPrice);
  priceNight.innerText = `${details.price} / Nacht`;

  const hostImgWrapper = addDetail('div', 'host-img-wrapper', hostDiv);
  const hostImg = addDetail('img', 'host-img', hostImgWrapper);
  hostImg.setAttribute('src', details.host_picture_url);
  hostImg.setAttribute('alt', 'Some alt text for accessability');

  const hostName = addDetail('p', 'host-name', hostDiv);
  hostName.innerText = details.host_name;

  if (details.host_is_superhost === 't') {
    const hostSuper = addDetail('p', 'host-super', hostDiv);
    hostSuper.innerText = '✨Superhost✨';
  }

  const hostOrigin = addDetail('p', null, hostDiv);
  hostOrigin.innerText = `Nationalität: ${details.host_location}`;

  const hostAnswerRate = addDetail('p', null, hostDiv);
  hostAnswerRate.innerText = `Antwortrate: ${details.host_response_rate}`;

  const hostAnswer = addDetail('p', null, hostDiv);
  hostAnswer.innerText = `Antwortet: ${details.host_response_time}`;

  const hostAbout = addDetail('p', null, hostDiv);
  hostAbout.innerText = details.host_about;

  const hostSince = addDetail('p', 'host-since', hostDiv);
  hostSince.innerText = `Host seit: ${details.host_since}`;

  // review overview

  const reviewHeader = addDetail('div', 'review-header', reviewsDiv);
  const reviewTitle = addDetail('h2', null, reviewHeader);
  reviewTitle.innerText = `${details.number_of_reviews} Bewertungen`;

  const linkReviewsDiv = addDetail('div', 'link-reviews', reviewHeader);
  const linkReviews = addDetail('a', null, linkReviewsDiv);
  linkReviews.innerText = 'Mehr anzeigen';
  const linkIcon = addDetail('p', 'material-symbols-rounded', linkReviewsDiv);
  linkIcon.innerText = 'chevron_right';

  const reviewList = addDetail('div', 'review-list', reviewsDiv);

  // const reviewsValue = Object.values(details.reviews.review_text);
  // reviewsValue.map((review) => {
  //   const oneReviewDiv = addDetail('div', 'one-review-wrapper', reviewList);
  //   const author = addDetail('p', 'author', oneReviewDiv);
  //   author.innerText = review.author;
  //   const reviewText = addDetail('p', null, oneReviewDiv);
  //   reviewText.innerText = review.text;
  // });

  detailsHeader.appendChild(fewoHeader);
}

//todo: i frame und calendar
