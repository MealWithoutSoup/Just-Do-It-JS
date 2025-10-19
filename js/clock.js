const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
    // 위의 코드를 padStart를 사용하여 더 간단하게 표현
    // padStart(자리수, "채울 문자열")
  clock.innerText = `${hours}:${minutes}:${seconds}`;

    // padStart는 문자열에서만 사용 가능
}

getClock();
setInterval(getClock, 1000);