const dayOfWeekElement = document.getElementById('dayOfWeek');
const utcTimeElement = document.getElementById('utcTime');

function updateDayOfWeek() {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  dayOfWeekElement.textContent = days[currentDay];
}

function updateUTC() {
  const currentUTCTime = Date.now();
  utcTimeElement.textContent = currentUTCTime;
}

updateDayOfWeek();
updateUTC();
