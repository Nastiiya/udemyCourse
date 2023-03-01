const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            ruby : '30%'
        },
        exp: '3 month'
    },

    showAgeAndLangs: function (object){
        let {languages} = personalPlanPeter.skills;
        let upperLangs = "";

        languages.forEach(val => {
            upperLangs += val.toUpperCase() + " ";
        });
        return `I'm ${personalPlanPeter.age} and I speak ${upperLangs}`;
    }
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));


function showExperience(object) {
    let {exp} = personalPlanPeter.skills;
    return exp;
}
console.log(showExperience(personalPlanPeter));


function showProgrammingLangs(object) {
    let str = "";
    let {programmingLangs} = personalPlanPeter.skills;

    for(let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }
    return str;
}
console.log(showProgrammingLangs(personalPlanPeter));