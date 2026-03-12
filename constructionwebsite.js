function login() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "test@test.com" && password === "123456") {

        document.getElementById("loginSection").classList.add("d-none");
        document.getElementById("dashboardSection").classList.remove("d-none");

    } else {

        document.getElementById("error").innerText = "Invalid Email or Password";

    }

}


function openDPR() {

    document.getElementById("dashboardSection").classList.add("d-none");
    document.getElementById("dprSection").classList.remove("d-none");

}


function showDashboard() {

    document.getElementById("dprSection").classList.add("d-none");
    document.getElementById("dashboardSection").classList.remove("d-none");

}


document.getElementById("images").addEventListener("change", function() {

    const preview = document.getElementById("preview");

    preview.innerHTML = "";

    Array.from(this.files).forEach(function(file) {

        const img = document.createElement("img");

        img.src = URL.createObjectURL(file);

        preview.appendChild(img);

    });

});


function submitDPR() {

    alert("DPR Submitted Successfully");

    showDashboard();

}