const orderForm = document.getElementById('order-form');



orderForm.onsubmit = (e) => {
    e.preventDefault();

    alert('Clicked');
}