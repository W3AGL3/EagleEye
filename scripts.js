// Fetch the latest bill from the Congress API
axios
  .get('https://api.congress.gov/v3/bill?api_key=qCn1gzibR20rAlSMXYZhc54AXNg2uIFYObZaik3G')
  .then(response => {
    // Handle the API response and display the latest bill
    const latestBill = response.data.results[0]; // Assuming the latest bill is the first item in the results

    // Build the HTML structure for the latest bill
    const billHtml = `
      <h3>${latestBill.billNumber}</h3>
      <p>${latestBill.title}</p>
      <p>${latestBill.sponsor}</p>
      <p>Status: ${latestBill.status}</p>
    `;

    // Insert the latest bill HTML into the 'latestBill' div
    document.getElementById('latestBill').innerHTML = billHtml;
  })
  .catch(error => {
    console.error('Error fetching the latest bill:', error);
  });
