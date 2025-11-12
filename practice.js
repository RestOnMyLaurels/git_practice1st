// 더미 데이터
const labels = ["여가", "식비", "교통비", "기타"];
const rawData = [310000, 65000, 80000, 45000]; // 금액 단위 (원)

// 차트 초기화
const ctx = document.getElementById("categoryChart").getContext("2d");

new Chart(ctx, {
  type: "doughnut",
  data: {
    labels,
    datasets: [{
      data: rawData,
      borderWidth: 0,
      backgroundColor: ["#82b1ff", "#a3e635", "#fbbf24", "#d8b4fe"],
      hoverOffset: 6
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "60%",
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: { boxWidth: 12, usePointStyle: true }
      },
      tooltip: {
        callbacks: {
          label: (ctx) => {
            const value = ctx.raw.toLocaleString(); // 310,000 → 310,000원
            const total = ctx.dataset.data.reduce((a, b) => a + b, 0);
            const percent = ((ctx.raw / total) * 100).toFixed(1);
            return `${ctx.label}: ${value}원 (${percent}%)`;
          }
        }
      }
    }
  }
});
