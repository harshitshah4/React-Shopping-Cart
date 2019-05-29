import React, {Component} from 'react';
import styles from '../styles/List.module.css'

function SItem(props){
    let LButton;
    if(props.isAdded){
        LButton = <button id={props.uid} className ={styles.remove} onClick = {props.handleRemove}>Remove Item</button>
    }else{
        LButton = <button id={props.uid} className = {styles.add} onClick = {props.handleAdd}>Add Item</button>
    }
    return(
        <div className = {styles.item} >
            <img src="" alt=""/>
            <p>{props.title}</p>
            <p>{props.price}</p>
            {LButton}
            
        </div>
    );
}

class List extends React.Component{
    constructor(props){
        super(props);
    
    }
    
    
    
    render(){
        return(
            <div className = {styles.list}>
                {
                    this.props.shoppingList.map((listItem)=>
                        <SItem key={listItem.id} uid = {listItem.id} isAdded={listItem.isAdded} title = {listItem.title} price={listItem.price} handleRemove ={this.props.handleRemove} handleAdd = {this.props.handleAdd} />
                    )
                }

            </div>

        )
    }
}
export default List;
