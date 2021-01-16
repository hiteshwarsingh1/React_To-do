import React,{Component} from "react";
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function ListItems(props){
    const items=props.items;
    const list=items.map(item=>
        {
            if(item.text){
                
                return(
                    
                    <div className="list" key={item.key}>
                        
                            <p>
                            <span>
                                <FontAwesomeIcon 
                                className="faicons" 
                                onClick={() => {
                                    props.deleteItem(item.key)
                                }} 
                                icon="handpointright" />
                             </span>

                            <input type="text" 
                                id={item.key} 
                                value={item.text} 
                                onChange={(e)=>{
                                    props.updateValues(e.target.value,item.key)
                                    }}
                            />
                            
                            <span>
                                <FontAwesomeIcon 
                                className="faicons" 
                                onClick={() => {
                                    props.deleteItem(item.key)
                                }} 
                                icon="trash" />
                             </span>
                                
                            
                            
                            
                            
                            </p>
                        
                        
                    </div>
                )
            }
        })
    return(
        <div>
            {list}
        </div>
        
    )
}
export default ListItems;