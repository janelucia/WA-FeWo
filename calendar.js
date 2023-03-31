// calendar Funktion

function calendar(selectMonth) {
  let date = new Date();
  let currYear = date.getFullYear();
  let currMonth = selectMonth ? selectMonth : date.getMonth();

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

  const week = [
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
    'Sonntag',
  ];

  let currentMonth = months[currMonth];
  let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate(); //get last date of the month

  let dayArr = [];

  for (let i = 1; i < lastDateOfMonth; i++) {
    dayArr[i - 1] = i;
  }

  return { currentYear: currYear, currMonth, currentMonth, week, dayArr };
}

// calendar render

function renderCalendar() {
  const calendarObj = calendar();

  const calendarWrapper = addDetail(
    'div',
    'calendar-wrapper',
    calendarAndPrice
  );
  const calendarHead = addDetail('div', 'calendar-head', calendarWrapper);
  const headTitle = addDetail('p', null, calendarHead);
  headTitle.innerText = `${calendarObj.currentMonth} ${calendarObj.currentYear}`;
  const iconWrapper = addDetail('div', 'icons', calendarHead);
  const chevronLeft = addDetail(
    'span',
    'material-symbols-rounded',
    iconWrapper
  );
  chevronLeft.setAttribute('id', 'prev');
  chevronLeft.innerText = 'chevron_left';
  const chevronRight = addDetail(
    'span',
    'material-symbols-rounded',
    iconWrapper
  );
  chevronRight.setAttribute('id', 'next');
  chevronRight.innerText = 'chevron_right';

  const calendarBody = addDetail('div', 'calendar-body', calendarWrapper);
  const weekList = addDetail('ul', 'weeks', calendarBody);
  calendarObj.week.map((day) => {
    const dayLi = addDetail('li', null, weekList);
    dayLi.innerText = day.slice(0, 2);
  });

  const dayList = addDetail('ul', 'days', calendarBody);
  calendarObj.dayArr.map((date) => {
    const dayLi = addDetail('li', null, dayList);
    dayLi.innerText = date;
  });
}
