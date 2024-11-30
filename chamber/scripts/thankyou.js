//Selecting the const
const currentUrl = window.location.href;// Obtém o endereço completo da página atual.


//Dividindo a URL em duas partes, separando no ponto de interrogação "?" 
//para identificar as informações do usuário.
const everything=currentUrl.split('?') 


//Grab just the second half
let formData = everything[1].split('&') 
//everything[1]: Pegando a segunda parte com as informações do user. O número 1 representa a segunda parte pois a conta inicia em '0'.
//split('&'): O "&" é o que divide as informações, então vamos usar para dividir as informações em 7 partes.
//As informações serão armazenadas em um array (lista).


//Como as informações serão exibidas várias vezes dentro do <div id="results"></div>, 
//criamos uma função chamada 'show' para facilitar o acesso e manipulação desses dados.
function show(key) { //A função recebe o parâmetro 'cup', que é o nome do dado que queremos buscar.
    
    //Percorre/itera sobre cada elemento do array 'formData'.
    formData.forEach((element) => { 
        
        //Verifica se o elemento começa com o nome do parâmetro que procuramos (exemplo: "first", "email").
        if (element.startsWith(key)) { 

            //O resultado vai ser mostrado + replace('%40',"@") vai substituit o %40 por @ no email
            result=element.split('=')[1]
            .replace('%40',"@")
            .replace(/\+/g, " "); //removendo o + que tinha no location
        } //Fim do 'if'.
    })
    return(result)//Retorna o valor encontrado para quem chamou a função 'show'.
} //Fim da função 'show'.


//Exibindo as informações no elemento com id="results".
const showInfo = document.querySelector('#results') //A partir do <div id="results"></div>, vamos usar o js para mostrar as informações do user através de mensagem.
showInfo.innerHTML = `
<p>Appointment for ${show('first')} ${show("last")}</p>
<p>Proxy ${show("ordinance")} on ${show('fecha')} in the ${show('location')} Temple.</p>
<p>Your phone: ${show('phone')}</p>
<p>Your email: <a href="mailto:${show('email')}">${show('email')}</a></p>
`;
// Atualiza o conteúdo HTML do <div id="results"> com os dados formatados.
// Cada chamada para 'show()' busca e insere a informação correspondente: 
// - Nome e sobrenome do usuário ('first' e 'last').
// - Informações da procuração ('ordinance'), data ('fecha') e local do templo ('location').
// - Telefone ('phone') e e-mail ('email').