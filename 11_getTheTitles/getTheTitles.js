const getTheTitles = function(books) {
    let titles = []

    for (let key in books) {

    titles.push(books[key].title)
}
    return titles

};


// their solution goes like that
// const getTheTitles = function (array) {
//     return array.map((book) => book.title);
//   };


// Do not edit below this line
module.exports = getTheTitles;
