import React, { useEffect, useState } from "react";
import clientDataService from "../services/ClientDataService";
import AddClaim from "./AddClaim";

const AddClientData = (props) => {

  let initialClientDataState = {
    id: null,
    firstName: "",
    surName: "",
    dateOfBirth: "",
    state:"TAS",
    landOwner:"YES",
    dateOfLCA:"",
    insuranceData:[]
  };
  const [clientData, setClientData] =  useState(initialClientDataState);
  const [insuranceData, setInsuranceData] =  useState([]);
  useEffect(() => { 
  if(!props.isAddFlow) {
    setClientData(props.data); 
    setInsuranceData(props.data); 
  }
  }, [props.data]);
  

  const handleInputChange = event => {
    const { name, value } = event.target;
    setClientData({ ...clientData, [name]: value });
    
  };

  const handleclaimInputChange = (p) => {
    setInsuranceData({...insuranceData,p});

    let indexOfObject = 0;
    const ind = clientData.insuranceData.filter((d, index) => {
      console.log(p.id +"     " + d.id); 
      if(p.id === d.id){
        indexOfObject = index;
        return index;
      }else{
          console.log("Error occured");
      }
    })

    clientData.insuranceData[indexOfObject] = p;
    setClientData(...clientData);
  }

  const addClaimData = (data) => {
    clientData.insuranceData.push(data);
    setClientData({ ...clientData });
  }
  const removeClaimData = (d) => {
    let inD = clientData.insuranceData.indexOf(d);
    const a = clientData.insuranceData.splice(inD,1);
   setClientData({ ...clientData});
  }

  const saveClient = () => {
    var data = {
      ...clientData
    };

    if(props.isAddFlow) {
    clientDataService.create(data)
      .then(response => {
        alert("Client ID ::" + response.data.clientData.id);
      })
      .catch(e => {
        console.log(e);
      });
    }else {

      data = {
        ...clientData, id:props.data.id
      } 

      clientDataService.update(data)
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
              value={clientData.firstName}
              onChange={handleInputChange}
              name="firstName"
            />
            <label htmlFor="title">Surname</label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={clientData.surName}
              onChange={handleInputChange}
              name="surName"
            />
            <label htmlFor="title">Date of Birth</label>
            <input
              type="date"
              className="form-control"
              id="title"
              value={clientData.dateOfBirth}
              onChange={handleInputChange}
              name="dateOfBirth"
            />
            <label htmlFor="title">State</label>
            <select class="form-select" aria-label="Default select example" selected value={clientData.state} name="state" onChange={handleInputChange}>
              <option value="NSW">NSW</option>
              <option value="QLD">QLD</option>
              <option value="SA">SA</option>
              <option value="TAS">TAS</option>
              <option value="VIC">VIC</option>
              <option value="WA">WA</option>
            </select>


            <label htmlFor="title">Land Owner</label>
            <select class="form-select" aria-label="Default select example" selected value={clientData.landOwner} name="landOwner" onChange={handleInputChange}>
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
              selected={clientData.dateOfLCA}
              value={clientData.dateOfLCA}
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
              {clientData.insuranceData.length > 0 && 
                <ul class="list-group">
                
                  <li class="list-group-item active">Claim Data List</li>
                  {clientData.insuranceData.map((d) => {
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
                <AddClaim addClaimData={addClaimData} data={clientData.insuranceData} isAddFlow={props.isAddFlow} handleClaimChanges={handleclaimInputChange}></AddClaim>
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