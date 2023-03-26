function minimumTime(time, totalTrips) {
    const key = time.reduce((acc, cur) => acc + 1 / cur, 0);
    let minTime = Math.ceil(totalTrips / key);
    let maxTime = Math.min(...time) * totalTrips;
    while (true) {
        let t = Math.floor((minTime + maxTime) / 2);
        if (t === minTime) {
            if (calTrip(time, totalTrips, t)) {
                return minTime;
            }
            else {
                return maxTime;
            }
        }
        if (calTrip(time, totalTrips, t)) {
            maxTime = t;
        }
        else {
            minTime = t;
        }
    }
}
;
const calTrip = (time, totalTrips, targetTime) => {
    const trips = time.reduce((acc, cur) => acc + Math.floor(targetTime / cur), 0);
    return trips >= totalTrips;
};
const case1 = { time: [1, 2, 3], totalTrips: 5 };
console.log(minimumTime(case1.time, case1.totalTrips));
//# sourceMappingURL=MinimumTimeTrip.js.map