const prompt = require('prompt-sync')();
//Menu principal
function menuPrincipal(){
    console.log(`===============================`);
    console.log(`\tRAILWAY MANAGER`);
    console.log(`================================`);
    console.log(`1. Afficher les trajets `);
    console.log(`2. Acheter un ticket `);
    console.log(`3. Afficher les tickets `);
    console.log(`4. Annuler un ticket `);
    console.log(`5. Rechercher un ticket `);
    console.log(`6. Filtrer les trajets `);
    console.log(`7. Trier les trajets `);
    console.log(`8. Bonus — Statistiques `);
    console.log(`0. Quitter `);
}
//les trajets
const trips = [
    {
        id: 1,
        departure: "Safi",
        destination: "Youssoufia",
        departureTime: "07:30",
        arrivalTime: "08:30",
        price: 25,
        availableSeats: 50
    },
    {
        id: 2,
        departure: "Safi",
        destination: "Marrakech",
        departureTime: "08:00",
        arrivalTime: "10:30",
        price: 90,
        availableSeats: 50
    },
    {
        id: 3,
        departure: "Safi",
        destination: "Casablanca",
        departureTime: "09:00",
        arrivalTime: "13:00",
        price: 140,
        availableSeats: 50
    },
    {
        id: 4,
        departure: "Youssoufia",
        destination: "Marrakech",
        departureTime: "09:15",
        arrivalTime: "11:00",
        price: 65,
        availableSeats: 50
    },
    {
        id: 5,
        departure: "Youssoufia",
        destination: "Casablanca",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 110,
        availableSeats: 50
    },
    {
        id: 6,
        departure: "Marrakech",
        destination: "Casablanca",
        departureTime: "11:30",
        arrivalTime: "14:30",
        price: 120,
        availableSeats: 50
    },
    {
        id: 7,
        departure: "Marrakech",
        destination: "Rabat",
        departureTime: "12:00",
        arrivalTime: "16:00",
        price: 150,
        availableSeats: 50
    },
    {
        id: 8,
        departure: "Casablanca",
        destination: "Rabat",
        departureTime: "14:00",
        arrivalTime: "15:15",
        price: 40,
        availableSeats: 50
    },
    {
        id: 9,
        departure: "Casablanca",
        destination: "Kenitra",
        departureTime: "15:00",
        arrivalTime: "16:45",
        price: 55,
        availableSeats: 50
    },
    {
        id: 10,
        departure: "Rabat",
        destination: "Kenitra",
        departureTime: "16:00",
        arrivalTime: "16:45",
        price: 30,
        availableSeats: 50
    },
    {
        id: 11,
        departure: "Rabat",
        destination: "Fes",
        departureTime: "17:00",
        arrivalTime: "19:30",
        price: 95,
        availableSeats: 50
    },
    {
        id: 12,
        departure: "Kenitra",
        destination: "Fes",
        departureTime: "17:30",
        arrivalTime: "20:00",
        price: 85,
        availableSeats: 50
    },
    {
        id: 13,
        departure: "Fes",
        destination: "Meknes",
        departureTime: "08:30",
        arrivalTime: "09:20",
        price: 35,
        availableSeats: 50
    },
    {
        id: 14,
        departure: "Fes",
        destination: "Oujda",
        departureTime: "10:00",
        arrivalTime: "13:30",
        price: 130,
        availableSeats: 50
    },
    {
        id: 15,
        departure: "Meknes",
        destination: "Rabat",
        departureTime: "11:00",
        arrivalTime: "13:30",
        price: 80,
        availableSeats: 50
    },
    {
        id: 16,
        departure: "Meknes",
        destination: "Casablanca",
        departureTime: "12:00",
        arrivalTime: "15:00",
        price: 105,
        availableSeats: 50
    },
    {
        id: 17,
        departure: "Casablanca",
        destination: "El Jadida",
        departureTime: "16:30",
        arrivalTime: "18:00",
        price: 50,
        availableSeats: 50
    },
    {
        id: 18,
        departure: "El Jadida",
        destination: "Safi",
        departureTime: "18:30",
        arrivalTime: "20:30",
        price: 60,
        availableSeats: 50
    },
    {
        id: 19,
        departure: "Marrakech",
        destination: "Agadir",
        departureTime: "15:00",
        arrivalTime: "18:30",
        price: 100,
        availableSeats: 50
    },
    {
        id: 20,
        departure: "Agadir",
        destination: "Safi",
        departureTime: "19:00",
        arrivalTime: "22:00",
        price: 95,
        availableSeats: 50
    }
];
const tickets=[];
//Afficher les trajets
function afficherTrajets(){
     console.log (`========Trajets Disponibles=========`);
for(let i=0;i<trips.length;i++){
    if(trips[i].availableSeats !== 0){
    console.log(`# ${trips[i].id} ${trips[i].departure}--->${trips[i].destination}`);
    console.log(`Départ:${trips[i].departureTime}`);
    console.log(`Arrivée:${trips[i].arrivalTime}`);
    console.log(`Prix:${trips[i].price} DH`);
    console.log(`Places disponibles :${trips[i].availableSeats}\n `);
}
}
}
//acheter un ticket 
let idUnique= 0;
let seatNumber=0;
function acheterTicket (){
 let nomPassager=prompt("Entre le Nom du passager:")
 let  identifiantTrajet=Number(prompt("Identifiant du trajet: "));
 let trouvee=false
 let tripIndex;
for(let i=0;i<trips.length;i++){
    if(trips[i].id==identifiantTrajet){
         trouvee=true;
         tripIndex=i;
     }
                          
 }  
    if(trouvee ===false){      
           console.log("Trajet introuvable.");
        }
        else{
           let result=false; 
            for(let i=0;i<ticketAnnuler.length;i++){   
               if(ticketAnnuler.length!=0 && ticketAnnuler[i].tripId===identifiantTrajet){  
               result=true;
                 break;
              }
            }
  if(result){
      let ticket;
    // On récupère la place de l'ancien ticket annulé
       for(let i=0;i<ticketAnnuler.length;i++){
            if(ticketAnnuler[i].tripId==identifiantTrajet){  
                 trips[tripIndex].availableSeats--;
                 idUnique++;
                 ticket={
                 nomPassager: nomPassager,
                 tripId: identifiantTrajet,
                 id: idUnique,
                 seatNumber: ticketAnnuler[i].seatNumber,
                 price: ticketAnnuler[i].price};
                //afficher le ticket ajouter 
                 tickets.push(ticket);
                 console.log(`Ticket achete avec succes`);
                 ticketAnnuler.splice(i,1);
                 
                 break;
            }
       }
        
        }
        else
        {
            if(trips[tripIndex].availableSeats>0){
           
 //changer le nombre de place de le trajets saisie
    for(let i=0;i<trips.length;i++){
        if(trips[i].id==identifiantTrajet){
            trips[i].availableSeats--;
            
        }
    }
    // attribuer automatiquement un numéro de place 

    let TotalSeats=0;
    for(let i=0;i<tickets.length;i++){
     if(tickets[i].tripId==identifiantTrajet){
         TotalSeats+=1;   
      }
  }
      // attribuer automatiquement un numéro de place 
      seatNumber=TotalSeats+1; 
      idUnique++;
      //creer un ticket 
       let prix=trips[tripIndex].price;
      let ticket={
            nomPassager: nomPassager,
            tripId: identifiantTrajet,
           id: idUnique,
           seatNumber:  seatNumber,
           price: prix};
      //afficher le ticket ajouter 
      tickets.push(ticket);
      console.log(` Ticket acheté avec succès`);
  }
   else{
       console.log("Train complet");
   } }
   
     }
}
function afficherTickets(){
        console.log("\t========TICKETS========");
        console.log("*************************");
    if(tickets.length>0){
        for(let i=0;i<tickets.length;i++){
            console.log(`\tTicket#${tickets[i].id}`);
            console.log(`\tPassager:${tickets[i].nomPassager}`);
            for(let j=0;j <trips.length;j++){
                if(tickets[i].tripId==trips[j].id){
                    console.log(`\tTrajet:${trips[j].departure}--->${trips[j].destination}`);
                    break;
                }
            }
            console.log(`\tPlace:${tickets[i].seatNumber}`);
            console.log(`\tPrix:${tickets[i].price}DH\n`);
            console.log("*************************\n");
            }   
    }else{
        console.log("Aucun ticket enregistré. ");
    }
    }
