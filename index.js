function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested');
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('ranked-list'); 
 
for (let i = 0; i < rankedLists.length; i++) {
  var currentNode = rankedLists[i];
  var children = currentNode.children;
  console.log(currentNode);
  console.log(children);
  for (var j = 0; j<children.length; j++) {
     var currentItem = children[j];
     console.log(currentItem.innerHTML);
     currentItem.innerHTML = 3+parseInt(currentItem.innerHTML);
     console.log(currentItem.innerHTML);
       }
   }
}

function deepestChild() {
  
}

increaseRankBy(3);