(function() {
  const form = document.getElementById('kirim');
  const whatsappNumber = '62895413199275';

    form.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form secara default

    const name = document.getElementById('name').value;
    console.log('Nama:', name);
    const menu = document.getElementById('menu').value;
    console.log('Menu:', menu);
    const quantity = document.getElementById('quantity').value;
    console.log('Jumlah:', quantity)
    const notes = document.getElementById('notes').value;
    console.log('Catatan:', notes)

    const message = `Nama: ${name}
                     Menu: ${menu}
                     Jumlah: ${quantity}
                     Catatan: ${notes}`;

    const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(message)}`;

    window.open(whatsappLink, '_blank');
    });
    })();