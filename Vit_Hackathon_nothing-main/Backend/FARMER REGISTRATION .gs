function doGet() {
  return HtmlService.createHtmlOutputFromFile("Index").setTitle(
    "Digital India Farming and Monitoring System"
  );
}

function saveData(formData) {
  var sheet = SpreadsheetApp.openById(
    "1s28ka9-ve2x5C3ew02HeEfN71C2i17DzrfF9aBPQnoc"
  ).getSheetByName("Registration");

  if (!sheet) {
    sheet = SpreadsheetApp.openById(
      "1s28ka9-ve2x5C3ew02HeEfN71C2i17DzrfF9aBPQnoc"
    ).insertSheet("Registration");
    sheet.appendRow([
      "Farmer Name",
      "Aadhar Number",
      "Land Survey Number",
      "Village",
      "District",
      "State",
      "Bank Account",
      "Bank Branch",
      "Email",
      "Phone",
      "FLIN",
    ]);
  }

  var token = "FLIN" + Math.floor(100000 + Math.random() * 900000); // Generates a 6-digit number
  formData.tokenNumber = token;

  sheet.appendRow([
    formData.farmerName,
    formData.aadharNumber,
    formData.landSurveyNumber,
    formData.villageName,
    formData.district,
    formData.state,
    formData.bankAccount,
    formData.bankBranch,
    formData.email,
    formData.phone,
    token,
  ]);

  sendEmailConfirmation(formData.email, token);

  return "Registration Successful! FLIN: " + token;
}

function sendEmailConfirmation(email, token) {
  var subject = "Registration Confirmation - Digital India Farming";
  var body =
    "Dear Farmer,\n\nYour registration was successful! Your FLIN is: " +
    token +
    "\n\nThank you for registering.\n\nBest Regards,\nDigital India Farming and Monitoring System";
  MailApp.sendEmail(email, subject, body);
}
