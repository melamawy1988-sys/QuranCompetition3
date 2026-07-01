alert("تم تحميل register.js");

const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("تم الضغط على زر الحفظ");
});
