let numero = document.querySelector("#digito")
let Converter = document.querySelector("#BtConverter")
let Libra = document.querySelector("#Libra")
let Dolar = document.querySelector("#Dolar")
let lim = document.querySelector("#trocado")

Converter.addEventListener("click",botao)
function botao(evt){
    let moeda = document.getElementsByName("moeda")
    for (var i = 0; i < moeda.length; i++) {
        if (moeda[i].checked ) {
           moedaEstrangeira = moeda[i].value
            // lim.textContent = moedaEstrangeira
        }        
      }
      let saldo = numero.value 

      switch(moedaEstrangeira){
        case "Dolar":
               lim.textContent = (saldo * 5.15).toFixed(2) + " Dólar americano"
        break
            
      case "Libra":
      lim.textContent = (saldo * 6.17 ).toFixed(2) + " Libra esterlina"
      break

      case "Euro": 
      lim.textContent = (saldo * 5.52).toFixed(2) + " Euro"
      break
      }

evt.preventDefault()    
}

let Limpar = document.querySelector("#BtLimpar")
Limpar.addEventListener("click", ativar)
function ativar(){
    lim.reset()
    
}
