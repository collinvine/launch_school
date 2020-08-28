const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?';

/*
// this doesn't work because the regex will
find all the matches, but it needs to be 
more exact

let findAMatch = (word, string) => {
    let re = new RegExp(word, "gi");
    
    let matches = string.match(re);

    return matches.length;
}

*/

let searchWord = (word, string) => {
    let words = string.split(' ');

    let matches = words.filter(item => item.toLowerCase() === word.toLowerCase());    
    
    return matches.length;
}


console.log(searchWord('sed', text));
console.log(searchWord('est', text));
console.log(searchWord('est,', text));