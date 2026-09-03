import styles from './ProductCard.module.css';

export default function ProductCard({ product, onAddToCart }) {
    return (
        <div className={styles.card}>
            <img src={product.image} alt={product.title} className={styles.image} />
            <h3 className={styles.title}>{product.title}</h3>
            <p className={styles.price}>{product.price} сом</p>
            <button className={styles.btn} onClick={() => onAddToCart(product)}>
                Добавить в корзину
            </button>
        </div>
    );
}