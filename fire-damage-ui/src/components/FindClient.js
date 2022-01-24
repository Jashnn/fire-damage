import { useState } from "react";
import AddClientData from "./AddClientData";
import TutorialDataService from "../services/TutorialService";

const FindClient = () => {

    const [id, setId] = useState();
    let [responseRecevied,setResponseReceived] =useState(false);
    let [totalResponseRecevied,setTotalResponseRecevied] =useState(false);
    let [jsonData,setJsonData] = useState();
    let [totalData,setTotal] = useState();

    const getClientData = () => {

        if (id === undefined) {
            alert("Provide a valid Client Id");
        }
        else {
            TutorialDataService.find(id)
                .then(response => {
                    setJsonData(response.data.clientData);
                    setResponseReceived(true);
                })
                .catch(e => {
                    console.log(e);
                });
        }

        getTotal();
    }

    const getTotal = () => {
        if (id === undefined) {
            alert("Provide a valid Client Id");
        }
        else {
            TutorialDataService.getTotal(id)
                .then(response => {
                    setTotal(response.data);
                    setTotalResponseRecevied(true);
                })
                .catch(e => {
                    console.log(e);
                });
        }

    }


    return (
        
        <>
        <div className="form-group">
            <label>Client Id:<input type="text" value={id} onChange={(e) => setId(e.target.value)} /></label><br /><br />
            <input type="button" value="Find" onClick={getClientData} />
        </div>
        <br/>
<br/>
       {totalResponseRecevied && <div className="form-group">
            <label> Total Amount of Claim: <input  type="text" value= {totalData.claimTotal} disabled= {true}/></label>
        </div>
}
<br/>
<br/> 
        {responseRecevied && <AddClientData data={jsonData} isAddFlow={false}></AddClientData>} 

        </>
    )

}




export default FindClient;