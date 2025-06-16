document.getElementById("whatsapp-form").addEventListener("submit", function(e) {
    e.preventDefault(); // Biar nggak reload halaman

    // Ambil data input
    var name = document.querySelector("[name='name']").value;
    var email = document.querySelector("[name='email']").value;
    var message = document.querySelector("[name='message']").value;

    var phoneNumber = "6282244695968";

    var whatsappMessage = 
    "Halo Pangsit Dewi!\n\nNama: " +name
    + "\nPesan: " + message;


    var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(whatsappMessage);

    window.open(whatsappURL, "_blank");
    this.reset();
});
