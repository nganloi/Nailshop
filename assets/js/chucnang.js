
//==============//

//Chức năng tăng giảm số lượng sản phẩm//

// Lấy tất cả các container chứa chức năng tăng/giảm
const containers = document.querySelectorAll('#quantity-product');

containers.forEach(container => {
    // Lấy các phần tử con trong từng container
    const minusButton = container.querySelector('.sp-minus .ddd');
    const plusButton = container.querySelector('.sp-plus .ddd');
    const quantityInput = container.querySelector('.quantity-input');

    // Gán sự kiện click cho nút giảm
    minusButton.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value, 10);
        if (!isNaN(currentValue) && currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    // Gán sự kiện click cho nút tăng
    plusButton.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value, 10);
        if (!isNaN(currentValue)) {
            quantityInput.value = currentValue + 1;
        }
    });

    // Đảm bảo chỉ cho phép nhập số trong ô input
    quantityInput.addEventListener('input', () => {
        const cursorPosition = quantityInput.selectionStart;
        quantityInput.value = quantityInput.value.replace(/[^0-9]/g, '');
        quantityInput.setSelectionRange(cursorPosition, cursorPosition);    
    });
    
     // Đảm bảo giá trị tối thiểu là 1 khi mất focus
     quantityInput.addEventListener('blur', () => {
        if (quantityInput.value === '' || parseInt(quantityInput.value, 10) <= 0) {
            quantityInput.value = 1;
        }
    });
});
//Hết chức năng tăng giảm số lượng sản phẩm//


//CHỨC NĂNG HIỂN THỊ LOẠI SẢN PHẨM THEO TỪNG PRODUCT
document.addEventListener('DOMContentLoaded', async () => {
    const variantInput = document.getElementById('variant');
    const optionsList = document.getElementById('options');
    const quantityDisplay = document.getElementById('quantity');
    
    // Lấy ID từ đường link hiện tại
    const getProductIdFromURL = () => {
      const pathSegments = window.location.pathname.split('/'); // Tách URL theo từng dấu "/"
      // Lấy ID từ phần cuối của URL nếu không nằm trong query string
      return pathSegments[pathSegments.length - 1];
    };
  
    const productId = getProductIdFromURL();
    console.log('ID Product từ URL:', productId);
  
    // Fetch dữ liệu từ server
    const fetchProductData = async (id) => {
      try {
        if(id >=0){
          console.log('sodai',id)
          var response = await fetch(`/product/${id}?format=json`);
        }
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const product = await response.json();
        console.log('Dữ liệu sản phẩm:', product);
        return product;
      } catch (error) {
        console.error('Error fetching product data:', error);
        return null;
      }
    };
  
    let productData = []; // Biến lưu giữ dữ liệu sản phẩm
  
    const populateOptions = () => {
      optionsList.innerHTML = "";
  
      productData[0]?.classfy?.forEach(classfy => {
        const li = document.createElement('li');
        li.textContent = `${classfy.name}`;
        li.dataset.id = classfy.id;
        li.dataset.quantity = classfy.quantity;
  
        // Thêm sự kiện click cho mỗi li
        li.addEventListener('click', (e) => {
          const allLis = optionsList.querySelectorAll('li');
          
          // Loại bỏ border (style trực tiếp) ở tất cả các mục trước đó
          allLis.forEach(item => {
            item.style.border = 'none';
            item.style.backgroundColor = 'transparent';
          });
  
          // Thêm border trực tiếp vào mục được click
          e.target.style.border = '2px solid #543434';
          e.target.style.backgroundColor = '#e9d2cb';
  
          // Hiển thị thông tin số lượng nếu cần
          variantInput.value = e.target.dataset.id; 
          quantityDisplay.textContent = `Số lượng: ${classfy.quantity || 'Không xác định'}`;
        });
  
        optionsList.appendChild(li);
      });
    };
  
    const initialize = async () => {
        const product = await fetchProductData(productId);
        if (product?.[0]?.classfy) {
          productData = product;
          populateOptions();
        } else {
          console.error("Không thể lấy dữ liệu hoặc dữ liệu rỗng");
      }
      
    };
  
    await initialize();
  });
    