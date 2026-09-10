const prompt = require('prompt-sync')();
let etudien=[
    {prenom:"khadija",note:[14,15,8],agr:17},
    {prenom:"hiba",note:[15,3,4],agr:17},
    {prenom:"hafsa",note:[10,13,6],agr:17},
    {prenom:"adam",note:[5,3,2],agr:17},
    {prenom:"salma",note:[4,5,6],agr:17},
    {prenom:"jihan",note:[17,19,20],agr:17},
    {prenom:"widad",note:[11,15,4],agr:17}
]

function plusNote(){
    let max=0;
     let gran="";
    for(let i=0;i<etudien.length;i++){

        let valeur=0;
        let moyen=0;
        for(let j=0;j<3;j++){
               valeur  = valeur + etudien[i].note[j] ;
        }
        moyen=valeur/3;
        
                if(moyen>max){
                  max=moyen;
                   gran=etudien[i].prenom;
                }
    }
    console.log(gran);
    
}
plusNote();
alphabet=["khadija","hiba","naeima","hafsa","hanan","meriem"];
premierCaracter=[];
for(let i=0;i<alphabet.length;i++){

}