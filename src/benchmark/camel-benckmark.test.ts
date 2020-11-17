import {createMasiveSnakeObject} from './payload-generator';
import {mutableTransformer} from '../transformers/mutable-transformer';
import {allocatorTransformer} from '../transformers/allocator-transformer';
import {convertPayloadKeys} from '../payload-transformer';
import {camelCase} from '../cases/conversion-cases';

const maxDeepLevel = 30;

it('New method', () => {
    const test = createMasiveSnakeObject(maxDeepLevel);
    const start = Date.now();
    mutableTransformer(test, camelCase);
    console.log('New method took: ', Date.now() - start);
    
});

it('Gerson method', () => {
    const test = createMasiveSnakeObject(maxDeepLevel);
    const start = Date.now();
    convertPayloadKeys(test, "camelCase");
    console.log('Gerson method took: ', Date.now() - start);
});

it('React method', ()=> {
    const test = createMasiveSnakeObject(maxDeepLevel);
    const start = Date.now();
    allocatorTransformer(test, camelCase);
    console.log('React method took: ', Date.now() - start);
});
