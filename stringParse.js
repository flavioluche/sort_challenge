//fonte https://stackoverflow.com/questions/1216505/how-to-parse-a-string-in-javascript

function parser(string) {
   netValue =  string.split('|')[2];
   return netValue;
}

console.log(parser('bar|$total|-200'));
