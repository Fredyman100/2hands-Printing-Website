const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar && nav) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close && nav) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

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

// Initial calculation
document.getElementById('place-order-btn').addEventListener('click', function() {
    alert('Your order has been placed!');
    // You can add more order processing logic here
});

// Show delivery info modal
document.getElementById('delivery-info-link').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('delivery-info-modal').style.display = 'flex';
});
// Close modal
document.getElementById('close-delivery-info').addEventListener('click', function() {
    document.getElementById('delivery-info-modal').style.display = 'none';
});

<script>
document.getElementById('mobile').onclick = function() {
  var nav = document.getElementById('navbar');
  nav.classList.toggle('show-menu');
}
</script>
