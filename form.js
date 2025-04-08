document.getElementById("save").addEventListener("click", displayDetails);
let row = 1;

function displayDetails() {
  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();
  const place = document.getElementById("place").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !age || !place || !email) {
    return alert("All fields are required");
  }

  const display = document.getElementById("display");
  const newRow = display.insertRow(row);

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);

  cell1.textContent = name;
  cell2.textContent = age;
  cell3.textContent = place;
  cell4.textContent = email;

  row++;

  // Clear form fields
  document.getElementById("name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("place").value = "";
  document.getElementById("email").value = "";
}