// Selectors
const fewoList = document.querySelector('.fewo-list');
const filterWrapper = document.querySelector('.all-filter-wrapper');
const inputSearchName = document.querySelector('#search-for-name');
const selectSearchNeighbourhood = document.querySelector(
  '#neighbourhood-select'
);
const fewoTypeWrapper = document.querySelector('.fewo-type');
const reviewScoreStartWrapper = document.querySelector('.review-score-start');
const reviewScoreStart = document.getElementById('review-score-start');
const reviewScoreEndWrapper = document.querySelector('.review-score-end');
const reviewScoreEnd = document.getElementById('review-score-end');
const priceStartWrapper = document.querySelector('.price-start');
const priceStart = document.getElementById('price-start');
const priceEndWrapper = document.querySelector('.price-end');
const priceEnd = document.getElementById('price-end');
const filterButton = document.getElementById('filter-btn');
const sortReviewWrapper = document.querySelector('.sort-review');
const sortPriceWrapper = document.querySelector('.sort-price');

const fewoToShow = 10;

// Functions

async function renderOverviewPage() {
  const details = (await csvData(listingCsvUrl)).data.filter(
    (d) =>
      d.name &&
      d.neighbourhood_cleansed &&
      d.room_type &&
      d.review_scores_value &&
      d.price
  );
  console.log(details);
  addFilterDetails(details);
  addSortDetails(details);
  for (let i = 0; i <= fewoToShow; i++) {
    const fewo = details[i];
    addOverviewDetail(fewo);
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

function cleanNumber(num) {
  return parseFloat(num.replace(/[$,]/g, ''));
}

// add filter details

function addFilterDetails(details) {
  const neighbourhoods = [
    ...new Set(details.map((d) => d.neighbourhood_cleansed).filter((d) => !!d)),
  ].sort();

  const roomType = [
    ...new Set(details.map((d) => d.room_type).filter((d) => !!d)),
  ];
  console.log(details[116]);

  const priceSortAscending = [
    ...new Set(details.map((d) => d.price).filter((d) => !!d)),
  ].sort((a, b) => {
    const priceA = cleanNumber(a);
    const priceB = cleanNumber(b);
    return priceA - priceB;
  });

  neighbourhoods.map((n) => {
    const optionNeighbourhood = addDetail(
      'option',
      null,
      selectSearchNeighbourhood
    );
    optionNeighbourhood.setAttribute('value', n);
    optionNeighbourhood.innerText = n;
  });

  roomType.map((t) => {
    const typeWrapper = addDetail('div', 'type-wrapper', fewoTypeWrapper);
    const typeCheckbox = addDetail('input', 'type-checkbox', typeWrapper);
    typeCheckbox.setAttribute('type', 'checkbox');
    typeCheckbox.setAttribute('id', `check-${t}`);
    typeCheckbox.setAttribute('checked', 'checked');
    const labelCheckbox = addDetail('label', null, typeWrapper);
    labelCheckbox.setAttribute('for', `check-${t}`);
    labelCheckbox.innerText = t;
  });

  function displayStars(e) {
    let stars = '';
    for (let i = 1; i <= e; i++) {
      stars += '★';
    }
    return stars;
  }

  const labelReviewScoreStart = addDetail(
    'label',
    null,
    reviewScoreStartWrapper
  );
  reviewScoreStart.setAttribute('min', 1);
  reviewScoreStart.setAttribute('max', 5);
  reviewScoreStart.setAttribute('value', 1);
  labelReviewScoreStart.innerText = '★';
  reviewScoreStart.addEventListener('input', (e) => {
    let stars = displayStars(e.target.value);
    labelReviewScoreStart.innerText = stars;
    reviewScoreStart.setAttribute('value', e.target.value);
  });

  reviewScoreEnd.setAttribute('min', 1);
  reviewScoreEnd.setAttribute('max', 5);
  reviewScoreEnd.setAttribute('value', 5);
  const labelReviewScoreEnd = addDetail('label', null, reviewScoreEndWrapper);
  labelReviewScoreEnd.innerText = '★★★★★';
  reviewScoreEnd.addEventListener('input', (e) => {
    let stars = displayStars(e.target.value);
    labelReviewScoreEnd.innerText = stars;
    reviewScoreEnd.setAttribute('value', e.target.value);
  });

  priceStart.setAttribute('min', cleanNumber(priceSortAscending[0]));
  priceStart.setAttribute(
    'max',
    cleanNumber(priceSortAscending[priceSortAscending.length - 1])
  );
  priceStart.setAttribute('value', cleanNumber(priceSortAscending[0]));
  const labelPriceStart = addDetail('label', null, priceStartWrapper);
  labelPriceStart.innerText = `$${priceStart.value}`;
  priceStart.addEventListener('input', (e) => {
    labelPriceStart.innerText = `$${e.target.value}`;
    priceStart.setAttribute('value', e.target.value);
  });

  priceEnd.setAttribute('min', cleanNumber(priceSortAscending[0]));
  priceEnd.setAttribute(
    'max',
    cleanNumber(priceSortAscending[priceSortAscending.length - 1])
  );
  priceEnd.setAttribute(
    'value',
    cleanNumber(priceSortAscending[priceSortAscending.length - 1])
  );
  const labelPriceEnd = addDetail('label', null, priceEndWrapper);
  labelPriceEnd.innerText = `$${priceEnd.value}`;
  priceEnd.addEventListener('input', (e) => {
    labelPriceEnd.innerText = `$${e.target.value}`;
    priceEnd.setAttribute('value', e.target.value);
  });

  filterButton.addEventListener('click', () => {
    fewoList.innerHTML = '';
    filterFewo(details);
  });
}

// add sort details
function addSortDetails(details) {
  const sortReviewsAscending = details
    .filter((d) => !!d.review_scores_value)
    .sort((a, b) => a.review_scores_value - b.review_scores_value);

  const sortReviewsDescending = details
    .filter((d) => !!d.review_scores_value)
    .sort((a, b) => b.review_scores_value - a.review_scores_value);

  const sortPriceAscending = details
    .filter((d) => !!d.price)
    .sort((a, b) => {
      const priceA = cleanNumber(a.price);
      const priceB = cleanNumber(b.price);
      return priceA - priceB;
    });
  const sortPriceDescending = details
    .filter((d) => !!d.price)
    .sort((a, b) => {
      const priceA = cleanNumber(a.price);
      const priceB = cleanNumber(b.price);
      return priceB - priceA;
    });

  const sortReviewChevron = addDetail(
    'span',
    'material-symbols-outlined',
    sortReviewWrapper
  );
  sortReviewChevron.innerText = 'expand_less';
  sortReviewWrapper.addEventListener('click', () => {
    sortPriceWrapper.classList.remove('toggle');
    sortReviewWrapper.classList.add('toggle');
    if (sortReviewChevron.innerText === 'expand_less') {
      sortReviewChevron.innerText = 'expand_more';
      fewoList.innerHTML = '';
      const length =
        sortReviewsDescending.length > fewoToShow
          ? fewoToShow
          : sortReviewsDescending.length;
      for (let i = 0; i < length; i++) {
        const fewo = sortReviewsDescending[i];
        addOverviewDetail(fewo);
      }
    } else {
      sortReviewChevron.innerText = 'expand_less';
      fewoList.innerHTML = '';
      const length =
        sortReviewsAscending.length > fewoToShow
          ? fewoToShow
          : sortReviewsAscending.length;
      for (let i = 0; i < length; i++) {
        const fewo = sortReviewsAscending[i];
        addOverviewDetail(fewo);
      }
    }
  });

  const sortReviews = addDetail('p', null, sortReviewWrapper);
  sortReviews.innerText = 'Bewertungen';

  const sortPriceChevron = addDetail(
    'span',
    'material-symbols-outlined',
    sortPriceWrapper
  );
  sortPriceChevron.innerText = 'expand_less';
  sortPriceWrapper.addEventListener('click', () => {
    sortReviewWrapper.classList.remove('toggle');
    sortPriceWrapper.classList.add('toggle');
    if (sortPriceChevron.innerText === 'expand_less') {
      sortPriceChevron.innerText = 'expand_more';
      fewoList.innerHTML = '';
      const length =
        sortPriceDescending.length > fewoToShow
          ? fewoToShow
          : sortPriceDescending.length;
      for (let i = 0; i < length; i++) {
        const fewo = sortPriceDescending[i];
        addOverviewDetail(fewo);
      }
    } else {
      sortPriceChevron.innerText = 'expand_less';
      fewoList.innerHTML = '';
      const length =
        sortPriceAscending.length > fewoToShow
          ? fewoToShow
          : sortPriceAscending.length;
      for (let i = 0; i < length; i++) {
        const fewo = sortPriceAscending[i];
        addOverviewDetail(fewo);
      }
    }
  });

  const sortPrice = addDetail('p', null, sortPriceWrapper);
  sortPrice.innerText = 'Preis';
}

// add Overview Details

function addOverviewDetail(fewo) {
  const fewoDiv = addDetail('div', 'fewo-list-item-wrapper', fewoList);

  const fewoImageWrapper = addDetail('div', 'fewo-img-wrapper', fewoDiv);

  const fewoBild = addDetail('img', null, fewoImageWrapper);
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

  for (let i = 0; i < fewo.review_scores_value; i++) {
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
  fewoDetailsLink.setAttribute('href', `./about.html?id=${fewo.id}`);
}

// add filter functionality

function filterFewo(details) {
  const typeCheckbox = document.getElementsByClassName('type-checkbox');
  const checkedCheckboxes = [...typeCheckbox].filter((c) => c.checked);

  const filteredDetails = details
    .filter((d) => d.name.includes(inputSearchName.value))
    .filter(
      (d) =>
        d.neighbourhood_cleansed === selectSearchNeighbourhood.value ||
        !selectSearchNeighbourhood.value
    )
    .filter((d) =>
      checkedCheckboxes.some((c) => c.labels[0].innerText === d.room_type)
    )
    .filter(
      (d) =>
        Math.round(d.review_scores_value) >= reviewScoreStart.value &&
        Math.round(d.review_scores_value) <= reviewScoreEnd.value
    )
    .filter(
      (d) =>
        Math.round(cleanNumber(d.price)) >= priceStart.value &&
        Math.round(cleanNumber(d.price)) <= priceEnd.value
    );

  const length =
    filteredDetails.length > fewoToShow ? fewoToShow : filteredDetails.length;

  sortReviewWrapper.innerHTML = '';
  sortPriceWrapper.innerHTML = '';
  addSortDetails(filteredDetails);
  for (let i = 0; i < length; i++) {
    const fewo = filteredDetails[i];
    addOverviewDetail(fewo);
  }
}
