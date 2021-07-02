function initHeaderAndLeftMenuEl() {
  return {
    overlayCommonEl: document.getElementById("overlay-common"),
    leftMenuEl: document.getElementById("left-menu"),
  };
}

function addLeftMenuAndOverLayClass() {
  let $headerAndLeftMenuEl = new initHeaderAndLeftMenuEl();
  $headerAndLeftMenuEl.overlayCommonEl.style.display = "block";
  $headerAndLeftMenuEl.leftMenuEl.classList.add("left-menu-show");
}

function removeLeftMenuAndOverlayClass() {
  let $headerAndLeftMenuEl = new initHeaderAndLeftMenuEl();
  $headerAndLeftMenuEl.overlayCommonEl.style.display = "none";
  $headerAndLeftMenuEl.leftMenuEl.classList.remove("left-menu-show");
}

export { addLeftMenuAndOverLayClass, removeLeftMenuAndOverlayClass };
