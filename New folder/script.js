document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    const products = {
        1: {
            name: 'غذای خشک مخصوص قناری',
            image: 'images/product1.jpg',
            price: 'قیمت: 140.000 تومان',
            description: 'فواید محصول : بهبود فرایند رشد  -  بهبود قوای بدن '
        },
        2: {
            name: 'غذای عروس هلندی مفید',
            image: 'images/product2.jpg',
            price: 'قیمت: 120.000 تومان',
            description: 'فواید محصول:دارای تعادل فرمول غذا بر اساس نیازهای تخصصی خانواده پاراکیت ها'
        },
        3: {
            name: 'غذای خشک بلدرچین مای برد مدل پلت',
            image: 'images/product3.jpg',
            price: 'قیمت: 170.000 تومان',
            description: ' فواید محصول:بهبود سلامت مو - بهبود فرایند رشد    '
        },
        4: {
            name: 'غذای کاسکو گرین فیل مدل ',
            image: 'images/product4.jpg',
            price: 'قیمت: 180.000 تومان',
            description: 'فواید محصول: بهبود فرایند رشد  - بهبود قوای بدن '
        }
    };

    if (products[productId]) {
        const product = products[productId];
        document.getElementById('product-name').textContent = product.name;
        document.getElementById('product-image').src = product.image;
        document.getElementById('product-price').textContent = product.price;
        document.getElementById('product-description').textContent = product.description;
    } else {
        document.getElementById('product-details').innerHTML = '<p>Product not found.</p>';
    }
});
