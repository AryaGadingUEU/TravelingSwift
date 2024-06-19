document.addEventListener("DOMContentLoaded", (event) => {
  const hargaPerItemInput = document.getElementById("harga-per-item");
  const quantityInput = document.getElementById("quantity");
  const hargaTotalInput = document.getElementById("harga-total");

  function updateHargaTotal() {
    const hargaPerItem = parseFloat(hargaPerItemInput.value) || 0;
    const quantity = parseInt(quantityInput.value) || 0;
    const hargaTotal = hargaPerItem * quantity;
    hargaTotalInput.value = hargaTotal.toFixed(2);
  }

  hargaPerItemInput.addEventListener("input", updateHargaTotal);
  quantityInput.addEventListener("input", updateHargaTotal);
});
