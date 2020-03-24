const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');

const collegeCard = "https://api.data.gov/ed/collegescorecard/v1/schools.json?api_key=6PKYnV4rI5tGks4tAm0s0KKHTQLxON1Jf8hX6bU8&school.name=Stony+Brook+University&fields=id,school.name,latest.admissions.admission_rate.overall";

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

