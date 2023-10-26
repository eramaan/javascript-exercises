const getTheTitles = function(books) {
    let titles = []

    for (let key in books) {

    titles.push(books[key].title)
}
    return titles

};

// Do not edit below this line
module.exports = getTheTitles;
