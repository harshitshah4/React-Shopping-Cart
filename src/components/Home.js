import React,{Component} from 'react';
import styles from '../styles/Home.module.css';
import List from './List';
import Cart from './Cart';
import Header from './Header';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {shoppingList:[{id:1,title:"Item1",price:30,isAdded:false},{id:2,title:"Item2",price:30,isAdded:false},{id:3,title:"Item3",price:30,isAdded:false},{id:4,title:"Item4",price:30,isAdded:false},{id:5,title:"Item5",price:30,isAdded:false},{id:6,title:"Item6",price:30,isAdded:false},{id:7,title:"Item7",price:30,isAdded:false},{id:8,title:"Item8",price:30,isAdded:false},{id:9,title:"Item9",price:30,isAdded:false},{id:10,title:"Item10",price:30,isAdded:false},{id:11,title:"Item11",price:30,isAdded:false},{id:12,title:"Item12",price:30,isAdded:false}],
        cartList:[]};
        this.handleAdd = this.handleAdd.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.find = this.find.bind(this);
    
    }
    componentDidMount(){
        console.log("Mounted");
    }
    find(id){
        const tempShopping = this.state.shoppingList;
        for(var i=0;i<tempShopping.length;i++){
            if(tempShopping[i].id == id){
                return i;
            }
        }
    }
    handleAdd(e){
        const tempShopping = this.state.shoppingList;
        const tid = e.target.id;
        const i = this.find(tid);
        let tempCart =  this.state.cartList;
        tempShopping[i].isAdded = true;
        tempCart.push(tempShopping[i]);
        this.setState({shoppingList:tempShopping,cartList:tempCart});
        e.preventDefault();
    }
    handleRemove(e){
        
        const tid = e.target.id;
        const i = this.find(tid);
        let tempCart =  this.state.cartList;
        const tempShopping = this.state.shoppingList;
        tempShopping[i].isAdded = false;
        this.setState({shoppingList:tempShopping});
        e.preventDefault();
    }
    render(){
        return(
            <div>
                <Header/>
                <div className={styles.home}>
                    <List shoppingList={this.state.shoppingList} handleAdd={this.handleAdd} handleRemove = {this.handleRemove}/>
                    <Cart cartList={this.state.cartList}/>
                </div>
            </div>
        );
    }
}
export default Home; 