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

const calendarWrapper = addDetail('div', 'calendar-wrapper', calendarAndPrice);
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
  let lastDateOfCurrMonth = new Date(currYear, currMonth + 1, 0).getDate(); //get last date of the month
  let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();

  const dayOverflow = lastDateOfLastMonth - firstDayIndexOfMonth;

  let currMonthDayArr = [];
  let lastMonthDayArr = [];

  for (let i = dayOverflow; i < lastDateOfLastMonth; i++) {
    lastMonthDayArr.push(i + 1);
  }

  for (let i = 1; i <= lastDateOfCurrMonth; i++) {
    currMonthDayArr[i - 1] = i;
  }

  renderCalendar({
    currYear,
    currMonth,
    currentMonth,
    week,
    currMonthDayArr,
    lastMonthDayArr,
  });
}

// dynamically change the calendar

function renderCalendar(month) {
  headTitle.innerText = `${month.currentMonth} ${month.currYear}`;

  // Clear previously rendered calendar days
  dayList.innerHTML = '';

  month.lastMonthDayArr.map((date) => {
    const dayLi = addDetail('li', 'inactive', dayList);
    dayLi.innerText = date;
  });

  month.currMonthDayArr.map((date) => {
    const dayLi = addDetail('li', null, dayList);
    dayLi.innerText = date;

    if (10 <= date && date <= 20) {
      dayLi.classList.add('occupied');
      if (date === 10) {
        dayLi.classList.add('occupied-first');
      } else if (date === 20) {
        dayLi.classList.add('occupied-last');
      }
    }
  });

  // Event listener
  const chevronLeftListener = () => {
    chevronLeft.removeEventListener('click', chevronLeftListener);
    chevronRight.removeEventListener('click', chevronRightListener);
    const currMonth = month.currMonth - 1 >= 0 ? month.currMonth - 1 : 11;
    const currYear = currMonth === 11 ? month.currYear - 1 : month.currYear;
    calendarCreate({ currMonth, currYear });
  };

  const chevronRightListener = () => {
    chevronLeft.removeEventListener('click', chevronLeftListener);
    chevronRight.removeEventListener('click', chevronRightListener);
    const currMonth = month.currMonth + 1 > 11 ? 0 : month.currMonth + 1;
    const currYear = currMonth === 0 ? month.currYear + 1 : month.currYear;
    calendarCreate({ currMonth, currYear });
  };

  chevronLeft.addEventListener('click', chevronLeftListener);

  chevronRight.addEventListener('click', chevronRightListener);
}
