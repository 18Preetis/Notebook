fetch("https://api.dictionaryapi.dev/api/v2/entries/en/Hello").then( (apidata) =>{
return apidata.json( );
})
.then( (actualdata) => {
console.log(actualdata.Countries[101]);
})
.catch((error) => {
console.log(error);
});