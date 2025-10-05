function doGet() {
  return HtmlService.createHtmlOutputFromFile("index").setTitle(
    "Digital India Farming and Monitoring System"
  );
}

function saveData(formData) {
  var sheet = SpreadsheetApp.openById(
    "1s28ka9-ve2x5C3ew02HeEfN71C2i17DzrfF9aBPQnoc"
  ).getSheetByName("Buyer");

  if (!sheet) {
    sheet = SpreadsheetApp.openById(
      "1s28ka9-ve2x5C3ew02HeEfN71C2i17DzrfF9aBPQnoc"
    ).insertSheet("Buyer");
    sheet.appendRow([
      "Buyer Name",
      "Aadhar Number",
      "PAN Number",
      "Village",
      "District",
      "State",
      "Email",
      "Phone",
      "BIN",
    ]);
  }

  var binToken = "BIN" + Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit BIN
  formData.tokenNumber = binToken;

  sheet.appendRow([
    formData.buyerName,
    formData.aadharNumber,
    formData.panNumber, // Added PAN Number
    formData.villageName,
    formData.district,
    formData.state,
    formData.email,
    formData.phone,
    binToken,
  ]);

  sendEmailConfirmation(formData.email, binToken);

  return "Registration Successful! BIN: " + binToken;
}

function sendEmailConfirmation(email, binToken) {
  var subject = "Registration Confirmation - Digital India Farming";
  var body =
    "Dear Buyer,\n\nYour registration was successful! Your BIN is: " +
    binToken +
    "\n\nThank you for registering.\n\nBest Regards,\nDigital India Farming and Monitoring System";
  MailApp.sendEmail(email, subject, body);
}
