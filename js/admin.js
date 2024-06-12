const token = localStorage.getItem('access_token');
if (!token) {
    window.location.href = 'index.html';
}

const form = document.getElementById('admin-form');
const output = document.getElementById('output');
const data = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const productName = document.getElementById('product-name').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;

    const obj = {
        productName,
        price,
        description
    };

    data.push(obj);
    renderData();
    form.reset();
});

function renderData() {
    output.innerHTML = '';
    const productHTML = data.map(item => {
        return `
            <div class="product">
                <div class="product-item">${item.productName}</div>
                <div class="product-item"><span>Price:</span> ${item.price}</div>
                <div class="product-item">${item.description}</div>
            </div>
        `;
    }).join('');
    output.innerHTML = productHTML;
}
