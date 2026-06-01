const textarea = document.getElementById("reviewBox");
const counter = document.getElementById("counter");
const submitBtn = document.getElementById("submitBtn");

const maxChars = 200;

textarea.addEventListener("input", () => {
  const usedChars = textarea.value.length;
  const remaining = maxChars - usedChars;

  counter.innerText = `${remaining} characters remaining`;

  // Default color
  counter.style.color = "#555";

  // 80% warning
  if (usedChars >= 160 && usedChars < 180) {
    counter.style.color = "orange";
  }

  // 90% danger
  if (usedChars >= 180) {
    counter.style.color = "red";
  }
});

submitBtn.addEventListener("click", () => {
  const text = textarea.value.trim();

  if (text === "") {
    alert("Please write something before submitting.");
    return;
  }

  alert("Review submitted successfully!");

  textarea.value = "";
  counter.innerText = "200 characters remaining";
  counter.style.color = "#555";
});