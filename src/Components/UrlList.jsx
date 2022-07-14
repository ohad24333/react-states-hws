import React from 'react';

export default class UrlList extends React.Component{

    constructor(props){
        super(props);
        this.state = { 
            arr:props.arr,
            value:'',
            addValue:''
        };
    }
    sortAccending = true;

    onAdd = () => {
        let nUrl =this.state.addValue;
        let nArr = [...this.state.arr].concat({url:nUrl, isOnEdit:false});
        this.setState({arr: nArr});
        this.setState({addValue:''});
    }

    onAddChange = (e) => {
        
        this.setState({addValue:e.target.value});
    }

    onSort = () =>{

        let sortedArr = this.state.arr.sort((a,b) => a.url > b.url ? 1 : -1);

        if (this.sortAccending) {
            this.sortAccending = false;
            this.setState({arr: sortedArr});
        }
        else{
            sortedArr.reverse();
            this.sortAccending = true;
            this.setState({arr: sortedArr});     
        }
    }

    onDelete = (url) => {  
        let newArr = this.state.arr.filter((link) => link.url !== url); 
        this.setState({arr: newArr});
    }

 
    onChange = (e) => {
        
        this.setState({value:e.target.value});
    }
    
    
    onSave = (e) => {

        let nArr = [];
        for(let i = 0; i < this.state.arr.length; i++){
            if(this.state.arr[i].url === e.target.name){
                nArr = [...this.state.arr];
                let link = {...nArr[i]};
                link.url = this.state.value;
                link.isOnEdit = false;
                nArr[i] = link;
            } 
        }
        
        this.setState({arr:nArr});
    }
      
   
    

    onEditBtnClick = (url) => {
        let nArr = this.state.arr.map((link) => (
            link.url === url ?
             {url: link.url , isOnEdit:true}
            :
            link
        ))
        this.setState({arr:nArr});
    }


    render(){
        return(
            <>
                <h1>Url List - State HWS</h1>
                <br />
                <hr />
                <button onClick={() => this.onSort()}>Sort</button>
                <br />
                <input value={this.state.addValue} type="text" onChange={this.onAddChange} placeholder='Add URL link...' />
                <button onClick={this.onAdd}>Add</button>
                <hr />
                <ul>
                {
                    this.state.arr.map((link) => 
                    <li key={link.url}>                    
                        <a href={link.url}> {link.url}</a>  
                        <button onClick={() => this.onDelete(link.url)}>Delete</button>    

                        {link.isOnEdit ?  
                                                <>
                                                <input onChange={this.onChange} type="text" id="edit" placeholder='type new url...'/>    
                                                <button name={link.url} onClick={this.onSave} >Save</button>
                                                </>              
                                             : 
                                              <button onClick={() => this.onEditBtnClick(link.url)} >Edit</button>  
                        }      

                    </li>      
                    )
                }
                </ul>
            </>
        );

    }

}