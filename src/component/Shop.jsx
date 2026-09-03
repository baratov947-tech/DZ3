import { useState } from 'react';
import ProductCard from './ProductCard';
import Cart from './Cart';
import styles from './Shop.module.css';

export default function Shop() {
    const products = [
        { id: 1, title: 'Беспроводные наушники', price: 2500, image: 'https://images.unsplash.com/photo-1722665600826-f054f8fe6f44?q=80&w=771&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { id: 2, title: 'Умные часы', price: 4200, image: 'https://www.myphone.kg/cache/files/20717.webp_w800_h800_resize.webp?t=1775900929' },
        { id: 3, title: 'Игровая мышь', price: 1800, image: 'https://images.unsplash.com/photo-1605773527852-c546a8584ea3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtaW5nJTIwbW91c2V8ZW58MHx8MHx8fDA%3D' },
        { id: 4, title: 'Механическая клавиатура', price: 5500, image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVjaGFuaWNhbCUyMGtleWJvYXJkfGVufDB8fDB8fHww' },
        { id: 5, title: 'Портативная колонка', price: 3100, image: 'https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UG9ydGFibGUlMjBzcGVha2VyfGVufDB8fDB8fHww' },
        { id: 6, title: 'Рюкзак для ноутбука', price: 2200, image: 'https://images.unsplash.com/photo-1594299447935-e5b840f54b9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGFwdG9wJTIwYmFja3BhY2t8ZW58MHx8MHx8fDA%3D' }
    ];

    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        <div className={styles.shopContainer}>
            <h1>Интернет-магазин</h1>

            <div className={styles.productsGrid}>
                {products.map((item) => (
                    <ProductCard
                        key={item.id}
                        product={item}
                        onAddToCart={handleAddToCart}
                    />
                ))}
            </div>

            <Cart cartItems={cart} />
        </div>
    );
}