import React from 'react';



class EditComp extends React.Component {

    // url = "";
    isOnEdit = false;

    constructor(props) {

        super(props);
        this.url = props.url;
        this.onSave = props.onSave;

    }

    

    onEditBtnClick = () => {
        this.isOnEdit = true;
        this.render();

    }

    handleSaveClick = () => {
        this.isOnEdit = false;
        this.onSave(this.url, document.getElementById('edit').value);
    }

    render() {
 
        return(
            <>
        {
            this.isOnEdit ?
            <>
                <button onClick={() => this.handleSaveClick()} >Save</button>
                <input type="text" id="edit" placeholder='type new url...' />
            </>
            :
            <button onClick={() => this.onEditBtnClick()} >Edit</button>
        }
        </>
        );
    }
}

export default EditComp;