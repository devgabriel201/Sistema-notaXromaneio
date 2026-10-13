    //Nota Area
    document.querySelector('.buttonNot').addEventListener('click', createInput)
    document.querySelector('.buttonNot').addEventListener('click', createInput2)
    let notaField = document.querySelector('.input-nota');
    let romField = document.querySelector('.input-rom');
    let scrollBarNota = document.querySelector('.areaNot1');
    let scrollBarRom = document.querySelector('.areaRom1');

    // Campos de input
    let quantidadeAtualNot1 = document.querySelectorAll('.input-area-1 input').length;
    let quantidadeAtualNot2 = document.querySelectorAll('.input-area-2 input').length;
    let quantidadeAtualRom1 = document.querySelectorAll('.input-area-3 input').length;
    let quantidadeAtualRom2 = document.querySelectorAll('.input-area-4 input').length;

function createInput(){
dfdfdf
    scrollBarNota.style.overflow = 'auto'
    let value = Number(notaField.value);


    if(value > 0 && value < 10000) {

    if (quantidadeAtualNot1 + value > 10000 && quantidadeAtualNot2 + value > 10000) {
        alert('❌ A quantidade de campos criados foi excedida!');
        notaField.value = '';
        return;
    }

         for(let i = 1; i <= value; i++){
            let createNot1 = document.createElement('input');
            createNot1.placeholder = `Cód n°${quantidadeAtualNot1 + i}`;
            createNot1.type = "number";
            createNot1.label = "number";
            document.querySelector('.input-area-1').appendChild(createNot1);
        } 

        quantidadeAtualNot1 += value;

         alert(`${value} 👍 Campos criados com sucesso!`)  
    }
     else if( value >= 10000 ) {
        alert('❌ Quantidade acima do permitido!')
    } else {
        alert('❌ Digite um número válido')
    }
};

function createInput2(){

    let value = Number(notaField.value);

    if(value > 0 && value < 10000) {
        for(let j = 1; j <= value; j++){
            let createNot2 = document.createElement('input');
            createNot2.placeholder = `Qtd n°${quantidadeAtualNot2 + j}`;
            createNot2.type = "number";
            document.querySelector('.input-area-2').appendChild(createNot2);

        }
        quantidadeAtualNot2 += value;

}
         notaField.value = '';
};

//Romaneio Area

document.querySelector('.buttonRom').addEventListener('click', createInputRom)

function createInputRom(){
    scrollBarRom.style.overflow = 'auto'

    let value = Number(romField.value);

        if(value > 0 && value < 10000) {
        if (quantidadeAtualRom1 + value > 10000 && quantidadeAtualRom2 + value > 10000) {
            alert('❌ A quantidade de campos criados foi excedida!');
            romField.value = '';
            return;
        }
            for(let n = 1; n <= value; n++){
            let createRom1 = document.createElement('input');
            createRom1.placeholder = `Cód n°${quantidadeAtualRom1 + n}`;
            createRom1.type = "number";
            document.querySelector('.input-area-3').appendChild(createRom1);
   }
        quantidadeAtualRom1 += value;

    alert(`${value} 👍 Campos criados com sucesso!`)
    } else if( value >= 10000 ) {
        alert('❌ Quantidade acima do permitido!')
    } else {
        alert('❌ Digite um número válido')
    }
};

document.querySelector('.buttonRom').addEventListener('click', createInputRom2)

function createInputRom2(){

    let value = Number(romField.value);

    if(value > 0 && value < 10000) {
        for(let p=1; p <= value; p++){
                let createRom2 = document.createElement('input');
                createRom2.placeholder = `Qtd n°${quantidadeAtualRom2 + p}`;
                createRom2.type = "number";
                document.querySelector('.input-area-4').appendChild(createRom2);
        }
        quantidadeAtualRom2 += value;
}
    romField.value = '';
};

//Execution Area

function getNota(){
    const codigos = document.querySelectorAll('.input-area-1 input');
    const quantidades = document.querySelectorAll('.input-area-2 input');

    let nota = {};

    codigos.forEach((input, index) =>{
        let codigo = input.value.trim();
        let qtd = Number(quantidades[index].value);

        if(codigo && qtd >= 0){
            nota[codigo] = (nota[codigo] || 0) + qtd;
        }
    })

    return nota
};

