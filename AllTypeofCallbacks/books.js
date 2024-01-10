
const books = [
    {
        title:"abc",
        author:"bfg",
        year:1970,
    },
    {
        title:"yeyec",
        author:"ghi",
        year:1990, 
    },
    {
        title:"ygeuyfgyec",
        author:"gmnbcmhi",
        year:1999, 
    },
];

function logTitles(titles){
    titles.sort();
    console.log(titles.join());
}

function extractfiles(books,callback){
    const title = books.map((book)=> book.title);
    callback(title);
}
extractfiles(books,logTitles);