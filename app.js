// Selectors
const detailsHeader = document.querySelector('.header-details');
const detailsButton = document.querySelector('.details-btn');
const detailsMain = document.querySelector('.main-details');

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
}

// richtige about Seite öffnen
function getFewoDetails(e) {
  let params = new URL(document.location).searchParams;
  let id = parseInt(params.get('id'));
  const details = inputDetails.fewos.find((f) => f.id === id);
  return details;
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

  const fewoHeader = addDetail('h1', null, detailsMain);
  fewoHeader.innerText = details.name;

  const imgDiv = addDetail('div', 'img-wrapper', detailsMain);
  const imgFewo = addDetail('img', 'fewo-img', imgDiv);
  imgFewo.setAttribute('src', details.img);
  imgFewo.setAttribute('alt', details.alt);

  const characteristicsDiv = addDetail(
    'div',
    'characteristics-wrapper',
    detailsMain
  );
  const characteristicsArticle = addDetail('article', null, characteristicsDiv);
  //TODO: characteristicsArticle.innerText = details.characteristics;

  const descriptionDiv = addDetail('div', 'description-wrapper', detailsMain);
  const descriptionArticle = addDetail('article', null, descriptionDiv);
  descriptionArticle.innerText = details.description;

  detailsHeader.appendChild(fewoHeader);
}
