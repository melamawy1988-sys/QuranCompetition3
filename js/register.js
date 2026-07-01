// تعبئة قائمة الأجزاء
const select = document.getElementById("parts");

for (let i = 1; i <= 30; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i + " جزء";
    select.appendChild(option);
}

// عند الضغط على حفظ
document.getElementById("registerForm").addEventListener("submit", async function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = parseInt(document.getElementById("age").value);
    const national = document.getElementById("national").value.trim();
    const parts = parseInt(document.getElementById("parts").value);

    if (national.length !== 14) {
        alert("الرقم القومي يجب أن يكون 14 رقمًا");
        return;
    }

    try {

        const { error } = await db
            .from("participants")
            .insert([
                {
                    name: name,
                    age: age,
                    national_id: national,
                    parts: parts
                }
            ]);

        if (error) {
            alert("خطأ:\n" + error.message);
            return;
        }

        alert("✅ تم حفظ البيانات بنجاح");

        document.getElementById("registerForm").reset();

    } catch (err) {
        alert(err.message);
    }

});
