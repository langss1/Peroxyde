// Periksa apakah waktu akhir countdown sudah tersimpan di localStorage
let endDate = localStorage.getItem('countdownEndDate');

if (!endDate) {
    // Jika belum tersimpan, set waktu akhir countdown (10 hari dari sekarang)
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 10);
    endDate = launchDate.getTime(); // Simpan sebagai timestamp
    localStorage.setItem('countdownEndDate', endDate);
} else {
    endDate = parseInt(endDate, 10); // Pastikan format angka
}

function updateCountdown() {
    const now = new Date().getTime(); // Timestamp saat ini
    const timeDifference = endDate - now;

    // Jika waktu sudah habis
    if (timeDifference <= 0) {
        clearInterval(countdownInterval);
        document.getElementById('countdown').innerHTML = '<h3>Launch Time!</h3>';
        return;
    }

    // Hitung sisa waktu
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Perbarui elemen tampilan countdown
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Jalankan pembaruan countdown setiap detik
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown();
