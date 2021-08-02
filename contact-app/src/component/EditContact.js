import React from 'react';
class EditContact extends React.Component{
  
   constructor(props){
       super(props);
       const {id,name,email}=this.props.location.state.contact;
       this.state={
           id,
           name,
           email,
       }
   }

    update=(e)=>{
     e.preventDefault();
     if(this.state.name===""||this.state.email===""){
         alert("All the fields are mandatory");
         return;
     }
     this.props.updateContactHandler(this.state);
     this.setState({name:"",email:""});
     this.props.history.push("/");
    }


    render(){
        return(
            <div className="ui main">
              <h2>Edit Conatct</h2>
        
              <form className="ui form" onSubmit={this.update}>
                  <div className="field">
                      <label>Name</label>
                      <input type="text" name="name" value={this.state.name} placeholder="Enter Your Name" onChange={(e)=>this.setState({name:e.target.value})}/>
                  </div>
                  <div className="field">
                      <label>Email</label>
                      <input type="text" name="email" value={this.state.email} placeholder="Enter Your Email"  onChange={(e)=>this.setState({email:e.target.value})}/>
                  </div>
                  <button className="ui button blue">Update</button>
              </form>
            </div>
        )
    }
}
export default EditContact;