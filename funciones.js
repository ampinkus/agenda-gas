function doGet() {
  /* 
    Crea una plantilla basada en el archivo 'web', la evalúa y establece el título en 'Agenda GAS'
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda GAS');

    1. **`HtmlService.createTemplateFromFile('web')`** → Carga un archivo HTML llamado `web.html` como plantilla.
    2. **`.evaluate()`** → Evalúa la plantilla para convertirla en una página HTML lista para mostrarse.
    3. **`.setTitle('Agenda GAS')`** → Establece el título de la página en el navegador.
*/
  return HtmlService.createTemplateFromFile("web")
    .evaluate()
    .setTitle("Agenda GAS");
}

// creamos una función para insertar scriptlets 
function obtenerDatosHTML(nombre) {
  return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}    
