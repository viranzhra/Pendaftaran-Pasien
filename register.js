function validasi() {
    event.preventDefault(); // menghentikan pengiriman form
    
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;

    // menampilkan pesan email
    alert("Terima kasih " + username + ", Email Anda " + email + " telah terdaftar!"); 
}

function myFunction() {
    var x = document.getElementById("password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
    }
}
