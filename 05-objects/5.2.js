import PromptSync from "prompt-sync";
const prompt = PromptSync();
import {askTvSerie} from "./5.1.js";
/**
 * Randomizes a list of cast from an object
 * @param {Object} tvSerie - Object with name, productionYear and cast members
 * @returns - List of the same cast but in a random order
 */
function randomizeCast(tvSerie) {
    let copyActors = [...tvSerie.actors];
    let newCast = [];
    while (copyActors.length > 0) {
        let index = Math.floor(Math.random()*(copyActors.length));
        newCast.push(copyActors[index]);
        copyActors.splice(index,1);
    }
    return newCast;
    
}
const tvserie = askTvSerie();
console.log("This is the old cast for your favorite Tv serie: ");
console.log(JSON.stringify(tvserie.actors, null, 1));
console.log("This is the new cast for the next Tv serie: ");
console.log(JSON.stringify(randomizeCast(tvserie), null, 1));