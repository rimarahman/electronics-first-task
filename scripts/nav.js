document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeButton = document.getElementById("closeButton");
  const closeDrawer = document.getElementById("closeDrawer");
  const overlay = document.getElementById("overlay");
  const searchIcon = document.getElementById("searchIcon");
  const searchInput = document.getElementById("searchInput");
  const headerbottomMenuContainer = document.getElementById("headerbottomMenuContainer");
  const searchExpand = document.getElementById("searchExpand");
  
  const desktopMenuElement = document.getElementById("desktopMenu");
  const pcMenuElement = document.getElementById("pcMenu");

  mobileMenuButton.addEventListener("click", function () {
    if (!mobileMenu.classList.contains("open-menu")) {
      mobileMenu.classList.add("open-menu");
      overlay.style.display = "block";
    } else {
      mobileMenu.classList.remove("open-menu");
      overlay.style.display = "none";
    }
  });
  closeDrawer.addEventListener("click", function () {
    if (mobileMenu.classList.contains("open-menu")) {
      mobileMenu.classList.remove("open-menu");
      overlay.style.display = "none";
    }
  });
  overlay.addEventListener("click", function () {
    if (mobileMenu.classList.contains("open-menu")) {
      mobileMenu.classList.remove("open-menu");
      overlay.style.display = "none";
    }
    if (desktopMenuElement.classList.contains("show-desktop-menu")) {
      desktopMenuElement.classList.remove("show-desktop-menu");
      overlay.style.display = "none";
    }
  });

  pcMenuElement.addEventListener("click", ()=> {
    if (!desktopMenuElement.classList.contains("show-desktop-menu")) {
      desktopMenuElement.classList.add("show-desktop-menu");
      pcMenuElement.classList.add("active");
      searchIcon.classList.add("active");
      overlay.style.display = "block";
    }else {
      desktopMenuElement.classList.remove("show-desktop-menu");
      overlay.style.display = "none";
    }
  })
  
  searchIcon.addEventListener("click", ()=> {
    searchExpand.classList.add("searchExpandShow");
    searchInput.classList.add("searchInputActive");
    headerbottomMenuContainer.style.background = "none";
  })
  closeButton.addEventListener("click", ()=> {
    searchExpand.classList.remove("searchExpandShow");
    headerbottomMenuContainer.style.background = "linear-gradient(to right, #08131a, #36434c)";
    searchInput.classList.remove("searchInputActive");
  })
});
