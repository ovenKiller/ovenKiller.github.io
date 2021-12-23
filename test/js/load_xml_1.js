
  window.onload = loadXMLDoc
  function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        myFunction(this);
      }
    };
    xhttp.open("GET", "xml/info.xml", true);
    xhttp.send();
  }
  function myFunction(xml) {
    var xmlDoc = xml.responseXML;
    var table='<div class="col-xl-6 p-0"><div class="gallery-single-text"><h2>自我介绍</h2><ul><li><span>姓名:</span>';
    var x = xmlDoc.getElementsByTagName("INFO");
    table = table +  x[0].getElementsByTagName("NAME")[0].childNodes[0].nodeValue +
      '<br><br></li><li><span>学号:</span>' + 
      x[0].getElementsByTagName("SCHOOLID")[0].childNodes[0].nodeValue +
      '<br><br></li><li><span>班级:</span>'+ 
      x[0].getElementsByTagName("CLASS")[0].childNodes[0].nodeValue +
      '<br><br></li></ul><p>';
      p =  x[0].getElementsByTagName("INTRODUCTION")[0].getElementsByTagName("p");
      for(var i = 0; i < p.length;++i){
        table+=(p[i].childNodes[0].nodeValue + '<br><br>');
      }
      x[0].getElementsByTagName("INTRODUCTION")[0].childNodes[0].nodeValue + 
      '</p>   </div> </div>'
    document.getElementById("self_description").innerHTML = table;
  }