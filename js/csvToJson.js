const listingCsvUrl =
  'https://wa.pages.iue.fh-kiel.de/inside-airbnb-data/Amsterdam/listings.csv.gz';
const calendarCsvUrl =
  'https://wa.pages.iue.fh-kiel.de/inside-airbnb-data/Amsterdam/calendar.csv.gz';
const reviewsCsvUrl =
  'https://wa.pages.iue.fh-kiel.de/inside-airbnb-data/Amsterdam/reviews.csv.gz';

async function csvData(url) {
  const response = await fetch(url);
  const blob = await response.blob();
  const arrayBuffer = await blob.arrayBuffer();
  const csvData = pako.inflate(arrayBuffer, { to: 'string' });
  const jsonData = Papa.parse(csvData, { header: true });
  console.log(jsonData);
  return jsonData;
}
