const select = document.getElementById("parts");

for(let i=1;i<=30;i++){

const option=document.createElement("option");

option.value=i;

option.text=i+" جزء";

select.appendChild(option);

}

document.getElementById("registerForm").addEventListener("submit",(e)=>{

e.preventDefault();

alert("تم التحقق من البيانات بنجاح.\nسيتم ربطها بـ Supabase في الجزء القادم.");

});
