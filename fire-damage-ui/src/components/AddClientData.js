import React, { useEffect, useState } from "react";
import TutorialDataService from "../services/TutorialService";
import AddClaim from "./AddClaim";

const AddClientData = (props) => {

  let initialTutorialState = {
    id: null,
    firstName: "",
    surName: "",
    dateOfBirth: "",
    state:"TAS",
    landOwner:"YES",
    dateOfLCA:"",
    insuranceData:[]
  };
  const [tutorial, setTutorial] =  useState(initialTutorialState);
  const [insuranceData, setInsuranceData] =  useState([]);
  useEffect(() => { 
  if(!props.isAddFlow) {
    setTutorial(props.data); 
    setInsuranceData(props.data); 
  }
  }, [props.data]);
  

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTutorial({ ...tutorial, [name]: value });
    
  };

  const handleclaimInputChange = (p) => {
    setInsuranceData({...insuranceData,p});

    let indexOfObject = 0;
    const ind = tutorial.insuranceData.filter((d, index) => {
      console.log(p.id +"     " + d.id); 
      if(p.id === d.id){
        indexOfObject = index;
        return index;
      }else{
          console.log("Error occured");
      }
    })

    tutorial.insuranceData[indexOfObject] = p;
    setTutorial(...tutorial);
  }

  const addClaimData = (data) => {
    tutorial.insuranceData.push(data);
    setTutorial({ ...tutorial });
  }
  const removeClaimData = (d) => {
    let inD = tutorial.insuranceData.indexOf(d);
    const a = tutorial.insuranceData.splice(inD,1);
   setTutorial({ ...tutorial});
  }

  const saveClient = () => {
    var data = {
      ...tutorial
    };

    if(props.isAddFlow) {
    TutorialDataService.create(data)
      .then(response => {
        alert("Client ID ::" + response.data.clientData.id);
      })
      .catch(e => {
        console.log(e);
      });
    }else {

      data = {
        ...tutorial, id:props.data.id
      } 

      TutorialDataService.update(data)
      .then(response => {
        alert("Successfully Updated!!");
      })
      .catch(e => {
        console.log(e);
      });
    }
  };

 
  return (
    <>
    
      {(
        <div className="container">
          <div className = "row">
        <div className="col"  style={{borderStyle: "dotted"}}>
          <div className="form-group">
            <label htmlFor="title">First name</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={tutorial.firstName}
              onChange={handleInputChange}
              name="firstName"
            />
            <label htmlFor="title">Surname</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={tutorial.surName}
              onChange={handleInputChange}
              name="surName"
            />
            <label htmlFor="title">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              id="title"
              value={tutorial.dateOfBirth}
              onChange={handleInputChange}
              name="dateOfBirth"
            />
            <label htmlFor="title">State</label>
            <select class="form-select" aria-label="Default select example" selected value={tutorial.state} name="state" onChange={handleInputChange}>
              <option value="NSW">NSW</option>
              <option value="QLD">QLD</option>
              <option value="SA">SA</option>
              <option value="TAS">TAS</option>
              <option value="VIC">VIC</option>
              <option value="WA">WA</option>
            </select>


            <label htmlFor="title">Land Owner</label>
            <select class="form-select" aria-label="Default select example" selected value={tutorial.landOwner} name="landOwner" onChange={handleInputChange}>
              <option value="YES">YES</option>
              <option value="NO">NO</option>
              <option value="NOT_SET">NOT_SET</option>
            </select>

          </div>
          <br />
          <div className="form-group">
            <label htmlFor="description">Date of LCA</label>
            <input
              type="date"
              className="form-control"
              id="description"
              selected={tutorial.dateOfLCA}
              value={tutorial.dateOfLCA}
              onChange={handleInputChange}
              name="dateOfLCA"


            />
          </div>
          <br />
          <div className="form-group">
            <button onClick={saveClient} className="btn btn-success">
              Submit
            </button>
          </div>
            </div>
         
            <div className="col">
            <div className="row">
              <div className="col-sm">
              {tutorial.insuranceData.length > 0 && 
                <ul class="list-group">
                
                  <li class="list-group-item active">Claim Data List</li>
                  {tutorial.insuranceData.map((d) => {
                    return (
                      <li class="list-group-item"> {d.policyNumber} &nbsp;&nbsp;&nbsp;
                      <button className= "btn-sm btn-danger" style={{float:"right"}} onClick={() => removeClaimData(d) }>X</button> 
                      </li>
                    )
                  })}
                </ul>
}
              </div>
              <div className="col">
                <AddClaim addClaimData={addClaimData} data={tutorial.insuranceData} isAddFlow={props.isAddFlow} handleClaimChanges={handleclaimInputChange}></AddClaim>
              </div>
             

            </div>
          </div>



          </div>

          <br />

          
          
          </div>
      )}
    
</>
   

  );
};

export default AddClientData;