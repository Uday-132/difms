var SPREADSHEET_ID = "1zZo9mNiPeftPyIcAl9L8RjXr28Li-2KiPraM44q7peg";

function doGet() {
  var ss = SpreadsheetApp.openById(SPREADSHEET_ID);
  var sheetSat = ss.getSheetByName("1"); // satellite data
  var sheetGround = ss.getSheetByName("2"); // ground data

  if (!sheetSat || !sheetGround) {
    return HtmlService.createHtmlOutput(
      "<p>Error: One of the sheets named '1' or '2' was not found.</p>"
    );
  }

  // Read only A → I (9 columns)
  var valsSat = sheetSat.getRange(2, 1, 1, 9).getValues()[0];
  var valsGrd = sheetGround.getRange(2, 1, 1, 9).getValues()[0];

  // Headers (A → I)
  var headers = sheetSat.getRange(1, 1, 1, 9).getValues()[0];

  var payload = {
    headers: headers,
    satellite: valsSat,
    ground: valsGrd,
  };

  var t = HtmlService.createTemplateFromFile("Index");
  t.payload = JSON.stringify(payload);
  return t
    .evaluate()
    .setTitle("Digital India Farming and Monitoring System")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.DEFAULT);
}
