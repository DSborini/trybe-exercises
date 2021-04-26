const wakeUp = () => console.log('Acordando!!');
const goCoffe = () => console.log('Bora tomar café!!');
const goSleep = () => console.log('Partiu dormir!!');

const doingThings = (funcao) => funcao();

doingThings(wakeUp);