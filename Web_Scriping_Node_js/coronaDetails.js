const request = require('request');
const cheerio = require('cheerio');


request("https://www.worldometers.info/coronavirus/" , cb);// cb function passed as parameter

function cb(error , response , html){
   if(error){
    console.log(error);
   }
else{
    handleHML(html);
}

}

// hadleHTML function will work with cheerio th scrap data using selectors from html

function handleHML(html){
    // in selectorTool are basically getting the whole html in cherrio's  format
  let selectorTool = cheerio.load(html); // getting html inside the selectorTool for apply the method of cheerio

  // get data of => (croronacase , deaths , recoveryCases)  all are these three data are available at inside same class(.maincounter-number) and same contariner(div)

  let covidData = selectorTool(".maincounter-number span"); // passing the .maincounter-number class and span for getting data from inside html function selectorTool(from cheerio.load(html))
  // covidData is a array now bcz .maincounter-number class used with three diffrent element (croronacase , deaths , recoveryCases) all are selectd now as an array formate provided by browser

//   for(let data of covidData){
//     // data is in html formate convert it text format using selectorTool text method provided by cheerio

//     let textData = selectorTool(data).text(); // text() method , html() method all are inside selectorTool provided by cheerio.load() 
//     console.log(textData); // all data will print as a text format
      
//   }
    let CroronaCases = selectorTool(covidData[0]).text();
    let covidDeaths = selectorTool(covidData[1]).text();
    let recoverCases = selectorTool(covidData[2]).text();
      
    console.log("CroronaCases ==> " + CroronaCases );
    console.log("covidDeaths ==> " + covidDeaths);
    console.log("recoverCases ==> " + recoverCases);
}







