// Selectors
const fewoList = document.querySelector('.fewo-list');

// Functions

async function renderOverviewPage() {
  const details = (await csvData(listingCsvUrl)).data;
  for (let i = 0; i <= 10; i++) {
    const fewo = details[i];
    addOverviewDetail(fewo, i);
  }
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

// add Overview Details

function addOverviewDetail(fewo, i) {
  const fewoDiv = addDetail('div', 'fewo-list-item-wrapper', fewoList);

  const fewoBild = addDetail('img', null, fewoDiv);
  fewoBild.setAttribute('src', fewo.picture_url);

  const fewoListInfo = addDetail('div', 'fewo-list-info', fewoDiv);

  const fewoName = addDetail('h2', null, fewoListInfo);
  fewoName.innerText = fewo.name;

  const fewoTyp = addDetail('p', null, fewoListInfo);
  fewoTyp.innerText = fewo.property_type;

  const fewoOrt = addDetail('p', null, fewoListInfo);
  fewoOrt.innerText = fewo.neighbourhood_cleansed;

  const fewoPreisStars = addDetail('div', 'price-stars', fewoListInfo);

  const fewoPreis = addDetail('span', null, fewoPreisStars);
  fewoPreis.innerText = `${fewo.price}`;

  const fewoStarsDiv = addDetail('div', null, fewoPreisStars);

  for (let i = 1; i < fewo.review_scores_value; i++) {
    const fewoBewertung = addDetail('span', null, fewoStarsDiv);
    fewoBewertung.innerText = '★';
  }

  const fewoAnzahlBewertungen = addDetail(
    'span',
    'overview-bewertung',
    fewoStarsDiv
  );
  fewoAnzahlBewertungen.innerText = fewo.number_of_reviews;

  const fewoDetailsLink = addDetail('a', 'details-bnt', fewoDiv);
  fewoDetailsLink.innerText = 'mehr anzeigen';
  fewoDetailsLink.setAttribute('href', `./about.html?id=${i}`);
}
