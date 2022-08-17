class Store {
  constructor(schedule) {
    this.schedule = schedule;
  }

  /**
   * This function should take in a day of the week, and an hour of the day and return
   * a boolean stating whether the store is open for that time. Hour must be 0-24 and is representative
   * of the hours in that day of the week. Unlike the store_hours structure above, if you wanted
   * to see if a store was open Friday night at 2am (technically saturday), you would need to pass in
   * saturday - 2am to this function (e.g. isOpen(6, 2))
   **/


  isOpen(day, hour) {
    // TODO: Implement this

    // if (day === 7) {

    // }
    let previousDay = day - 1;
    if (previousDay === 0) previousDay = this.schedule.length
    for (let i = 0; i < this.schedule.length; i++) {
      let currentDay = this.schedule[i]
      if (currentDay.day === day) {
        for (let j = 0; j < currentDay.hours.length; j++) {
          let hourStart = currentDay.hours[j][0]
          let hourEnd = currentDay.hours[j][1];
          if (hourEnd < hourStart) {
            hourEnd = hourEnd + 24
          }
          if (hourStart <= hour && hourEnd > hour) return true
        }
      } else if (currentDay.day === previousDay) {

        for (let j = 0; j < currentDay.hours.length; j++) {
          let hourStart = currentDay.hours[j][0]
          let hourEnd = currentDay.hours[j][1];

          if (hourEnd < hourStart) {
            hourEnd = hourEnd + 24
            if (hourStart <= hour + 24 && hourEnd > hour + 24) return true;
          }
        }
      }
    }

    return false;
  }
}

function evaluate() {
  var tests = [
    [3, 6, false],
    [3, 10, true],
    [3, 18.5, false],
    [3, 19, true],
    [3, 23.99, true],
    [4, 0, true],
    [4, 2, true],
    [4, 3, false],
    [6, 2, true],
    [6, 12, true],
    [1, 1, true],
  ];

  /**
   * store_hours is a data structure representing the days of week and hours of day the store is open.
   * This data is stored in a format where each entry in the array is a day of the week, indicated by the day property,
   * and the hours the store is open for that day represented by the hours property.
   * Days go from 0 to 6 (Sun to Sat). Hours go from 0 to 24.
   * e.g. day: 1 means monday. hours: [ [9,12]] means from 9am to 12 noon (9:00 to 11:59:59 999.99ms)
   * These hours are stored in a human readable format, however, meaning that they can "wrap around".
   * E.g. day: 1, hours: [[19,2]] indicates the store is open Monday from 7pm to 2am.

  */
  const storeHours = [
    {
      day: 1,
      hours: [
        [9, 12],
        [13, 18],
        [19, 2]
      ]
    }, // Monday, 9-12pm, 1-6pm, 7pm - 2am
    {
      day: 2,
      hours: [
        [9, 12],
        [13, 18],
        [19, 2]
      ]
    }, // Tuesday
    {
      day: 3,
      hours: [
        [1, 4],
        [9, 12],
        [19, 3]
      ]
    }, // Wednesday
    {
      day: 5,
      hours: [
        [9, 12],
        [13, 18],
        [19, 4]
      ]
    }, // Friday
    {
      day: 6,
      hours: [
        [10, 17],
        [19, 4]
      ]
    }, // Saturday
    {
      day: 7,
      hours: [
        [18, 2]
      ]
    } // Sunday
  ];
  const store = new Store(storeHours);

  console.log("Evaluating... ");
  for (var test of tests) {
    var dow = test[0];
    var hour = test[1];
    var expectedResult = test[2];
    console.log(
      store.isOpen(dow, hour) === expectedResult
        ? `success: day ${dow} - hour ${hour}`
        : `failure: day ${dow} - hour ${hour}`
    );
  }
}

function app() {
  evaluate();
}

app();

