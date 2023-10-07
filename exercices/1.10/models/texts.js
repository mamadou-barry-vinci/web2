// eslint-disable-next-line import/no-extraneous-dependencies
const { v4: uuidv4 } = require('uuid');
const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/texts.json');

function readAllTexts(level) {
    const allTexts =  parse(jsonDbPath);
    if (level === undefined) return allTexts;
    if (level !== 'easy' && level !== 'medium' && level !== 'hard') return undefined;

    const filteredTexts = allTexts.filter(t => t.level === level);
    return filteredTexts;
}

function getTextId(id){
    const allTexts =  parse(jsonDbPath);
    const text = allTexts.find(t => t.id === id);
    return text;
}

function addtext(content, level){
    const texts = parse(jsonDbPath);
    if (level !== 'easy' && level !== 'medium' && level !== 'hard') return undefined;
    if (texts.find(t => t.content === content)) return undefined;

    const newText = {
        id: uuidv4(),
        content,
        level
    }

    texts.push(newText);
    serialize(jsonDbPath, texts);
    return newText;
}

function deleteText(id){
    const texts = parse(jsonDbPath);
    
    const indexText = texts.findIndex(t => t.id === id);

    if (indexText === undefined) return undefined;
    
    const textToDelete = texts[indexText];
    texts.splice(indexText, 1);
    serialize(jsonDbPath, texts);

    return textToDelete;
}

function updateText(id, content, level){
    const texts = parse(jsonDbPath);
    if (level !== 'easy' && level !== 'medium' && level !== 'hard') return undefined;

    const textIndex = texts.findIndex(t => t.id === id);
    console.log(textIndex);
    // need to create a new one if doesn't exist
    if (textIndex === -1) {
        
        return undefined;
    }

    const newText = {
        id : uuidv4(),
        content,
        level
    }

    texts[textIndex] = newText;
    serialize(jsonDbPath, texts);
    return newText
}

module.exports = {
    readAllTexts,
    getTextId,
    addtext,
    deleteText,
    updateText
};

