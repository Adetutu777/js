let data = [
  {
    principal: 2500,
    time: 1.8,
  },
  {
    principal: 1000,
    time: 5,
  },
  {
    principal: 3000,
    time: 1,
  },
  {
    principal: 2000,
    time: 3,
  },
];

function interestCalculator(principal, time, rate, interest) {
  interestData = [];
  for (let i = 0; i < 4; i++) {
    interest = (data[i].principal * rate * data[i].time) / 100;
    if (data[i].principal >= 2500 && data[i].time > 1 < 3) {
      rate = 3;

      interestData.push({
        principal: data[i].principal,
        time: data[i].time,
        rate: rate,
        interest: interest,
      });
    } else if (data[i].principal >= 2500 && data[i].time >= 3) {
      rate = 4;
      interest = (data[i].principal * rate * data[i].time) / 100;
      interestData.push({
        principal: data[i].principal,
        time: data[i].time,
        rate: rate,
        interest: interest,
      });
    } else if (data[i].principal < 2500 || data[i].time <= 1) {
      rate = 2;
      interest = (data[i].principal * rate * data[i].time) / 100;
      interestData.push({
        principal: data[i].principal,
        time: data[i].time,
        rate: rate,
        interest: interest,
      });
    } else {
      rate = 1;
      interest = (data[i].principal * rate * data[i].time) / 100;
      interestData.push({
        principal: data[i].principal,
        time: data[i].time,
        rate: rate,
        interest: interest,
      });
    }
  }
  console.log(interestData);
  return interestData;
}

interestCalculator(data);
