// const listingCsvUrl =
//   'https://wa.pages.iue.fh-kiel.de/i2-schoenfeld-koehrsen/csv/listings.csv.gz';
// const calendarCsvUrl =
//   'https://wa.pages.iue.fh-kiel.de/i2-schoenfeld-koehrsen/csv/calendar.csv.gz';
// const reviewsCsvUrl =
//   'https://wa.pages.iue.fh-kiel.de/i2-schoenfeld-koehrsen/csv/reviews.csv.gz';

const listingCsvUrl =
  'http://data.insideairbnb.com/united-states/or/salem-or/2023-03-26/data/listings.csv.gz';
const calendarCsvUrl =
  'http://data.insideairbnb.com/united-states/or/salem-or/2023-03-26/data/calendar.csv.gz';
const reviewsCsvUrl =
  'http://data.insideairbnb.com/united-states/or/salem-or/2023-03-26/data/reviews.csv.gz';

async function csvData(url) {
  const response = await fetch(url);
  const blob = await response.blob();
  const arrayBuffer = await blob.arrayBuffer();
  const csvData = pako.inflate(arrayBuffer, { to: 'string' });
  const jsonData = Papa.parse(csvData, { header: true });
  return jsonData;
}
