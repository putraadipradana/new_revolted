      var navBar = document.getElementById("navBar");
      window.onscroll = function() {
        if (window.scrollY > 22) {
          navBar.classList.add("shadow-sm");
        } else {
          navBar.classList.remove("shadow-sm");
        }
      };
