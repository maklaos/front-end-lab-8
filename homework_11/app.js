var rootNode = document.getElementById("root");

// Your code goes here

var tree = document.createElement('div');


function CreateTree(structure, node){
  var ul = document.createElement('ul');
  node.appendChild(ul);

  for (var i = 0; i < structure.length; i++){
    var li = document.createElement('li');
    ul.appendChild(li);

    var span = document.createElement('span');
    li.append(span);

    var icon = document.createElement('i');
    icon.classList.add('material-icons');

    span.appendChild(icon);
    span.append(structure[i].title);

    if (structure[i].folder) {
      span.setAttribute('onclick','toggleVisible(this)');
      icon.innerHTML = "folder";
      icon.classList.add('folder');

      if (structure[i].children) {
        CreateTree(structure[i].children, li);
      } else {
        var ul = document.createElement('ul');
        li.appendChild(ul);

        var li = document.createElement('li');
        li.innerHTML = 'Folder is empty';

        ul.appendChild(li);
      }
    } else {
      icon.innerHTML = "insert_drive_file";
    }
  }
}

function toggleVisible(el){
  el.parentElement.childNodes[1].classList.toggle('visible');

  var folder = el.childNodes[0];

  if (folder.innerHTML == "folder") {
    folder.innerHTML = "folder_open";
  } else {
    folder.innerHTML = "folder";
  }
}

CreateTree(structure, tree);

rootNode.appendChild(tree);
