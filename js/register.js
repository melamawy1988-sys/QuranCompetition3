document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        const { data, error } = await db
            .from("participants")
            .select("*")
            .limit(1);

        if (error) {
            alert(error.message);
        } else {
            alert("تم الاتصال بقاعدة البيانات بنجاح");
        }

    } catch (err) {
        alert(err.message);
    }
});
