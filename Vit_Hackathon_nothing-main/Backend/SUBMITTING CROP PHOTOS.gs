function doGet() {
  return HtmlService.createHtmlOutputFromFile("index").setTitle(
    "FLN Data Collection"
  );
}

function saveData(formData) {
  try {
    var sheetId = "1s28ka9-ve2x5C3ew02HeEfN71C2i17DzrfF9aBPQnoc"; // Google Sheet ID
    var sheetName = "Photos";
    var sheet = SpreadsheetApp.openById(sheetId).getSheetByName(sheetName);
    if (!sheet) return "Error: Google Sheet not found!";

    var folderId = "YOUR_FOLDER_ID"; // Replace with your Google Drive Folder ID
    var folder;

    try {
      folder = DriveApp.getFolderById(folderId);
    } catch (e) {
      folder = DriveApp.createFolder("FLN_Land_Photos"); // Creates a folder if ID is incorrect
      folderId = folder.getId();
    }

    var imageUrls = [];
    for (var i = 0; i < formData.images.length; i++) {
      var imageData = Utilities.base64Decode(formData.images[i].data);
      var blob = Utilities.newBlob(
        imageData,
        formData.images[i].type,
        formData.images[i].name
      );
      var file = folder.createFile(blob);

      // Make the image publicly accessible
      file.setSharing(
        DriveApp.Access.ANYONE_WITH_LINK,
        DriveApp.Permission.VIEW
      );

      // Convert file URL to a direct link (Google Drive image format)
      var fileId = file.getId();
      var directImageUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
      imageUrls.push(directImageUrl);
    }

    // Get current date & time in DD-MM-YYYY HH:MM format
    var today = new Date();
    var formattedDateTime = Utilities.formatDate(
      today,
      Session.getScriptTimeZone(),
      "dd-MM-yyyy HH:mm"
    );

    // Create Google Maps link from latitude & longitude
    var gpsLink = `=HYPERLINK("https://www.google.com/maps?q=${formData.gpsLocation}", "View Location")`;

    // Insert FLN number, date-time, GPS location & link in Columns A to D
    var row = sheet.getLastRow() + 1;
    sheet.getRange(row, 1).setValue(formData.flnNumber);
    sheet.getRange(row, 2).setValue(formattedDateTime); // Auto-filled date & time
    sheet.getRange(row, 3).setValue(formData.gpsLocation); // GPS coordinates (lat, lon)
    sheet.getRange(row, 4).setFormula(gpsLink); // Google Maps link

    // Insert images using IMAGE() formula in columns E to L (max 8 images)
    for (var j = 0; j < imageUrls.length; j++) {
      var cell = sheet.getRange(row, j + 5);
      cell.setFormula(`=IMAGE("${imageUrls[j]}", 1)`);
    }

    // Resize row height to fit 2 cm (76 pixels)
    sheet.setRowHeight(row, 76);

    // Resize columns to fit 2 cm (76 pixels)
    for (var k = 5; k <= imageUrls.length + 4; k++) {
      sheet.setColumnWidth(k, 76);
    }

    return "Submission Successful! Data Saved with Images, GPS Link, and Date-Time.";
  } catch (error) {
    return "Error: " + error.toString();
  }
}
