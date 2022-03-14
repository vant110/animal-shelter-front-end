function addLink() {
    var body_element = document.getElementsByTagName('body')[0];
    var selection = window.getSelection();
    //Итоговый скопированный текст
    var copytext = selection + "\n" + document.location.href;
    var newdiv = document.createElement('div');
    newdiv.style.position = 'absolute';
    newdiv.style.left = '-99999px';
    body_element.appendChild(newdiv);
    newdiv.innerText = copytext;
    selection.selectAllChildren(newdiv);
    window.setTimeout(function() {
      body_element.removeChild(newdiv);
    }, 0);
  }
  
  document.oncopy = addLink;