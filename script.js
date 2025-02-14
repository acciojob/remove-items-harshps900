 let colorSelect = document.getElementById("colorSelect");
      let removeBtn = document.getElementById("removeBtn");

      removeBtn.addEventListener("click", () => {
        let selectedOption = colorSelect.value;
        for (let i = 0; i < colorSelect.options.length; i++) {
          if (colorSelect.options[i].value === selectedOption) {
            colorSelect.remove(i);
            break; 
          }
        }
      });