document.addEventListener("DOMContentLoaded", () => {
    const paginationElement = document.querySelector(".paginator-wrap");
    const totalPages = parseInt(paginationElement.dataset.totalPages, 10);
    let currentPage = parseInt(paginationElement.dataset.currentPage, 10);
    const pageType = paginationElement.dataset.pageType;
    const pagesContainer = document.querySelector(".paginator");
    const prevButton = pagesContainer.querySelector(".paginator__item--prev");
    const nextButton = pagesContainer.querySelector(".paginator__item--next");
  
    // Hàm tạo đường dẫn phân trang
    const createPageLink = (pageNumber) => {
      return `/admin/${pageType}/page/${pageNumber}`;
    };
  
    // Hàm cập nhật giao diện phân trang
    const updatePagination = () => {
      // Xóa các trang cũ, giữ lại nút Prev và Next
      Array.from(pagesContainer.children).forEach((child) => {
        if (!child.classList.contains("paginator__item--prev") && 
            !child.classList.contains("paginator__item--next")) {
          pagesContainer.removeChild(child);
        }
      });
  
      if (totalPages <= 1) {
        paginationElement.style.display = "none";
        return;
      }
  
      const startPage = Math.max(1, currentPage - 2);
      const endPage = Math.min(totalPages, currentPage + 2);
  
      for (let i = startPage; i <= endPage; i++) {
        const pageItem = document.createElement("li");
        pageItem.classList.add("paginator__item");
        if (i === currentPage) pageItem.classList.add("paginator__item--active");
  
        const pageLink = document.createElement("a");
        pageLink.href = createPageLink(i);
        pageLink.textContent = i;
  
        pageLink.addEventListener("click", (e) => {
          e.preventDefault();
          currentPage = i;
          updatePagination();
          window.location.href = createPageLink(currentPage);
        });
  
        pageItem.appendChild(pageLink);
  
        // Chèn trang mới vào giữa nút Prev và Next
        pagesContainer.insertBefore(pageItem, nextButton);
      }
  
      prevButton.classList.toggle("disabled", currentPage === 1);
      nextButton.classList.toggle("disabled", currentPage === totalPages);
    };
  
    prevButton.querySelector("a").addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage > 1) {
        currentPage--;
        updatePagination();
        window.location.href = createPageLink(currentPage);
      }
    });
  
    nextButton.querySelector("a").addEventListener("click", (e) => {
      e.preventDefault();
      if (currentPage < totalPages) {
        currentPage++;
        updatePagination();
        window.location.href = createPageLink(currentPage);
      }
    });
  
    updatePagination();
  });
  