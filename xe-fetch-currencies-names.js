// 1. Navigate to http://www.xe.com/iso4217.php
// 2. open Firebug's console and execute the statement 
iter = document.evaluate('//td[@class="tblBrdrLn"]', document);
elem = iter.iterateNext();
currencies = ''
while(elem !== null){
  if (elem.children.length == 1){
    child =  elem.children[0];
      if( child.localName === 'a' && child.text.length === 3){
        currencies += ", '" + child.text + "'";
      }
  }
  elem = iter.iterateNext();
}
console.debug(currencies);
