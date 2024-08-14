const radioBoxes = document.querySelectorAll('.radio-box');

radioBoxes.forEach(box => {
    box.addEventListener('click', () => {
        // 모든 박스에서 selected 클래스 제거
        radioBoxes.forEach(b => {
            b.classList.remove('selected');
        });

        // 클릭된 박스에만 selected 클래스 추가
        box.classList.add('selected');

        // 클릭된 박스의 라디오 버튼 선택
        const radioInput = box.querySelector('input[type="radio"]');
        radioInput.checked = true;
    });
});


let totalTime = 24 * 60 * 60; // 24시간을 초로 환산

function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

const timerElement = document.getElementById('timer');

const countdown = setInterval(() => {
    if (totalTime <= 0) {
        clearInterval(countdown);
        timerElement.innerHTML = "퀴즈 마감되었습니다."; // 타이머가 0이 되었을 때 메시지
    } else {
        timerElement.innerHTML = `퀴즈 풀고 200캐시 받기 · 마감까지 ${formatTime(totalTime)}`;
    }
    totalTime -= 1;
}, 1000); // 1000ms = 1초