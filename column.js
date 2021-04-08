export default class Column {
    constructor() {
        this.tokens = [];
    }
    add(playerTracker) { 
        this.tokens.push(playerTracker)
    }
    getTokenAt(row) {
    return this.tokens[row];    
    }
}

// monitor click event
//column game
// will check 
//index into this.tokens and return what was there
// will use:
column.getTokenAt(row)
//later