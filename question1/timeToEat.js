function timeToEat(timeStr) {
    const lunchTime = [11, 60]
    const breakfastTime = [23, 53]
    const breakfastTime2 = [6, 60]
    const dinnerTime = [18, 60]
    let index = 0
    const timeArr = timeStr.split(":")
    if (timeStr.includes("PM")) {
        timeArr[index] = +(Number(timeArr[index]) + 12)
    }
    const timeAr= timeArr.map((item) => {
        if (Number(item) >= 7 && Number(item) < 12) {
            return `${lunchTime[index++] - Number(item)} `
        }
        if (Number(item) >= 12 && Number(item) < 19) {
            return `${dinnerTime[index++] - Number(item)} `
        }
        if (Number(item) >= 19 || Number(item) < 24) {

            return `${breakfastTime[index++] - Number(item) + 7} `
        }
        if (item < 7) {
            return `${breakfastTime2[index++] - Number(item)} `
        }

    }).slice(0,2)
    if (timeAr[1] === 60) {
        timeAr[0] + 1
        timeAr[1] = 0
        return timeAr
    }
    else {
        return timeAr
    }
}
const timeNow = new Date()
console.log(timeToEat(timeNow.toLocaleTimeString()))



