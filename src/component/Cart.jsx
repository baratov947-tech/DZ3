import styles from './Cart.module.css';

export default function Cart({ cartItems }) {
    return (
        <div className={styles.cartContainer}>
            <h2>Корзина ({cartItems.length})</h2>

            {cartItems.length === 0 ? (
                <p className={styles.emptyText}>Корзина пока пуста</p>
            ) : (
                <div className={styles.cartList}>
                    {cartItems.map((item, index) => (
                        <div key={index} className={styles.cartItem}>
                            <img src={item.image} alt={item.title} className={styles.cartImg} />
                            <div>
                                <h4>{item.title}</h4>
                                <p>{item.price} сом</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}