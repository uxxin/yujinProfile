function adjustProjectTextHeights() {
  const projectTexts = document.querySelectorAll(".project-text");
  let maxHeight = 0;

  // Step 1: 기존 높이 초기화
  projectTexts.forEach((el) => {
    el.style.height = "auto";
  });

  // Step 2: 가장 높은 요소의 높이 측정
  projectTexts.forEach((el) => {
    const height = el.offsetHeight;
    if (height > maxHeight) {
      maxHeight = height;
    }
  });

  // Step 3: 모든 요소에 최대 높이 적용
  projectTexts.forEach((el) => {
    el.style.height = maxHeight + "px";
  });
}

function matchProjectHeights() {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    const info = card.querySelector(".project-info");
    const image = card.querySelector(".project-image");

    // 높이 강제로 설정 (auto 초기화 후 측정)
    image.style.height = "auto";
    const infoHeight = info.offsetHeight;
    image.style.height = infoHeight + "px";
  });
}

// DOM 로드 시 실행
window.addEventListener("DOMContentLoaded", adjustProjectTextHeights);
// 브라우저 크기 변경 시에도 다시 실행 (반응형 대응)
window.addEventListener("resize", adjustProjectTextHeights);

window.addEventListener("DOMContentLoaded", () => {
  adjustProjectTextHeights();
  matchProjectHeights();
});

window.addEventListener("resize", () => {
  adjustProjectTextHeights();
  matchProjectHeights();
});
