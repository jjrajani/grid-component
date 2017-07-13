/* Calculate Age of Living */
const calcLivingAge = (birthday) => {
  const oneYear = 31557600000;
  let today = new Date();

  return parseFloat(((today - birthday) / oneYear).toFixed(2));
}

/* Calculate Age of Deceased */
const calcDeceasedAge = (birthday, deathday) => {
  const oneYear = 31557600000;

  return parseFloat(((deathday - birthday) / oneYear).toFixed(2));
}

/* Calculate Months*/
const calcMonths = (years) => {
  /* get only the decimal points from year, to extrapolate months */
  let decimal = parseFloat(years.toString().slice(-3));

  return Math.floor(decimal * 12);
}

/* Calculate Age */
const calcAge = (birthDate, deathDate) => {

  let age;

  let birthday = new Date(birthDate);
  let deathday = new Date(deathDate);
  /* if age is a string then the animal is still living */
  age = (typeof deathDate === "string" || deathDate === null || deathDate === undefined) ?
    calcLivingAge(birthday) /* if animal is still living */
  : calcDeceasedAge(birthday, deathday) /* if animal has died */

  return {
    years: Math.floor(age),
    months: calcMonths(age)
  }
}

export default calcAge;