const  ticketAnnuler=[];
function annulerTicket(){
 let saisitIdTicket=Number(prompt("Entre l'identifiant du ticket:"));
 let ticketIntrovable=false
 let idTrip ;
 for(let i=0; i<tickets.length;i++ ){
    if(saisitIdTicket==tickets[i].id){
        ticketIntrovable=true;
        ticketAnnuler.push(tickets[i]);
         idTrip=tickets[i].tripId,
        tickets.splice(i,1);
        console.log("Ticket annulé avec succès. ");
    }
    for(let i=0; i<trips.length;i++)
      {
        if(trips[i].id===idTrip)
        {
         trips[i].availableSeats++
        }
      }
 }
 if(ticketIntrovable==false){
    console.log("Ticket introuvable. ");
 }
}
//pour Rechercher un ticket 
function afficherUnTicket(ticket){
            console.log(`Ticket#${ticket.id}`);
            console.log(`Passager:${ticket.nomPassager}`);
            for(let j=0;j <trips.length;j++){
                if(ticket.tripId==trips[j].id){
                    console.log(`Trajet:${trips[j].departure}--->${trips[j].destination}`);
                    break;
                }
            }
            console.log(`Place:${ticket.seatNumber}`);
            console.log(`Prix:${ticket.price}DH`);
}
function rechercheTicket(){
    let nomPas=prompt("entre la nomde passager:").toLowerCase();
    let trov=false;
    for(let i=0 ; i<tickets.length;i++){
        if(tickets[i].nomPassager.toLowerCase()== nomPas){
            trov=true;
            afficherUnTicket(tickets[i]);
        }
    }
    if(trov==false){
        console.log("Aucun passager trouve");
    }
}
function filtrerTrajets(){
let villeDep=prompt("Ville de depart:").toLowerCase();
let trouveVille=false;
for(let i=0;i<trips.length;i++){
    if(trips[i].departure.toLowerCase()==villeDep){
        trouveVille=true;
        console.log(`${trips[i].departure}--->${trips[i].destination} :${trips[i].price}DH`);
    }
}
if(trouveVille==false){
    console.log("Ville de depart introuvable");
}
}
function trierTrajets(){
    let rest=0;
    for(let i=1; i<trips.length;i++){
        for(let j=0;j<trips.length-1;j++){
            if(trips[j].price>trips[j+1].price){
            rest=trips[j];
            trips[j]=trips[j+1];
            trips[j+1]=rest;
            }
        }
    }
    for(let i=0;i<trips.length;i++){
        console.log(`${trips[i].departure}--->${trips[i].destination} :${trips[i].price}DH`);

    }
}
function statistiques(){
    console.log("========Nombre total de tickets vendus========");
    if(tickets.length!==0){
    console.log(`Nombre total de tickets:${tickets.length}`)
    }else{
        console.log(`Aucun ticket vendu pour le moment.`);
    }
    console.log("========Chiffre d'affaires total ========");
            let sommer=0;
           for (let i=0 ;i<tickets.length;i++){
                  sommer+=tickets[i].price;
           }
           console.log(`Chiffre d'affaires total:${sommer} DH `);
    console.log("========Trajet le plus vendu ========");
    let valeurMin=trips[0].availableSeats;
    let valeurSommerTicket=0;
    let valeurDep=trips[0].departure;
    let valeurAri=trips[0].destination;
    for(let i=1;i<trips.length;i++){
        if(valeurMin>trips[i].availableSeats){
          valeurMin=trips[i].availableSeats;   
           valeurDep=trips[i].departure;
           valeurAri=trips[i].destination;
        } 
    }
    valeurSommerTicket=50-valeurMin;
    console.log("Trajet le plus vendu:");
    console.log(`${valeurDep}--->${valeurAri}`);
    console.log(`${valeurSommerTicket} tickets vendus`);


}

