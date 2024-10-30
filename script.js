// $(document).ready(function() {
//     // Klik tombol menu untuk toggle sidebar
//     $('.menu-icon').click(function() {
//         if ($('.sidebar').css('left') == '0px') {
//             $('.sidebar').animate({ left: '-220px' }, 300); // Sembunyikan
//             $('.main-content').animate({ marginLeft: '0' }, 300);
//         } else {
//             $('.sidebar').animate({ left: '0px' }, 300); // Munculkan
//             $('.main-content').animate({ marginLeft: '220px' }, 300);
//         }
//     });
// });

$(document).ready(function () {
  // Efek Show/Hide untuk Sidebar
  $(".menu-icon").click(function () {
    $(".sidebar").toggle("slow"); // Efek hide/show dengan sliding pada sidebar
  });

  //   // Efek Fade In untuk card saat halaman di-load
  //   $(".card").hide().fadeIn(2000);

  // Efek Slide Toggle untuk dropdown menu
  $(".dropdown").click(function () {
    $(this).find(".dropdown-content").slideToggle("fast");
  });

  // Efek Fade In/Fade Out untuk chart dan budget container
  $(".chart, .budget-container").hover(
    function () {
      $(this).fadeTo(300, 1); // Fade out saat hover
    },
    function () {
      $(this).fadeTo(300, 1); // Fade in saat hover berakhir
    }
  );

  // Slide-up dari bawah untuk cardview chart dan piechart saat halaman di-load
  $(".card").css({ position: "relative", top: "100px", opacity: 0 }).animate({ top: "0px", opacity: 1 }, 2000); // Gerakan dari bawah ke atas selama 2 detik

  // Menyembunyikan chart dan budget-container saat menunggu
  $(".chart, .budget-container").css({ opacity: 0, position: "relative", top: "100px" });

  // Menambahkan delay untuk chart dan budget-container
  setTimeout(function () {
    $(".chart, .budget-container").animate({ top: "0px", opacity: 1 }, 2000); // Gerakan dari bawah ke atas selama 2 detik
  }, 1500); // Delay 2 detik setelah card selesai

  // Efek animasi sederhana pada logo
  $(".logo-name").hover(
    function () {
      $(this).animate(
        {
          fontSize: "30px", // Animasi perubahan ukuran teks
        },
        400
      );
    },
    function () {
      $(this).animate(
        {
          fontSize: "25px", // Kembali ke ukuran asli
        },
        400
      );
    }
  );

  // Efek Show/Hide pada profil
  $(".profile-icon").click(function () {
    $(this).find("img").toggle(500); // Gambar akan hilang/muncul saat diklik
  });

  // Bar chart initialization (Chart.js)
  const ctxBar = document.getElementById("myBarChart").getContext("2d");
  const myBarChart = new Chart(ctxBar, {
    type: "bar",
    data: {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Revenue",
          data: [12000, 19000, 3000, 5000, 20000, 30000],
          backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)", "rgba(255, 206, 86, 0.6)", "rgba(75, 192, 192, 0.6)", "rgba(153, 102, 255, 0.6)", "rgba(255, 159, 64, 0.6)"],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 159, 64, 1)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  // Pie chart initialization (Chart.js)
  const ctxPie1 = document.getElementById("myPieChart1").getContext("2d");
  const myPieChart1 = new Chart(ctxPie1, {
    type: "pie",
    data: {
      labels: ["Rent", "Utilities", "Salaries", "Supplies", "Marketing"],
      datasets: [
        {
          label: "Expenses",
          data: [5000, 2000, 15000, 3000, 5000],
          backgroundColor: ["rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)", "rgba(255, 206, 86, 0.6)", "rgba(75, 192, 192, 0.6)", "rgba(153, 102, 255, 0.6)"],
          borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });

  const ctxPie2 = document.getElementById("myPieChart2").getContext("2d");
  const myPieChart2 = new Chart(ctxPie2, {
    type: "pie",
    data: {
      labels: ["Product A", "Product B", "Product C", "Product D", "Product E"],
      datasets: [
        {
          label: "Revenue",
          data: [8000, 12000, 7000, 9000, 5000],
          backgroundColor: ["rgba(255, 159, 64, 0.6)", "rgba(75, 192, 192, 0.6)", "rgba(153, 102, 255, 0.6)", "rgba(255, 99, 132, 0.6)", "rgba(54, 162, 235, 0.6)"],
          borderColor: ["rgba(255, 159, 64, 1)", "rgba(75, 192, 192, 1)", "rgba(153, 102, 255, 1)", "rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
    },
  });
}); 
