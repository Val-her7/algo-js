import PromptSync from "prompt-sync";
const prompt = PromptSync();
/**
 * Regroups data about favorite TV series
 * @returns - Object with name, productionYear and cast members
 */
export function askTvSerie() {
    let serie = {};
    serie.name = prompt("What is the name of your favorite TV serie? ");
    serie.productionYear = Number(prompt("What is the production year of this TV serie? "));
    let numberOfActors = prompt("How many cast members do you remember? ");
    serie.actors = [];
    for (let i = 0; i < numberOfActors; i ++) {
        let actor = {};
        actor.firstName = prompt(`What is the firstname of the actor ${i+1}? `);
        actor.name = prompt(`What is the name of the actor ${i+1}? `);
        serie.actors.push(actor);
    }
    return serie;
}

//console.log(JSON.stringify(askTvSerie(), null , 1));


