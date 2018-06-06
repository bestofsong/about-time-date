const moment = require("moment-timezone")


console.log(`
date.tz()改变了date的时区，不改变相对时间`)
const detaultMoment = moment("2013-11-18 11:55")
const detaultMoment2 = moment("2013-11-18 11:55")
var a = detaultMoment.tz("Asia/Taipei");
var b = detaultMoment2.tz("America/Toronto");

console.log(detaultMoment.toISOString(), detaultMoment2.toISOString());
console.log(a.format(), b.format());
console.log(a.utc().format(), b.utc().format());
console.log(a.toDate().getTime(), b.toDate().getTime());


console.log(`
“取周一”受时区影响，结果可能相差一周，需要使用正确的市区`)
let bjAfterMondayStr = '2018-06-03T16:30:00.000Z'
let bjMonday = moment(bjAfterMondayStr).tz('Asia/Shanghai').startOf('isoWeek');
let utcMonday = moment(bjAfterMondayStr).utc().startOf('isoWeek');
console.log(bjMonday.format(), utcMonday.format())
console.log(bjMonday.toISOString(), utcMonday.toISOString())

console.log(`
“取周一”受时区影响，结果可能相差一周，需要使用正确的市区`)
const tmp1 = moment(bjAfterMondayStr)
const tmp2 = moment(bjAfterMondayStr)
const tz1 = tmp1.tz('Asia/Shanghai')
const tz2 = tmp2.utcOffset(0)
console.log(tz1.toISOString(), tz2.toISOString())
let bjMonday2 = tz1.startOf('isoWeek');
let utcMonday2 = tz2.startOf('isoWeek');
console.log(bjMonday2.format(), utcMonday2.format())
console.log(bjMonday2.toISOString(), utcMonday2.toISOString())

console.log(`
utcOffset相等的值没有任何影响
`)
const aDate = moment()
console.log('aDate has offset, and format as: ', aDate.utcOffset(), aDate.format())
const aDateWithOffset = aDate.utcOffset(8)
console.log('aDateWithOffset has format: ', aDateWithOffset.format())
