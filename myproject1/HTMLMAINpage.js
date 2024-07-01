let HTMLBox = document.getElementById("HTMLBox");
      let HTMLButton = document.getElementById("HTMLButton");
      HTMLButton.onclick = function () {
        HTMLBox.select();
        document.execCommand("copy");
        HTMLButton.innerText = "Codes Copied";
      };