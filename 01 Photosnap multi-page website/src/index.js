const toggle = document.getElementById("billing-toggle");
const prices = document.querySelectorAll(".price");
const monthlyLabel = document.getElementById("monthly-label");
const yearlyLabel = document.getElementById("yearly-label");

toggle.addEventListener("change", () => {
  prices.forEach((priceEl) => {
    const monthly = priceEl.dataset.monthly;
    const yearly = priceEl.dataset.yearly;

    if (toggle.checked) {
      priceEl.innerHTML = `<span>$${yearly}.00</span> <span>per year</span>`;
      monthlyLabel.classList.remove("active");
      yearlyLabel.classList.add("active");
    } else {
      priceEl.innerHTML = `<span>$${ monthly}.00</span> <span>per month</span>`;
      monthlyLabel.classList.add("active");
      yearlyLabel.classList.remove("active");
    }
  });
});


