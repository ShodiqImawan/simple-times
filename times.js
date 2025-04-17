let second = 0
let minute = 0
let intervalId = null

function fixedTime (tofixed) {
  if (tofixed < 10) {
    return `0${tofixed}`
  }
  return tofixed
}

function displayTime () {
  return `${fixedTime(minute)}:${fixedTime(second)}`
}

function timeStart () {
  
  if (intervalId !== null) {
    console.log(`Waktu sudah berjalan!`)
    return
  }
  
  intervalId = setInterval(() => {
    second += 1;
    
    if (second == 60) {
      minute += 1;
      second = 0;
    }
    
    console.log(`${displayTime()}`);
  }, 1000);
}

function timeStop () {
  clearInterval(intervalId);
  intervalId = null;
  console.log(`Waktu di hentikan pada ${displayTime()}`);
  return
}

function resetTime () {
  timeStop();
  console.log(`Waktu terakhir sebelum di reset ${displayTime()}`);
  second = 0;
  minute = 0;
  console.log(`Waktu berhasil di reset!`)
  return
}