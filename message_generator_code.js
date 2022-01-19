// to generate random number
const randomMessage = (num) => {
    return Math.floor(Math.random() * num);
};

// lab stuff to use in our sentence
const labThings = {
    labInstruments: ['Thermocycler', 'Centrifuge', 'Electrophoresis chamber', 'Nanoquant'],
    labTasks: ['PCR', 'Westernblot', 'RNA extraction', 'DNA extraction', 'Real-Time PCR'],
    labConsumables: ['Eppendorf tubes', 'Micropippete tips', 'Cell culture medium', 'Nitrile gloves']
};

// to store our sentence in an array
let labSentence = [];

// iterate over the object on labThings
for (let thing in labThings) {
    let optionIdx = randomMessage(labThings[thing].length);

// use object's properties to create a message
    switch (thing) {
        case 'labObjects':
            labSentence.push(`Today, you will use the "${labInstruments[thing][optionIdx]}" for your experiment.`);
            break;
        case 'labTasks':
            labSentence.push(`Todoay is a great day for to do "${labTasks[thing][optionIdx]}".`);
            break;
        case 'labConsumables':
            labSentence.push(`Oh unfortunately the "${labConsumables[thing][optionIdx]}" are over, you will have to notify the laboratory manager.`);
            break;
        default:
            labSentence.push('There is no enough info.');
    }    
}
