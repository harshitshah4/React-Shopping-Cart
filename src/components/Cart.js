import React,{Component} from 'react';
import styles from '../styles/Cart.module.css';

function CartItem(props){
    
    return(
        <div className = {styles.item}>
            <p>{props.title}</p> 
            <p>{props.price}</p>
        </div>
        );
    
}

class Cart extends React.Component{
    constructor(props){
        super(props);
        
    }
    
    render(){
        return(
            <div>
                <h1>Cart</h1>
                <div className={styles.cart}>
                    {
                        this.props.cartList.map((cartItem)=>
                            <CartItem key={cartItem.id} title = {cartItem.title} price = {cartItem.price} />
                        )   
                    }

                </div>
            </div>
        )
    }
}

export default Cart;