// calendar Funktion

function calendarCreate(selectMonth) {
  let date = new Date();
  let currYear = date.getFullYear();
  let currMonth = selectMonth ? selectMonth : date.getMonth();
  let lastMonth = selectMonth ? selectMonth : date.getMonth() - 1;
  let nextMonth = selectMonth ? selectMonth : date.getMonth() + 1;
  let firstDateOfMonth = new Date(currYear, currMonth, 1);
  let firstDayIndexOfMonth = firstDateOfMonth.getDay() - 1;

  console.log(lastMonth);
  console.log(nextMonth);

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
  let lastDateOfCurrMonth = new Date(currYear, currMonth + 1, 0).getDate(); //get last date of the month
  let lastDateOfLastMonth = new Date(currYear, lastMonth + 1, 0).getDate();

  console.log('last day of last month' + lastDateOfLastMonth);
  console.log('last day of curr month' + lastDateOfCurrMonth);
  console.log(firstDayIndexOfMonth);

  const dayOverflow = lastDateOfLastMonth - firstDayIndexOfMonth;

  let currMonthDayArr = [];
  let lastMonthDayArr = [];

  for (let i = dayOverflow; i < lastDateOfLastMonth; i++) {
    lastMonthDayArr.push(i + 1);
  }

  console.log(lastMonthDayArr);

  for (let i = 1; i <= lastDateOfCurrMonth; i++) {
    currMonthDayArr[i - 1] = i;
  }

  return {
    currentYear: currYear,
    currMonth,
    currentMonth,
    week,
    currMonthDayArr,
    lastMonthDayArr,
  };
}

// calendar render

function renderCalendar() {
  const calendarObj = calendarCreate();

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
  calendarObj.lastMonthDayArr.map((date) => {
    const dayLi = addDetail('li', 'inactive', dayList);
    dayLi.innerText = date;
  });
  calendarObj.currMonthDayArr.map((date) => {
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
}
