const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
 const prices = document.querySelectorAll(".prices");

  // Calculate the total sum of all prices
  let totalPrice = 0;
  prices.forEach(price => {
    totalPrice += parseFloat(price.textContent) || 0; // Convert text to number
  });

  // Create a new row for total price
  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  const totalCell = document.createElement("td");

  // Set column span to cover all columns (assuming 2 columns: Item & Price)
  totalCell.setAttribute("colspan", "2");
  totalCell.style.fontWeight = "bold";
  totalCell.textContent = `Total Price: $${totalPrice.toFixed(2)}`;

  newRow.appendChild(totalCell);
  table.appendChild(newRow);
  
};

getSumBtn.addEventListener("click", getSum);

