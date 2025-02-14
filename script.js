 let colorSelect = document.getElementById("colorSelect");
      let removeBtn = document.getElementById("removeBtn");

     removeBtn.addEventListener("click", () => {
  let selectedIndex = colorSelect.selectedIndex;
  if (selectedIndex !== -1) { 
    colorSelect.remove(selectedIndex);
  }
});