acheterTicketTest('khadija',1);
acheterTicketTest('hiba',3);
acheterTicketTest('salma',5);
acheterTicketTest('hafsa',1);
acheterTicketTest('wiam',8);
acheterTicketTest('khadija',9);

let choix;
do{
    menuPrincipal();
    choix=prompt(`Votre choix:`);
     switch(choix){
        case '1':
                 afficherTrajets() ;
            break;
         case '2':
            acheterTicket();
          break;
         case '3':
            afficherTickets();
          break;
         case '4':
            annulerTicket();
          break;
         case '5':
            rechercheTicket();
          break;
         case '6':
            filtrerTrajets();
          break;
        case '7':
            trierTrajets();
          break;
        case `8`:
            statistiques();
            break;
          default:
          console.log(`Choix invalide`);
     }
    
}while(choix!=='0');


// ajout automatique
function acheterTicketTest(nomPassager,identifiantTrajet){
 let trouvee=false
 let tripIndex;
for(let i=0;i<trips.length;i++){
    if(trips[i].id==identifiantTrajet){
         trouvee=true;
         tripIndex=i;
     }
                          
 }  
    if(trouvee ===false){      
           console.log("Trajet introuvable.");
        }
        else{
           let result=false; 
            for(let i=0;i<ticketAnnuler.length;i++){   
               if(ticketAnnuler.length!=0 && ticketAnnuler[i].tripId===identifiantTrajet){  
               result=true;
                 break;
              }
            }
  if(result){
      let ticket;
    // On récupère la place de l'ancien ticket annulé
       for(let i=0;i<ticketAnnuler.length;i++){
            if(ticketAnnuler[i].tripId==identifiantTrajet){  
                 trips[tripIndex].availableSeats--;
                 idUnique++;
                 ticket={
                 nomPassager: nomPassager,
                 tripId: identifiantTrajet,
                 id: idUnique,
                 seatNumber: ticketAnnuler[i].seatNumber,
                 price: ticketAnnuler[i].price};
                //afficher le ticket ajouter 
                 tickets.push(ticket);
                 console.log(`Ticket achete avec succes`);
                 ticketAnnuler.splice(i,1);
                 
                 break;
            }
       }
        
        }
        else
        {
            if(trips[tripIndex].availableSeats>0){
           
 //changer le nombre de place de le trajets saisie
    for(let i=0;i<trips.length;i++){
        if(trips[i].id==identifiantTrajet){
            trips[i].availableSeats--;
            
        }
    }
    // attribuer automatiquement un numéro de place 

    let TotalSeats=0;
    for(let i=0;i<tickets.length;i++){
     if(tickets[i].tripId==identifiantTrajet){
         TotalSeats+=1;   
      }
  }
      // attribuer automatiquement un numéro de place 
      seatNumber=TotalSeats+1; 
      idUnique++;
      //creer un ticket 
       let prix=trips[tripIndex].price;
      let ticket={
            nomPassager: nomPassager,
            tripId: identifiantTrajet,
           id: idUnique,
           seatNumber:  seatNumber,
           price: prix};
      //afficher le ticket ajouter 
      tickets.push(ticket);
      console.log(` Ticket acheté avec succès`);
  }
   else{
       console.log("Train complet");
   } }
   
     }
}