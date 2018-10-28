var superHeroes = [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": [
        "Radiation resistance",
        "Turning tiny",
        "Radiation blast"
      ]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    }
  ]

  function power(superHeroes,name){
        if( name == superHeroes[0].name  ){
             return superHeroes[0].powers.join(',');
        }
        else{
            return `${name} is not in the list`;
        }

  }
  console.log(power(superHeroes,'Molecule Man'))