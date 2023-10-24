function imccalc(){
   
    var form= document.getElementById("form");
    var nome= document.getElementById("nome").value;
    var peso= +form.peso.value;
    var altura= +form.altura.value;
    
 
     var imc= (peso/ (parseFloat(altura)*parseFloat(altura)))
     document.getElementById("imcres").innerHTML = ("IMC: " + nome + " seu IMC é "+ parseFloat(imc.toFixed(2)))
    
     if(imc< 16.9){alert("muito abaixo do peso")} 
     else if(imc> 17 && imc<= 18.4){alert("Abaixo do peso");}
      else if(imc> 18.5 && imc<= 24.9){ alert("Peso normal");}
       else if (imc> 25 && imc<= 29.9){ alert("Acima do peso");}
        else if(imc> 30 && imc<= 34.9){ alert("Obesidade grau 1");}
        else if(imc> 35 && imc<= 40){ alert("Obesidade grau 2");}
         else if(imc> 40){ alert("Obesidade grau 3");};
    }
    