const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//------------------------------------------------------------
  const addKey = (obj, key, value) => obj[key] = value;

addKey(lesson2, "turno", "manhã");

// console.log(lesson2);

//------------------------------------------------------------
  const listKeys = (obj) => Object.keys(obj);
      
// console.log(listKeys(lesson1));

//------------------------------------------------------------
  const size = (obj) => Object.keys(obj).length;

// console.log(size(lesson1));

//------------------------------------------------------------
  const valueOf = (obj) => Object.values(obj);

// console.log(valueOf(lesson1));

//------------------------------------------------------------
