import { DateTime } from './luxon.js';

const currentDate = document.body.querySelector('p.date');

const date = () => {
  const dt = DateTime.now();
  currentDate.innerText = dt.toLocaleString(DateTime.DATETIME_MED_WITH_SECONDS);
};
const updateDate = () => {
  setInterval(() => date(), 1000);
};

export default updateDate;