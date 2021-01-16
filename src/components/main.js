import React,{Component} from "react";
import "../App.css";
import ListItems from "./ListItems";
class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            items:[],
            curr_item:{
                text:'',
                key:''
            }
            
        }
        this.handleInput=this.handleInput.bind(this);
        this.additem=this.additem.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
        this.completed=this.completed.bind(this);
        this.updateValues=this.updateValues.bind(this);
    }
    handleInput(e){
        this.setState({
            curr_item:{
                text:e.target.value,
                key:Date.now(),
                pos:0
            }
        })
        
    }
    additem(e){
        e.preventDefault();
        const newItem = this.state.curr_item;
        console.log(newItem);
        if(newItem.text!==""){
            const Newitems=[...this.state.items,newItem];//to add new items to list this is called destructuring Assignment
            this.setState({
                items:Newitems,
                curr_item:{
                    text:'',
                    key:''
                }

            })
        }
        console.log(this.state.items);
    }
    deleteItem(key){
        
            const newList=this.state.items.filter(item=>
                item.key!==key);
            this.setState({
                items:newList
            })
       
        
    }
    completed(selecteditem){
        if(selecteditem.pos===0){
            console.log("oye");
             this.state.items.map(item=>{
                if(item.key===selecteditem.key){
                    item.pos=1;
                }
                
            })
        }

    }
    updateValues(text,key){
        const items=this.state.items;
        items.map(item=>{
            if(item.key===key){
                item.text=text;
            }
            
        })
        this.setState({
            items: items
        })
        
    }
    
    render(){
        return(
            <div className="Main">
                <form className="mainForm" onSubmit={this.additem} >
                    <input type="text" placeholder="Enter Text"
                        value={this.state.curr_item.text}
                        onChange={this.handleInput}

                    /> 
                    <button className="button" type="submit">ADD</button>
                </form>
                
                <ListItems 
                    className="list"
                items={this.state.items}
                deleteItem={this.deleteItem}
                completed={this.completed}
                updateValues={this.updateValues}>
                </ListItems>
            </div>
        )
    }
}
export default Main;