function extractTextFromPDF() {
  
  // PDF File URL 
  // You can also pull PDFs from Google Drive
  var url = "http://www.bcra.gob.ar/Pdfs/PublicacionesEstadisticas/infomondiae.pdf";  
  
  var blob = UrlFetchApp.fetch(url).getBlob();
  var resource = {
    title: blob.getName(),
    mimeType: blob.getContentType()
  };
  
  // Enable the Advanced Drive API Service
  var file = Drive.Files.insert(resource, blob, {ocr: true, ocrLanguage: "en"});
  
  // Extract Text from PDF file
  var doc = DocumentApp.openById(file.id);
  var text = doc.getBody().getText();
  
  
  var hola = text.indexOf("M2 (");
  var hola2 = text.substring(hola + 65, hola + 76);
  var hola3 = hola2.trim();
  var hola4 = hola3.replace(",", "");
  var hola5 = hola4.replace(",", "");
  return text;
}