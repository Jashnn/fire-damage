import React, { useState,useEffect } from 'react';
const AddClaim = (props) => { 

    let [count,setCount] = useState(0);
    const intialClaimData = {
        id: null,
        policyNumber: "",
        groundCosts: 0,
        fencingCost: 0,
        personalLabourCost: 0,
        comments:"",
      };

      
      const [claimdata, setClaimData] = useState(intialClaimData);
      useEffect(() => { 
        if(props.data.length > 0) {
            setClaimData({...props.data[0]});
        }

      }, [props.data]);

      const handleInputChange = event => {
        const { name, value } = event.target;
        setClaimData({ ...claimdata, [name]: value });
        console.log(claimdata);

       
      };

    const addClaimDataMine = () => {
        props.addClaimData(claimdata);
       // setClaimData({...claimdata, intialClaimData})
        
    }

    const incrementCount = () => {
        if(props.data.length -1  > count) {
        count = count + 1;
        setCount(count);
        setClaimData(props.data[count]);
        }
    }
    const decrementCount = () => {
        if(count > 0) {
        count = count - 1;
        setCount(count);
        setClaimData(props.data[count]);
        }
    }
   

return (
    <div className="form-group">
        <label htmlFor="title">PolicyNumber:<input   className="form-control" type="text" name="policyNumber" value={claimdata.policyNumber} onChange={handleInputChange}/></label><br /><br/>
        <label>GroundCosts:<input type="text"   className="form-control"  name="groundCosts" value={claimdata.groundCosts} onChange={handleInputChange}/></label><br /><br/>
        <label>FencingCost:<input type="text"  className="form-control"  name="fencingCost" value={claimdata.fencingCost} onChange={handleInputChange}/></label><br /><br/>
        <label>PersonalLab:<input type="text"   className="form-control"  name= "personalLabourCost" value={claimdata.personalLabourCost} onChange={handleInputChange}/></label><br /><br/>
        <label>Comments:<input type="text"   className="form-control" name= "comments" value={claimdata.comments} onChange={handleInputChange}/></label><br /><br/>
        {props.isAddFlow && <input type="submit" className="btn btn-success"  value="Add" onClick={addClaimDataMine}/>}  
        {!props.isAddFlow && <input type="submit" className="btn-sm btn-success"  value="Next" onClick={ incrementCount}/>}   &nbsp;&nbsp;
        {!props.isAddFlow && <input type="submit" className="btn-sm btn-success" value="Previous" onClick={decrementCount}/>} &nbsp;
        {!props.isAddFlow && <input type="submit" className="btn-sm btn-success" value="Update" onClick={()=>{props.handleClaimChanges(claimdata)}}/>} 

    </div>
)


}

export default AddClaim;