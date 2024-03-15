function previousPage() {
  // Lấy id của form hiện tại
  var currentFormId = document.activeElement.closest("form").id;
  // Lấy số thứ tự của trang hiện tại
  var currentPageIndex = parseInt(currentFormId.replace("page", ""));
  // Tính id của trang trước đó
  var previousPageIndex = currentPageIndex - 1;
  // Chuyển sang trang trước đó
  window.location.href = "page" + previousPageIndex + ".html";
}
