const listingCsvUrl =
  'http://data.insideairbnb.com/the-netherlands/north-holland/amsterdam/2023-03-09/visualisations/listings.csv';
const calendarCsvUrl =
  'http://data.insideairbnb.com/the-netherlands/north-holland/amsterdam/2023-03-09/data/calendar.csv.gz';
const reviewsCsvUrl =
  'http://data.insideairbnb.com/the-netherlands/north-holland/amsterdam/2023-03-09/data/reviews.csv.gz';

async function csvData(url) {
  const response = await fetch(url);
  const readCsvData = await response.text();
  return readCsvData;
}

const listings = csvData(listingCsvUrl);

const listingJson = Papa.parse(listings);

console.log(listings.then((l) => JSON.stringify(l.data)));
