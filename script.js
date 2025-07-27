<script>
document.addEventListener("DOMContentLoaded", function () {
    // Toggle navigation menu
    const bar = document.getElementById('bar');
    const close = document.getElementById('close'); // optional close button
    const nav = document.getElementById('navbar') || document.querySelector('#nav-links ul');

    if (bar && nav) {
        bar.addEventListener('click', () => {
            nav.classList.toggle('active'); // or use 'show' depending on your CSS
        });
    }

    if (close && nav) {
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    }

    // Update cart total
    function updateCartTotal() {
        const rows = document.querySelectorAll('#cart-table tbody tr');
        let total = 0;
        rows.forEach(row => {
            const price = parseFloat(row.querySelector('.price').textContent);
            const qty = parseInt(row.querySelector('.qty').value);
            const subtotal = price * qty;
            row.querySelector('.subtotal').textContent = subtotal.toFixed(2);
            total += subtotal;
        });
        document.getElementById('cart-total').textContent = total.toFixed(2);
    }

    // Listen for quantity changes
    document.querySelectorAll('.qty').forEach(input => {
        input.addEventListener('input', updateCartTotal);
    });

    // Initial cart total calculation
    updateCartTotal();

    // Place order button
    const placeOrderBtn = document.getElementById('place-order-btn');
    if (placeOrderBtn) {
        placeOrderBtn.addEventListener('click', function() {
            alert('Your order has been placed!');
            // Add more logic here if needed
        });
    }

    // Show delivery info modal
    const deliveryLink = document.getElementById('delivery-info-link');
    const deliveryModal = document.getElementById('delivery-info-modal');
    const closeDelivery = document.getElementById('close-delivery-info');

    if (deliveryLink && deliveryModal) {
        deliveryLink.addEventListener('click', function(e) {
            e.preventDefault();
            deliveryModal.style.display = 'flex';
        });
    }

    if (closeDelivery && deliveryModal) {
        closeDelivery.addEventListener('click', function() {
            deliveryModal.style.display = 'none';
        });
    }
});
</script>
