function doGet() {
  return HtmlService.createHtmlOutputFromFile("index").setTitle(
    "Crop Data Collection & Chart"
  );
}

function saveData(tokenNumber, cropName, acres) {
  var sheet = SpreadsheetApp.openById(
    "1s28ka9-ve2x5C3ew02HeEfN71C2i17DzrfF9aBPQnoc"
  ).getSheetByName("crop");
  if (!sheet) {
    return "Error: Sheet not found!";
  }
  sheet.appendRow([new Date(), tokenNumber, cropName, acres]);
  return "Data Saved Successfully!";
}

function getChartData() {
  var sheet = SpreadsheetApp.openById(
    "1s28ka9-ve2x5C3ew02HeEfN71C2i17DzrfF9aBPQnoc"
  ).getSheetByName("crop");
  if (!sheet) {
    return [];
  }

  var data = sheet.getDataRange().getValues();
  var cropData = {};
  var maxAcres = 100; // Reference point for 100% usage

  for (var i = 1; i < data.length; i++) {
    // Skip header row
    var crop = data[i][2]; // Column C - Crop Name
    var acres = parseFloat(data[i][3]); // Column D - Acres of Land

    if (crop && !isNaN(acres)) {
      cropData[crop] = (cropData[crop] || 0) + acres;
    }
  }

  var chartData = [["Crop Name", "Acres of Land", { role: "annotation" }]];

  Object.keys(cropData).forEach(function (crop) {
    var usedPercentage = (cropData[crop] / maxAcres) * 100;
    var requiredPercentage = 100 - usedPercentage;
    var annotation =
      usedPercentage.toFixed(1) +
      `% (Required ${requiredPercentage.toFixed(1)}%)`;
    chartData.push([crop, cropData[crop], annotation]);
  });

  return chartData;
}
