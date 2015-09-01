// 1. Navigate to http://www.xe.com/iso4217.php
// 2. open Firebug's console and execute the statement 
iter = document.evaluate('//td[@class="tblBrdrLn"]/a', document);
elem = iter.iterateNext();
currencies = ''
while(elem !== null){
  if(elem.text.length == 3){
    currencies += ", '" + elem.text + "'";
  }
  elem = iter.iterateNext();
}
console.debug(currencies);
