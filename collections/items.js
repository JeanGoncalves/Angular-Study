var items = [{
    name: "Item 1"
}, {
    name: "Item 2"
}];

for (var i = 0; i < items.length; i++) {
    var item = items[i];
}

document.body.innerHTML = item.name;