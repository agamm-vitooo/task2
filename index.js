// Data dasar
const OTR = 240000000; // Harga mobil
const DP_PERCENTAGE = 20 / 100; // DP 20%
const JANGKA_WAKTU = 18; // 1,5 tahun dalam bulan
const BUNGA_TAHUNAN = 14 / 100; // 14% per tahun

// Menghitung DP dan pokok utang
const DP = OTR * DP_PERCENTAGE;
const pokokUtang = OTR - DP;

// Menghitung bunga total selama jangka waktu
const bungaTotal = pokokUtang * (BUNGA_TAHUNAN * (JANGKA_WAKTU / 12));

// Menghitung total yang harus dibayar
const totalHutang = pokokUtang + bungaTotal;

// Menghitung angsuran bulanan
const angsuranBulanan = totalHutang / JANGKA_WAKTU;

// Fungsi untuk membuat jadwal angsuran
function buatJadwalAngsuran(jumlahBulan, angsuranPerBulan) {
    const jadwal = [];
    let tanggal = new Date(2024, 0, 25); // Mulai angsuran dari 25 Januari 2024

    for (let i = 1; i <= jumlahBulan; i++) {
        jadwal.push({
            angsuran_ke: i,
            angsuran_per_bulan: angsuranPerBulan.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' }),
            tanggal_jatuh_tempo: tanggal.toISOString().split('T')[0]
        });

        // Tambah satu bulan untuk jatuh tempo berikutnya
        tanggal.setMonth(tanggal.getMonth() + 1);
    }

    return jadwal;
}

// Menampilkan hasil
console.log(`OTR: Rp${OTR.toLocaleString('id-ID')}`);
console.log(`Down Payment (DP): Rp${DP.toLocaleString('id-ID')}`);
console.log(`Pokok Utang: Rp${pokokUtang.toLocaleString('id-ID')}`);
console.log(`Bunga Total: Rp${bungaTotal.toLocaleString('id-ID')}`);
console.log(`Angsuran Bulanan: Rp${angsuranBulanan.toLocaleString('id-ID')}`);

// Membuat jadwal angsuran
const jadwalAngsuran = buatJadwalAngsuran(JANGKA_WAKTU, angsuranBulanan);

// Menampilkan jadwal angsuran
console.log("\nJadwal Angsuran:");
jadwalAngsuran.forEach(item => {
    console.log(`Angsuran ke-${item.angsuran_ke}: ${item.angsuran_per_bulan}, Jatuh Tempo: ${item.tanggal_jatuh_tempo}`);
});