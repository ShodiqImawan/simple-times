let second = 0
let minute = 0
let intervalId = null

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
    
    console.log(`${minute}:${second}`);
  }, 1000);
}

function timeStop () {
  clearInterval(intervalId);
  intervalId = null;
  console.log(`Waktu di hentikan pada ${minute}:${second}`)
  return
}

function resetTime () {
  timeStop();
  console.log(`Waktu terakhir sebelum di reset ${minute}:${second}`);
  
  setTimeout(() => {
    console.log(`Waktu sedang di reset`);
    setTimeout(() => {
      second = 0;
      minute = 0;
      console.log(`Waktu berhasil di reset!`)
    }, 3000);
  }, 2000);
  return
}