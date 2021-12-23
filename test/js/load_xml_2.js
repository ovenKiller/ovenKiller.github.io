
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
    var table='';
    var x = xmlDoc.getElementsByTagName("LOCATION");
    for (i = 0; i <x.length; i++) {
     table+='<div class="gallery-item">';
     var imgNodes = x[i].getElementsByTagName("IMAGE")
     for(var j = 0; j < imgNodes.length; ++j){
       table+='<img src="';
       table+=(imgNodes[j].childNodes[0].nodeValue+'" alt="">')
     }
     table+='  <div class="hover-links"><p>'
     table+=(x[i].getElementsByTagName("DESCRIPTION")[0].childNodes[0].nodeValue)
     table+='</p></div></div>'
    }
    document.getElementById("sceney").innerHTML = table;
  }