export function main019() {
  const startDate = new Date(1901, 0, 1);
  const endDate = new Date(2000, 11, 31);

  let count = 0;
  for (const date = startDate; date <= endDate; incDate(date)) {
    if (date.getDay() === 0 && date.getDate() === 1) {
      count++;
    }
  }

  return count;
}

function incDate(date: Date) {
  return date.setDate(date.getDate() + 1);
}
