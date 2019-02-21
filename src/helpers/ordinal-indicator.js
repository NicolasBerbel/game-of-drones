export default function ordinalIndicatorOf(number) {
  const j = number % 10,
    k = number % 100;

  let ordinalIndicator = 'th';

  if (j === 1 && k !== 11) ordinalIndicator = 'st';
  if (j === 2 && k !== 12) ordinalIndicator = 'nd';
  if (j === 3 && k !== 13) ordinalIndicator = "rd";

  return `${number}${ordinalIndicator}`;
}