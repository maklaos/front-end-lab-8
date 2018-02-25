var rootNode = document.getElementById("root");

// Your code goes here

var tree = document.createElement('div');


function CreateTree(structure, node){
  var ul = document.createElement('ul');
  node.appendChild(ul);

  for (var i = 0; i < structure.length; i++){
    var li = document.createElement('li');
    ul.appendChild(li);

    var div = document.createElement('div');
    li.append(div);

    var icon = document.createElement('i');
    icon.classList.add('material-icons');
    div.appendChild(icon);

    var span = document.createElement('span');
    span.append(structure[i].title);
    div.appendChild(span);

    if (structure[i].folder) {
      div.setAttribute('onclick','toggleVisible(this)');
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

function toggleVisible(el) {
  var folderImage = el.childNodes[0];
  var children = el.parentElement.childNodes[1];

  children.classList.toggle('visible');

  if (folderImage.innerHTML === "folder") {
    folderImage.innerHTML = "folder_open";
  } else {
    folderImage.innerHTML = "folder";
  }
}

CreateTree(structure, tree);

rootNode.appendChild(tree);
