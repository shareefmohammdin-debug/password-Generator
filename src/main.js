import './style.css'

// تحديد العناصر من الـ HTML
const numInput = document.getElementById('num');
const generateBtn = document.querySelector('button');
const passwordDisplay = document.getElementById('password-display');
const copyBtn = document.querySelector('#result button');

// مخزن الأحرف والرموز
const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";


function createPassword() {
  const length = parseInt(numInput.value);

  // التأكد من أن المستخدم أدخل رقماً صحيحاً
  if (isNaN(length) || length <= 0) {
    alert("Please enter a valid number for length");
    return;
  }

  let generatedPassword = "";
  
  // حلقة تكرار (Loop) لاختيار حرف عشوائي في كل مرة
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    generatedPassword += charset[randomIndex];
  }

  // عرض النتيجة في الصفحة
  passwordDisplay.innerText = generatedPassword;
  passwordDisplay.classList.replace('text-slate-500', 'text-white'); // تغيير اللون عند ظهور كلمة المرور
}


async function copyToClipboard() {
  const text = passwordDisplay.innerText;
  
  // التحقق من وجود كلمة مرور قبل النسخ
  if (text === "Your password" || text === "") return;

  try {
    await navigator.clipboard.writeText(text);
    
    // تغيير شكل الزر مؤقتاً ليعرف المستخدم أن النسخ تم
    const originalIcon = copyBtn.innerHTML;
    copyBtn.innerHTML = "✅"; // تغيير الأيقونة لعلامة صح
    
    setTimeout(() => {
      copyBtn.innerHTML = originalIcon; // إعادة الأيقونة الأصلية بعد ثانيتين
    }, 2000);
    
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}


// عند الضغط على زر التوليد
generateBtn.addEventListener('click', createPassword);

// عند الضغط على زر النسخ
copyBtn.addEventListener('click', copyToClipboard);