function getRomaneio() {
    const codigos = document.querySelectorAll('.input-area-3 input');
    const quantidades = document.querySelectorAll('.input-area-4 input');

    let romaneio = {};

    codigos.forEach((input, index) => {
        let codigo = input.value.trim();
        let qtd = Number(quantidades[index].value);

        if (codigo && qtd >= 0) {
            romaneio[codigo] = (romaneio[codigo] || 0) + qtd;
        }
    });

    return romaneio;
};

// Verification area

document.querySelector('.verify').addEventListener('click', verify);

function verify(){
    let romaneio = getRomaneio();
    let nota = getNota();

    let tudoCerto = true;
    
    let erros = [];
    
    for(let codigo in romaneio){
        
                if(!(codigo in nota)){
                    tudoCerto = false;
                    erros.push(`❌ Código: ${codigo} não consta na nota`)
                }
            }

        for(let codigo in nota) {
            
        if (!(codigo in romaneio)) {
            tudoCerto = false;
            erros.push(`❌ Código: ${codigo} não consta no romaneio`);
        }
            
        else if(nota[codigo] !== romaneio[codigo]){
                tudoCerto = false;
            erros.push('⚠️ Atenção! Código: '+codigo+' \n\n - Quantidade no romaneio: '+romaneio[codigo]+'\n  -- Quantidade na nota: '+nota[codigo]);
        }
        }
        
    if(!tudoCerto){
      alert(erros.join('\n\n'))      
    } else{
    confetti({
    particleCount: 1000,
    spread: 500,
    origin: { y: 0.6 }
    });
        
    setTimeout(() => {alert('✅ A nota e romaneio estão em conformidade!')}, 200);
        
};
    return nota;
};    


// Clear Area

document.querySelector('.clear').addEventListener('click', clear);

function clear() {
    if(confirm("Deseja limpar todos os campos?")){
        if(confirm("Ao fazer isso, todos os dados não salvos serão perdidos, deseja continuar?")){
        alert('✅ Campos limpos!')
        limparPares('.input-area-1 input', '.input-area-2 input');
        limparPares('.input-area-3 input', '.input-area-4 input');
    }
    }
}

function limparPares(selectorCod, selectorQtd) {
    const codigos = document.querySelectorAll(selectorCod);
    const qtds = document.querySelectorAll(selectorQtd);

    codigos.forEach((cod, index) => {
        const qtd = qtds[index];
            cod.value = '';
            qtd.value = '';
    });
}


//Salvar estado

function saveData() {

    let nota = getNota();
    let romaneio = getRomaneio();

    let dados = {
        nota,
        romaneio
    };

    let json = JSON.stringify(dados);

    localStorage.setItem('content', json);

    alert('✅ Salvo com sucesso!');
}

function getData() {

    // pega do localStorage
    let salvo = localStorage.getItem('content');

    // transforma JSON em objeto novamente
    let dadosConvertidos = JSON.parse(salvo);

    // acessa os dados
    preencherCampos(
        '.input-area-1 input',
        '.input-area-2 input',
        dadosConvertidos.nota
    );

    preencherCampos(
        '.input-area-3 input',
        '.input-area-4 input',
        dadosConvertidos.romaneio
    );

    alert('✅ Carregado com sucesso!');
}

function preencherCampos(area1, area2, objeto) {

    let campo1 = document.querySelectorAll(area1);
    let campo2 = document.querySelectorAll(area2);

    // pega as chaves do objeto
    let codigos = Object.keys(objeto);

    codigos.forEach((codigo, index) => {

        campo1[index].value = codigo;

        campo2[index].value = objeto[codigo];

    });
}

document.querySelector('.buttonSave').addEventListener('click', saveData);

document.querySelector('.buttonGet').addEventListener('click', getData);



// Remoção do warning
let warning = document.querySelector('.warning');
let x = document.querySelector('.x');

x.addEventListener('click', erase);

function erase() {
    warning.remove()
}