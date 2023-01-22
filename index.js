/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const createEmployeeRecord = function (array) {
    const object = {firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return object
}

const createEmployeeRecords = function (arrayOfArrays) {
    const arrayOfObjects = arrayOfArrays.map(createEmployeeRecord)
    return arrayOfObjects
}

const createTimeInEvent = function (dateStamp) {
    const miniArray = dateStamp.split(" ")
    const hourInt = parseInt(miniArray[1])
    const newObjectIn = {type: "TimeIn",
    hour: hourInt,
    date: miniArray[0]
    }
    this.timeInEvents.push(newObjectIn)
    return this
    
}

const createTimeOutEvent = function (dateStamp) {
    const miniArray = dateStamp.split(" ")
    const hourInt = parseInt(miniArray[1])
    const newObjectOut = {type: "TimeOut",
    hour: hourInt,
    date: miniArray[0]
    }
    this.timeOutEvents.push(newObjectOut)
    return this
}

const hoursWorkedOnDate = function (dateStamp) {
    //console.log(this.timeInEvents)
    const timeInEvent = this.timeInEvents.find(event => dateStamp == event.date)
    const timeOutEvent = this.timeOutEvents.find(event => dateStamp == event.date)
    const hoursInt = (timeOutEvent.hour-timeInEvent.hour)/100
    return hoursInt
}

const wagesEarnedOnDate = function (dateStamp) {
    //     // const hoursInt = (this.timeOutEvents[0].hour-this.timeInEvents[0].hour)/100
        const hoursInt = hoursWorkedOnDate.call(this, dateStamp)
        const wagesEarned = hoursInt * this.payPerHour
        return wagesEarned

}

const allWagesFor = function () {
    //console.log(this)
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const findEmployeeByFirstName2 = function (srcArray, nameString) {
for (let i=0; i<srcArray.length; i++) {
if (srcArray[i].firstName == nameString) {
    return srcArray[i]
}
else {
    return undefined
}
}
}

const findEmployeeByFirstName = function (srcArray, nameString) {
    //const findName = srcArray.find(event => nameString == event.firstName)
    const findName = srcArray.find(
        function(event) {
            return nameString == event.firstName
        }
    )
    // return srcArray.find(
    //     function(event) {
    //         return nameString == event.firstName
    //     }
    // )
    return findName
}

const calculatePayroll = function (array) {
    //console.log(array)
    // allWagesFor.call(this, array)
    // console.log(wages)
    // return wages
    
    
    const sumPayroll = array.reduce(
        (accumulator, employeeRecord) => accumulator + allWagesFor.call(employeeRecord),0);
    console.log(JSON.stringify(sumPayroll))
        return sumPayroll
}

// allWagesFor uses array contained in wagesEarnedOnDate
//want to do all