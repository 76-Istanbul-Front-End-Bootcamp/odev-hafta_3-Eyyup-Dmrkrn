class newAnimal{
  constructor(name, animalURL ){
    this.name = name;
    this.animalURL = amimalURL;
  }
  
  action(){
    document.getElementById(this.actionSoundName).play();
  }
  
  putInTheDocument(){
    var petsTable = document.getElementById("petsTable");
    var petTR = document.createElement("tr");

    var petNameTD = document.createElement("td");
    petNameTD.textContent = this.name;
    petTR.appendChild(petNameTD);

    var petLegsTD = document.createElement("td");
    petLegsTD.textContent = this.legs;
    petTR.appendChild(petLegsTD);

    var petActionTD = document.createElement("td");
    var petActionTDButton = document.createElement("button");
    petActionTDButton.textContent = this.actionText;
    petActionTD.appendChild(petActionTDButton);
    petTR.appendChild(petActionTD);

    petActionTDButton.onclick = this.action.bind(this);
    petsTable.querySelector("tbody").appendChild(petTR)
    
    /* 
    function change(){
      imageURL = document.getElementById("idImg");
      imageURL.src= this.idImg;
    }
    const ImageURL = document.querySelector("idImg"); 
    ImageURL.addEventListener("click", change);
  }
  */

  }
}

class Cat extends newAnimal {
  constructor(name, animalURL){
    super(name, animalURL);
    this.legs = 4;
    this.actionText = "Meoow"
    this.actionSoundName = "meow"
    this.idImg ="catId";
  }
}

class Monkey extends newAnimal{
  constructor(name,animalURL){
    super(name,animalURL);
    this.legs = 2;
    this.actionText = "Scream";
    this.actionSoundName = "scream";
    this.idImg = "monkeyId";
  }
}

const objMonkey = new Monkey("Charlie");
objMonkey.putInTheDocument();

const objCat = new Cat("Mila");
objCat.putInTheDocument();