import {Sorter} from './Sorter';
import {NumbersCollection} from './NumbersCollection';
import {CharactersCollection} from './CharactersCollection';

const numbersCollection = new NumbersCollection([50, 3, -5, 0]);
const numberSorter = new Sorter(numbersCollection);
numberSorter.sort();
console.log(numberSorter.collection);

const charactersCollection = new CharactersCollection('Xaayb');
const charactersSorter = new Sorter(charactersCollection);

charactersSorter.sort();
console.log(charactersCollection.data);
