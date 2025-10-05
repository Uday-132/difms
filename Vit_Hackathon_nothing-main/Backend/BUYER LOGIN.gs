function doGet() {
  return HtmlService.createHtmlOutputFromFile("Index").setTitle(
    "Product Marketplace"
  );
}

// Fetch products from Google Sheet
function getProducts() {
  var ss = SpreadsheetApp.openById(
    "1IFEFR2J-5-ZRExZ1JWCkftIkX_zabe1P7daadcZ-WLY"
  );
  var sheet = ss.getSheetByName("Products");
  var data = sheet.getDataRange().getValues();

  var products = [];
  for (var i = 1; i < data.length; i++) {
    // skip header
    products.push({
      name: data[i][0], // Column A - Product Name
      description: data[i][1], // Column B - Description
      price: data[i][2], // Column C - Price
      seller: data[i][3], // Column D - Seller Name
      contact: data[i][4], // Column E - Contact
      email: data[i][5], // Column F - Email
      location: data[i][6], // Column G - Location
      image: data[i][7], // Column H - Image URL
    });
  }
  return products;
}
