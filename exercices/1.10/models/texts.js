const { v4: uuidv4 } = require('uuid');
const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/texts.json');

/**
 * Function that gets all the text from a certain level
 * @param {String} level the level that we are looking for
 * @returns all the texts filtered by the level, undefined if there isn't
 */
function readAllTexts(level) {
    const allTexts =  parse(jsonDbPath);
    if (level === undefined) return allTexts;
    if (level !== 'easy' && level !== 'medium' && level !== 'hard') return undefined;

    const filteredTexts = allTexts.filter(t => t.level === level);
    return filteredTexts;
}

/**
 * Function that gets the text thanks to his id
 * @param {int} id the id of the text we are looking for
 * @returns the text, undefined if there is no match
 */
function getTextId(id){
    const allTexts =  parse(jsonDbPath);
    const text = allTexts.find(t => t.id === id);
    return text;
}

/**
 * Function that add a text in the list
 * @param {String} content the new content
 * @param {String} level the new level
 * @returns the new text added, undefined if the level is not good or if the content already exists
 */
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

/**
 * Function that deletes the text thanks to his id
 * @param {int} id the id of the text
 * @returns the text deleted, undefined if there is no match with the id
 */
function deleteText(id){
    const texts = parse(jsonDbPath);
    
    const indexText = texts.findIndex(t => t.id === id);

    if (indexText === undefined) return undefined;
    
    const textToDelete = texts[indexText];
    texts.splice(indexText, 1);
    serialize(jsonDbPath, texts);

    return textToDelete;
}

/**
 * Function that update the text matching the id
 * @param {int} id the id of the text we want to update
 * @param {String} content the new content
 * @param {String} level the new level
 * @returns the text with his new content and level, undefined if there is no match with the id
 */
function updateText(id, content, level){
    const texts = parse(jsonDbPath);
    if (level !== 'easy' && level !== 'medium' && level !== 'hard') return undefined;

    const textIndex = texts.findIndex(t => t.id === id);
    // need to create a new one if doesn't exist
    if (textIndex === -1) return undefined;

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

