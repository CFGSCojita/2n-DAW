import vocabulariAnimals from "./vocabulariAnimals";
import { vocabulariPreguntes, vocabulariMenjars } from "./vocabulariAnimals";

export function fetchVocabulariAnimals() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(vocabulariAnimals)
        }, 1000)
    })
}

export function fetchVocabulariPreguntes() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(vocabulariPreguntes)
        }, 1000)
    })
}

export function fetchVocabulariMenjars() {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(vocabulariMenjars)
        }, 1000)
    })
}