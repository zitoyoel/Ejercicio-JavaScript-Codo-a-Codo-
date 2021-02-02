
for (i = 11; i > 8; i--) {
    var tabla = document.createElement("div");
    tabla.className = `tabla${i}`;
    for (j = 1; j < 10; j++) {
        var res = document.createElement("p");
        res.innerHTML = i + " x " + j + ": " + i * j;
        tabla.appendChild(res);

        /*  document.write(i + " x " + j + ": " + i * j)
          document.write("<br>")*/
    }
    tablas.appendChild(tabla);
}