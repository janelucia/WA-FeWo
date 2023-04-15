// add static information

const week = [
  'Montag',
  'Dienstag',
  'Mittwoch',
  'Donnerstag',
  'Freitag',
  'Samstag',
  'Sonntag',
];

const calendarHead = addDetail('div', 'calendar-head', calendarWrapper);
const headTitle = addDetail('p', null, calendarHead);

const iconWrapper = addDetail('div', 'icons', calendarHead);
const chevronLeft = addDetail('span', 'material-symbols-rounded', iconWrapper);
chevronLeft.setAttribute('id', 'prev');
chevronLeft.innerText = 'chevron_left';

const chevronRight = addDetail('span', 'material-symbols-rounded', iconWrapper);
chevronRight.setAttribute('id', 'next');
chevronRight.innerText = 'chevron_right';

const calendarBody = addDetail('div', 'calendar-body', calendarWrapper);
const weekList = addDetail('ul', 'weeks', calendarBody);

const dayList = addDetail('ul', 'days', calendarBody);

week.map((day) => {
  const dayLi = addDetail('li', null, weekList);
  dayLi.innerText = day.slice(0, 2);
});

// calendar Funktion

function calendarCreate(month) {
  const calendarData = month.calendarData ? month.calendarData : month.data;
  let currYear = month.currYear;
  let currMonth = month.currMonth;
  let firstDateOfMonth = new Date(currYear, currMonth, 1);
  let firstDayIndexOfMonth = firstDateOfMonth.getDay() - 1;

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

  let currentMonth = months[currMonth];
  let lastDateOfCurrMonth = new Date(currYear, currMonth + 1, 0).getDate(); //get last date of the current month
  let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate(); //get last date of the last month

  const dayOverflow = lastDateOfLastMonth - firstDayIndexOfMonth;

  let currMonthDayArr = [];
  let lastMonthDayArr = [];

  for (let i = dayOverflow; i < lastDateOfLastMonth; i++) {
    lastMonthDayArr.push(i + 1);
  }

  for (let i = 1; i <= lastDateOfCurrMonth; i++) {
    currMonthDayArr[i - 1] = i;
  }

  let filterMonthData = calendarData.filter(
    (d) =>
      parseInt(d.date.slice(5, 7)) === currMonth + 1 &&
      parseInt(d.date.slice(0, 5)) === currYear
  );

  let filterLastMonth = calendarData.filter(
    (d) =>
      parseInt(d.date.slice(5, 7)) === currMonth &&
      parseInt(d.date.slice(0, 5)) === currYear
  );

  let filterNextMonth = calendarData.filter(
    (d) =>
      parseInt(d.date.slice(5, 7)) === currMonth + 2 &&
      parseInt(d.date.slice(0, 5)) === currYear
  );

  renderCalendar({
    currYear,
    currMonth,
    currentMonth,
    week,
    currMonthDayArr,
    lastMonthDayArr,
    filterMonthData,
    filterLastMonth,
    filterNextMonth,
    calendarData,
  });
}

// dynamically change the calendar

function renderCalendar(month) {
  // has not every edge case
  chevronLeft.classList.remove('unavailable');
  chevronRight.classList.remove('unavailable');
  if (month.filterLastMonth.length < 28) {
    chevronLeft.classList.add('unavailable');
  } else if (month.filterNextMonth.length < 28) {
    chevronRight.classList.add('unavailable');
  }

  headTitle.innerText = `${month.currentMonth} ${month.currYear}`;

  // Clear previously rendered calendar days
  dayList.innerHTML = '';

  // compare day of calendar array to day of current iteration either for the last month and this month
  month.lastMonthDayArr.map((date) => {
    const dayLi = addDetail('li', 'inactive', dayList);
    const day = addDetail('span', 'day', dayLi);
    const price = addDetail('span', 'price', dayLi);
    day.innerText = date;
    const filterDay = month.filterLastMonth.filter(
      (d) => parseInt(d.date.slice(8, 10)) === date
    );
    if (filterDay[0].available === 'f') {
      dayLi.classList.add('occupied');
    }
    price.innerText = filterDay[0].price;
  });

  month.currMonthDayArr.map((date) => {
    const dayLi = addDetail('li', null, dayList);
    const day = addDetail('span', 'day', dayLi);
    const price = addDetail('span', 'price', dayLi);
    day.innerText = date;
    const filterDay = month.filterMonthData.filter(
      (d) => parseInt(d.date.slice(8, 10)) === date
    );
    if (filterDay[0].available === 'f') {
      dayLi.classList.add('occupied');
    }
    price.innerText = filterDay[0].price;
  });

  // Event listener
  const chevronLeftListener = () => {
    chevronLeft.removeEventListener('click', chevronLeftListener);
    chevronRight.removeEventListener('click', chevronRightListener);
    const currMonth = month.currMonth - 1 >= 0 ? month.currMonth - 1 : 11;
    const currYear = currMonth === 11 ? month.currYear - 1 : month.currYear;
    // prevent clickevent on a month which is not bookable as time has passed
    if (new Date().getMonth() > currMonth) {
      return;
    }
    calendarCreate({ currMonth, currYear, calendarData: month.calendarData });
  };

  const chevronRightListener = () => {
    chevronLeft.removeEventListener('click', chevronLeftListener);
    chevronRight.removeEventListener('click', chevronRightListener);
    if (month.filterNextMonth.length < 28) {
      return;
    }
    const currMonth = month.currMonth + 1 > 11 ? 0 : month.currMonth + 1;
    const currYear = currMonth === 0 ? month.currYear + 1 : month.currYear;
    calendarCreate({ currMonth, currYear, calendarData: month.calendarData });
  };

  chevronLeft.addEventListener('click', chevronLeftListener);

  chevronRight.addEventListener('click', chevronRightListener);
}
