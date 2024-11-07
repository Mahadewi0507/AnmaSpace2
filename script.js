// Jika ingin menambahkan interaktivitas, seperti efek animasi atau perubahan warna tombol
// Contoh sederhana untuk menambahkan efek pada tombol hover:

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ff6347'; // Hover effect
    });
    link.addEventListener('mouseout', () => {
        link.style.color = 'white'; // Reset color
    });
});
