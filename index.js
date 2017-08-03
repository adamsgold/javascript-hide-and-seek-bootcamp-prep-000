function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target')[0]
}

function increaseRankBy(n) {
   var lists = document.getElementsByClassName('ranked-list')
   for (let i = 0; i < lists.length; i++) {
     var items = lists[i].querySelectorAll('li')
     for (let j = 0; j < items.length; j++) {
       var item = items[j]
       item.innerHTML = parseInt(item.innerHTML) + n
     }
   }
}

function deepestChild() {
  var node = document.getElementById('grand-node')
  while (node.querySelector('div')) {
    node = node.querySelector('div')
  }
  return node
}
