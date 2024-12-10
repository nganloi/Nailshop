
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
