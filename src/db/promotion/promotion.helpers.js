import MONTHS from '../utils/months';

let today = new Date();

let currentEventTimeLeft = (duration, eventStart) => {
  /* Last day of event */
  let lastDay = getLastDay(duration, eventStart);
  /* If event ends in a month later than current month, calculate extra month days */
  let extraDays = calcExtraDays(duration, eventStart);
  /* Number of days in current month before promotion end. */
  let timeLeft = new Date(lastDay).getDate() - new Date(today).getDate();
  /* sum remaining days */
  return timeLeft + extraDays;
}

let getLastDay = (duration, eventStart) => {
  /* add duration days to event start date to find last day of event */
  let startDate = eventStart;
  return startDate.setDate(eventStart.getDate() + duration);
}

let calcExtraDays = (duration, eventStart) => {
  /* Get the month that the event starts */
  let firstDayMonth = eventStart.getMonth();
  /* Get the month of the last day of event */
  let lastDay = getLastDay(duration, eventStart);

  let lastDayMonth = new Date(lastDay).getMonth();
  /* If event end month is later than current month */
  let extraMonthDays = 0;
  if (lastDayMonth > firstDayMonth) {
    /* Itterate extra month times and add to extra days */
    extraMonthDays = loopExtraMonthDays(lastDayMonth, firstDayMonth);
  }

  return extraMonthDays;
}

let loopExtraMonthDays = (lastDayMonth, firstDayMonth) => {
  /* Extra Days */
  let extraDays = 0;
  /* Calculate number of extra months */
  let extraMonths = lastDayMonth - firstDayMonth;
  for(let i = 0; i < extraMonths; i++) {
    /* if itteration month !== the last mongth && is not in the next year */
    if (firstDayMonth + i !== lastDayMonth && firstDayMonth + i < 13) {
      extraDays += calcExtraMonthDays(firstDayMonth + i);
    }
    /* if itteration month is in the next year */
    else if (firstDayMonth + i > 12) {
      /* subtract 12 from itteration month to get correct month */
      extraDays += calcExtraMonthDays(((firstDayMonth + i) - 12));
    }
  }
  return extraDays;
}

let calcExtraMonthDays = (firstDayMonth) => {
  /* Refer to MONTHS map to get number of days in month */
  let daysInFirstMonth = MONTHS[firstDayMonth].daysInMonth;
  return daysInFirstMonth - today.getDate();
}

export default calcTimeLeft;
