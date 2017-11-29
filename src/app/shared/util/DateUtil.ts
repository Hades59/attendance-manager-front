export class DateUtil {
  constructor() { }

  transform(date) {
    `${date.dayOfMonth}/${date.monthValue}/${date.year}`
  }
}