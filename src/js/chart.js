// import Chart from "chart.js/auto";

// document.addEventListener("DOMContentLoaded", function () {
//   const chartData = {
//     semua: {
//       total: 620.0,
//       data: [250, 70, 60, 55, 45, 50, 90],
//       labels: [
//         "Bandung",
//         "Bali",
//         "Jogja",
//         "Surabaya",
//         "Malang",
//         "Sumatra Utara",
//         "Lainnya",
//       ],
//       colors: [
//         "#FFCE56",
//         "#36A2EB",
//         "#FF6384",
//         "#4BC0C0",
//         "#9966FF",
//         "#FF9F40",
//         "#C9CBCF",
//       ],
//     },
//     sebelum: {
//       total: 700.0,
//       data: [300, 90, 80, 70, 60, 50, 50],
//       labels: [
//         "Bandung",
//         "Bali",
//         "Jogja",
//         "Surabaya",
//         "Malang",
//         "Sumatra Utara",
//         "Lainnya",
//       ],
//       colors: [
//         "#FFCE56",
//         "#36A2EB",
//         "#FF6384",
//         "#4BC0C0",
//         "#9966FF",
//         "#FF9F40",
//         "#C9CBCF",
//       ],
//     },
//     saatini: {
//       total: 680.0,
//       data: [280, 75, 65, 60, 55, 45, 100],
//       labels: [
//         "Bandung",
//         "Bali",
//         "Jogja",
//         "Surabaya",
//         "Malang",
//         "Sumatra Utara",
//         "Lainnya",
//       ],
//       colors: [
//         "#FFCE56",
//         "#36A2EB",
//         "#FF6384",
//         "#4BC0C0",
//         "#9966FF",
//         "#FF9F40",
//         "#C9CBCF",
//       ],
//     },
//     sesudah: {
//       total: 672.0,
//       data: [300, 65, 62, 53, 50, 50, 192],
//       labels: [
//         "Bandung",
//         "Bali",
//         "Jogja",
//         "Surabaya",
//         "Malang",
//         "Sumatra Utara",
//         "Lainnya",
//       ],
//       colors: [
//         "#FFCE56",
//         "#36A2EB",
//         "#FF6384",
//         "#4BC0C0",
//         "#9966FF",
//         "#FF9F40",
//         "#C9CBCF",
//       ],
//     },
//   };

//   const ctx = document.getElementById("expenseChart").getContext("2d");
//   let expenseChart = new Chart(ctx, {
//     type: "doughnut",
//     data: {
//       labels: chartData.sesudah.labels,
//       datasets: [
//         {
//           data: chartData.sesudah.data,
//           backgroundColor: chartData.sesudah.colors,
//           hoverBackgroundColor: chartData.sesudah.colors,
//         },
//       ],
//     },
//     options: {
//       responsive: true,
//       maintainAspectRatio: false,
//       plugins: {
//         legend: {
//           display: false,
//         },
//       },
//     },
//   });

//   const barCtx = document.getElementById("barChart").getContext("2d");
//   const barLabels = chartData.sesudah.labels;
//   const barData = {
//     labels: barLabels,
//     datasets: [
//       {
//         label: "Monthly Expenses",
//         data: chartData.sesudah.data,
//         backgroundColor: chartData.sesudah.colors.map((color) =>
//           color.replace(/0.2\)/, "0.6)")
//         ),
//         borderColor: chartData.sesudah.colors,
//         borderWidth: 1,
//       },
//     ],
//   };
//   let barChart = new Chart(barCtx, {
//     type: "bar",
//     data: barData,
//     options: {
//       scales: {
//         y: {
//           beginAtZero: true,
//         },
//       },
//     },
//   });

//   function updateCharts(month) {
//     const data = chartData[month];

//     // Update Donut Chart
//     expenseChart.data.labels = data.labels;
//     expenseChart.data.datasets[0].data = data.data;
//     expenseChart.data.datasets[0].backgroundColor = data.colors;
//     expenseChart.data.datasets[0].hoverBackgroundColor = data.colors;
//     expenseChart.update();

//     // Update Bar Chart
//     barChart.data.labels = data.labels;
//     barChart.data.datasets[0].data = data.data;
//     barChart.data.datasets[0].backgroundColor = data.colors.map((color) =>
//       color.replace(/0.2\)/, "0.6)")
//     );
//     barChart.data.datasets[0].borderColor = data.colors;
//     barChart.update();

//     // Update Total Amount
//     document.getElementById("totalAmount").innerText = data.total.toFixed(2);

//     // Update Expense List
//     const expenseList = document.getElementById("expenseList");
//     expenseList.innerHTML = "";
//     data.labels.forEach((label, index) => {
//       const percent = ((data.data[index] / data.total) * 100).toFixed(2);
//       const amount = data.data[index].toFixed(2);
//       expenseList.innerHTML += `
//               <div class="expense-item">
//                   <span class="expense-category">${label}</span>
//                   <span class="expense-percent">${percent}%</span>
//                   <span class="expense-amount">${amount}</span>
//               </div>
//           `;
//     });
//   }

//   document.querySelectorAll(".nav-button").forEach((button) => {
//     button.addEventListener("click", function () {
//       document
//         .querySelectorAll(".nav-button")
//         .forEach((btn) => btn.classList.remove("active"));
//       this.classList.add("active");
//       updateCharts(this.dataset.month);
//     });
//   });

//   updateCharts("sesudah");
// });
