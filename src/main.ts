import {CoreHuman} from './enties/CoreHuman'

export function teste(){
    let core = new CoreHuman()
    core.withSpouse = true
    core.age = 36
    console.log(core);
    return "Express Entry Calculator";
}

teste();