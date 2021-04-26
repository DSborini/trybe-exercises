const info = (name) => {
    nameForMail = "";
    for (let index = 0; index < name.length; index++) {
        if (name[index] === " ") {
            nameForMail += "_";   
        } else {
            nameForMail += name[index];  
        }
    }
    return {
        name: name,
        email: `${nameForMail.toLowerCase()}@trybe.com`
    }
}

const newEmployees = () => {
    const employees = {
      id1: info("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
      id2: info("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
      id3: info("Carla Paiva") // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
    }
    return employees;
  };

console.log(newEmployees());
