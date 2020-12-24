function versiculo() {
    let vers = document.getElementById("vers").value
    let num = document.getElementById("num").value
    let texto = document.getElementById("mostrar")
    switch(vers){
        case 'genesis':
            switch(num){
                case '1':
                    texto.innerHTML = 
                    "<p>No princípio criou Deus o céu e a terra.Gênesis 1:1</p>"
                break;
                case '2':
                    texto.innerHTML = "E a terra era sem forma e vazia; e havia trevas sobre a face do abismo; e o Espírito de Deus se movia sobre a face das águas.Gênesis 1:2"
                break;
            }
            
        break;
    }
    
}