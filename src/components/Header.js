import React,{Component} from 'react';
import styles from '../styles/Header.module.css';

class Header extends React.Component{
    constructor(props){
        super(props);
        
    }
    render(){
        return(
            <div className={styles.header}>
                <h1>Shgram</h1>
            </div>

        );
    }
}
export default Header;