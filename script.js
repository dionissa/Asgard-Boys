function addItem() {
  const itemId = document.getElementById("item-id-input").value;
  if (itemId) {
    const itemList = document.getElementById("item-list");

    const itemLi = document.createElement("li");

    const itemImg = document.createElement("img");
    itemImg.src = `https://www.divine-pride.net/img/items/${itemId}.png`; // Ajuste esta URL de acordo com o padrão correto
    itemImg.alt = `Item ${itemId}`;
    itemImg.width = 50; // ajuste o tamanho conforme necessário

    itemLi.appendChild(itemImg);
    itemList.appendChild(itemLi);
  }
}
