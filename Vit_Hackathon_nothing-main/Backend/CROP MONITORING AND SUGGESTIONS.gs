// Google Apps Script (code.gs)

// Spreadsheet ID and Sheet Name
const SPREADSHEET_ID = "1s28ka9-ve2x5C3ew02HeEfN71C2i17DzrfF9aBPQnoc";
const SHEET_NAME = "crd";

// Function to handle GET request and serve the HTML page
function doGet() {
  return HtmlService.createHtmlOutputFromFile("Index").setTitle(
    "వృక్ష వ్యాధి గుర్తింపు"
  );
}

// Function to analyze disease (simulated for now, replace with actual analysis)
function analyzeDisease(imageData, diseaseSuggestion) {
  try {
    // Check if imageData is base64 encoded
    if (!imageData || !imageData.startsWith("data:image")) {
      throw new Error("Invalid image data format");
    }

    // Decode the base64 string and convert it to a Blob object
    var imageBlob = Utilities.newBlob(
      Utilities.base64Decode(imageData.split(",")[1]),
      "image/png"
    );

    // Provide a name for the image file (e.g., timestamped name)
    var imageName = "plant_disease_image_" + new Date().getTime() + ".png";

    // Create file from the image blob and save to Google Drive
    var imageFile = DriveApp.createFile(imageBlob.setName(imageName));

    // Save details to the spreadsheet
    saveToSpreadsheet(imageFile.getUrl(), diseaseSuggestion);

    // Return the suggestion and image URL
    return {
      imageUrl: imageFile.getUrl(),
      suggestion: diseaseSuggestion,
    };
  } catch (error) {
    Logger.log("Error saving image: " + error.message);
    return {
      error: "There was an error saving the image and data: " + error.message,
    };
  }
}

// Function to save data to the Google Spreadsheet
function saveToSpreadsheet(imageUrl, suggestion) {
  const sheet =
    SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);

  // Get the current date
  const date = new Date();

  // Append the data to the sheet
  sheet.appendRow([date, imageUrl, suggestion]);
}
