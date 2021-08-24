const fs = require("fs");
const http = require("http");
const axios = require("axios");
const url = require("url");

http
  .createServer((req, res) => {
    var q = url.parse(req.url, true);
    if (q.pathname == "/api/proveedores") {
      axios({
        method: "GET",
        url: "https://gist.githubusercontent.com/josejbocanegra/d3b26f97573a823a9d0df4ec68fef45f/raw/66440575649e007a9770bcd480badcbbc6a41ba7/proveedores.json",
      })
        .then((respuesta) => {
          fs.readFile("index.html", (err, data) => {
            let html = data.toString();
            html = html.concat("<h1>Proveedores</h1> \x3Ctable class=\"table table-striped\"\x3E\n    \x3Cthead\x3E\n      \x3Ctr\x3E\n        \x3Cth scope=\"col\"\x3EID\x3C\x2Fth\x3E\n        \x3Cth scope=\"col\"\x3ENombre\x3C\x2Fth\x3E\n        \x3Cth scope=\"col\"\x3EContacto\x3C\x2Fth\x3E\n      \x3C\x2Ftr\x3E\n    \x3C\x2Fthead\x3E\n    \x3Ctbody\x3E");
            for (let i = 0; i < respuesta.data.length; i++) {
              html = html.concat('<tr> \x3Cth scope="row"\x3E');
              html = html.concat(respuesta.data[i].idproveedor);
              html = html.concat("</th>  <td>");
              html = html.concat(respuesta.data[i].nombrecompania);
              html = html.concat("</td>  <td>");
              html = html.concat(respuesta.data[i].nombrecontacto);
              html = html.concat("</td>  <td>  </tr>");
            }
            html = html.concat("  \x3C\x2Ftbody\x3E\n\x3C\x2Ftable\x3E");
            let htmlMod = html.concat("El fin del delfin");
            res.end(htmlMod);
          });
        })
        .catch((err) => console.log(err));
    } else if (q.pathname == "/api/clientes") {
      axios({
        method: "GET",
        url: "https://gist.githubusercontent.com/josejbocanegra/986182ce2dd3e6246adcf960f9cda061/raw/f013c156f37c34117c0d4ba9779b15d427fb8dcd/clientes.json",
      })
        .then((respuesta) => {
          fs.readFile("index.html", (err, data) => {
            let html = data.toString();
            html = html.concat("<h1>Clientes</h1> \x3Ctable class=\"table table-striped\"\x3E\n    \x3Cthead\x3E\n      \x3Ctr\x3E\n        \x3Cth scope=\"col\"\x3EID\x3C\x2Fth\x3E\n        \x3Cth scope=\"col\"\x3ENombre\x3C\x2Fth\x3E\n        \x3Cth scope=\"col\"\x3EContacto\x3C\x2Fth\x3E\n      \x3C\x2Ftr\x3E\n    \x3C\x2Fthead\x3E\n    \x3Ctbody\x3E");
            for (let i = 0; i < respuesta.data.length; i++) {
              html = html.concat('<tr> \x3Cth scope="row"\x3E');
              html = html.concat(respuesta.data[i].idCliente);
              html = html.concat("</th>  <td>");
              html = html.concat(respuesta.data[i].NombreCompania);
              html = html.concat("</td>  <td>");
              html = html.concat(respuesta.data[i].NombreContacto);
              html = html.concat("</td>  <td>  </tr>");
            }
            html = html.concat("  \x3C\x2Ftbody\x3E\n\x3C\x2Ftable\x3E");
            let htmlMod = html.concat("El fin del delfin");
            res.end(htmlMod);
          });
        })
        .catch((err) => console.log(err));
    } else {
      res.end("Su servidor web murio gg wp");
    }
  })
  .listen(8081);

/*
fs.readFile("main.js", (err, data)=> {  

});

fs.writeFile("prueba.txt", "Este es el contenido", "utf-8", ()=>{
    console.log("Escritura finalizada");
})
*/
