function introduction(name) {
    return `Hi, my name is ${name}.`;
}

function introductionWithLanguage(name,language="JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
function introductionWithLanguageOptional(name,language="JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

console.log(introductionWithLanguage("Aki"));
console.log(introductionWithLanguageOptional("Aki","Python"));
console.log(introduction("Aki"));
