function tab(index1) {
     for (var variavel = 1; variavel <= index1; variavel++) {
        for (var i = 1; i <= 10; i++) {
            let resultado = variavel * i;
            console.log(variavel + " X " + i + " = " + resultado);
        }
        console.log("");
    }
}
tab(94)