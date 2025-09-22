// Period Tracker: Estimate next period + fertile window
function calculatePeriod(event) {
  event.preventDefault();
  const start = new Date(document.getElementById("start").value);
  const cycleLength = parseInt(document.getElementById("cycle").value || 28);

  if (isNaN(start.getTime())) {
    alert("Please select a start date.");
    return;
  }

  const nextPeriod = new Date(start);
  nextPeriod.setDate(start.getDate() + cycleLength);

  const ovulation = new Date(start);
  ovulation.setDate(start.getDate() + (cycleLength - 14));

  document.getElementById("result").innerHTML = `
    <p><strong>Next Period:</strong> ${nextPeriod.toDateString()}</p>
    <p><strong>Ovulation Day:</strong> ${ovulation.toDateString()}</p>
    <p><strong>Fertile Window:</strong> ${new Date(ovulation.getTime() - 2*24*60*60*1000).toDateString()} 
      to ${new Date(ovulation.getTime() + 2*24*60*60*1000).toDateString()}</p>
  `;
}

// Reminders
function setReminder(event) {
  event.preventDefault();
  const note = document.getElementById("note").value;
  const time = new Date(document.getElementById("time").value);

  if (!note || isNaN(time.getTime())) {
    alert("Please enter note and time.");
    return;
  }

  alert(`Reminder set!\nNote: ${note}\nTime: ${time}`);
}

// Buddy-GPT (placeholder)
function askBuddy(event) {
  event.preventDefault();
  const q = document.getElementById("question").value;
  document.getElementById("response").innerHTML = `<p><em>Buddy-GPT says:</em> You asked: "${q}". I'll guide you soon!</p>`;
}
