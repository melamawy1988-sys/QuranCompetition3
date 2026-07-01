const select = document.getElementById("parts");

for (let i = 1; i <= 30; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i + " جزء";
    select.appendChild(option);
}

document.getElementById("registerForm").addEventListener("submit", async (e) => {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const national = document.getElementById("national").value;
    const parts = parseInt(document.getElementById("parts").value);

    const { data, error } = await supabase
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
    } else {
        alert("✅ تم حفظ البيانات بنجاح");
    }

});
