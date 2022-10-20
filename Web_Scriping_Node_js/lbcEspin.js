const request = require('request');
const cheerio = require('cheerio');


request(
  "https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary"
, cb);

function cb(error , response , html){
    if(error){
        console.log(error);
    }
     else{
        htmlHandler(html);
     }
}

// htmlHandler =>
function htmlHandler(html){
    let selectorTool = cheerio.load(html);
    
    let lastBollData = selectorTool(".ci-html-content.ds-py-2");
    
    

    let plainData =  selectorTool(lastBollData[0]).text();
    console.log(plainData);
}