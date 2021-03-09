function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

function createDaysOfTheMonth () {
    const dezDays = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;
    const dezDaysList = document.getElementById("days");

    for (let index = 0; index < dezDays.length; index++) {
        const days = dezDays[index];
        const dayListItem = document.createElement("li");
        dayListItem.innerHTML = days;

        dezDaysList.appendChild(dayListItem);
    }
}

createDaysOfTheMonth();

function feriados(nomeBotao) {
    const pai = document.querySelector(".buttons-container")
    const botao = document.createElement("button");
    const botaoID = "btn-holiday";

    botao.innerHTML = nomeBotao;
    botao.id = botaoID;
    pai.appendChild(botao);
    
    
}

feriados("Feriados");