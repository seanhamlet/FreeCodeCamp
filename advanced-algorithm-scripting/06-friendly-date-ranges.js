/* Advanced Algorithm: Friendly Date Ranges

Convert a date range consisting of two dates formatted as YYYY-MM-DD into a 
more readable format.

The friendly display should use month names instead of numbers and ordinal 
dates instead of cardinal (1st instead of 1).

Do not display information that is redundant or that can be inferred by the 
user: if the date range ends in less than a year from when it begins, do not 
display the ending year.

Additionally, if the date range begins in the current year (i.e. it is currently
 the year 2016) and ends within one year, the year should not be displayed at 
 the beginning of the friendly range.

If the range ends in the same month that it begins, do not display the ending 
year or month.

Examples:

makeFriendlyDates(["2016-07-01", "2016-07-04"]) should return ["July 1st","4th"]

makeFriendlyDates(["2016-07-01", "2018-07-04"]) should return 
["July 1st, 2016", "July 4th, 2018"].

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Here are some helpful hints:

String.prototype.split()
String.prototype.substr()
parseInt()

Written by: Sean M Hamlet
https://www.freecodecamp.com/seanmhamlet
*/

function makeFriendlyDates(arr) {
  
  // Create useful month variable
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',                       'September', 'October', 'November', 'December'];
  
  // Convert date to UTC object
  function convertDate(str) {
    str = str.split('-');
    var utcDate = new Date(Date.UTC(str[0], str[1]-1, str[2]));
    return utcDate;
  }
  
  // Add appropriate endings to day
  function dateEnding(day) {
    switch (day) {
      case 1:
      case 21:
      case 31:
        return day + 'st';
      case 2:
      case 22:
        return day + 'nd';
      case 3:
      case 23:
        return day + 'rd';
      default:
        return day + 'th';
    }
  }
  
  // Month Diff
  function monthDiff(date1,date2) {
    var month1 = date1.getUTCFullYear() * 12 + date1.getUTCMonth();
    var month2 = date2.getUTCFullYear() * 12 + date2.getUTCMonth();
    return month2 - month1;
  }
  
  
  function getDateText(date1,date2) {
    // Same day
    if (date1.getTime() === date2.getTime()) {
      return [months[date1.getUTCMonth()] + ' ' + dateEnding(date1.getUTCDate()) + ', ' + date1.getUTCFullYear()];
    }
    // Same month and same year
    if (date1.getUTCFullYear() === date2.getUTCFullYear() && date1.getUTCMonth() === date2.getUTCMonth()){
      return [months[date1.getUTCMonth()] + ' ' + dateEnding(date1.getUTCDate()), dateEnding(date2.getUTCDate())];
      }
    
    // Diff month and same year
    if (monthDiff(date1,date2) < 12 && date1.getUTCFullYear() === date2.getUTCFullYear()){
      return [months[date1.getUTCMonth()] + ' ' + dateEnding(date1.getUTCDate()) + ', ' + date1.getUTCFullYear(), months[date2.getUTCMonth()] + ' ' + dateEnding(date2.getUTCDate())];
      }

    // Diff month and different year but less than 12 months apart
    if (monthDiff(date1,date2) < 12) {
        return [months[date1.getUTCMonth()] + ' ' + dateEnding(date1.getUTCDate()), months[date2.getUTCMonth()] + ' ' + dateEnding(date2.getUTCDate())];
      }
    
    // Same month different year, but less than 12 months apart
    if (monthDiff(date1,date2) <=12 && date1.getUTCDate()-date2.getUTCDate() > 0) {
        return [months[date1.getUTCMonth()] + ' ' + dateEnding(date1.getUTCDate()) + ', ' + date1.getUTCFullYear(), months[date2.getUTCMonth()] + ' ' + dateEnding(date2.getUTCDate())];
      }
    
    // Diff month and different year but > 12 months apart
    return [months[date1.getUTCMonth()] + ' ' + dateEnding(date1.getUTCDate()) + ', ' + date1.getUTCFullYear(), months[date2.getUTCMonth()] + ' ' + dateEnding(date2.getUTCDate()) + ', ' + date2.getUTCFullYear()];
  }
  
  
  var sDate = convertDate(arr[0]);
  var eDate = convertDate(arr[1]);
  
  return getDateText(sDate,eDate);
}

makeFriendlyDates(["2017-03-01", "2017-05-05"]);
