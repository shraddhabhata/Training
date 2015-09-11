function checkAnswer(value) {
  var type = typeof eval(value),
      correct   = false;

  // Even though null is a primitive type, it return 'object' with the typeof operator
  if (value === 'null') {
    type = 'null';
  }

  switch (type) {
    case 'function':
    case 'object':
      break;

    default:  
      correct = true;
  };
  
  return correct;
}

function calculateScore(correctAnswersParam, totalAnswersParam) {
   return Math.round(correctAnswersParam / totalAnswersParam * 100);
}

var myObj = Object.create(Object, (function() {
    var arrayValues = [];
    
    return {
        myProp: {
            get: function() {
                console.log(arrayValues);
                return arrayValues; 
            },
            set: function(x) {
                if (!isNaN(x) && isFinite(x) && (x > arrayValues[arrayValues.length - 1]) || arrayValues.length === 0) {
                   if (typeof x == 'number') { arrayValues.push(x); } 
                }
            },
        }
    }
})());

Object.seal(myObj);

/*function makeRequest()
{
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if(xmlHttp.readyState === XMLHttpRequest.DONE) {
      if(xmlHttp.status == 200) {
        document.getElementById('myDiv').innerHTML = xmlHttp.responseText;
      }
    }
    xmlHttp.open("GET", "http://www.google.com", true);
    xmlHttp.send();
  }*/


function myFunc(cb) {    
      var oRequest = new XMLHttpRequest();
      oRequest.addEventListener('load', function() {
        console.log('loaded!');
        cb(oRequest.responseText);        
      });
      //cb(d);
      oRequest.open('GET', 'http://httpbin.org/user-agent');
      oRequest.send();
      console.log("request sent");
      return myFunc;
};

