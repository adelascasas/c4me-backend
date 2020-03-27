const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');


let getRanking = html => {
    const $ = cheerio.load(html);
    ranks = [];
    ranks.push($('span.institution-info__ranking-number').text().substring(1));
    console.log(ranks);
}


fs.readFile('./colleges.txt',{encoding: 'utf8'}, (err,data) => {
    const colleges = data.split('\n');
    axios.get("https://www.timeshighereducation.com/world-university-rankings/washington-jefferson-college")
        .then(response => {
            getRanking(response.data);
    })
    .catch(error => {
        console.log(error)
    })
});

