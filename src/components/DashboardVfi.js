import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';

function Dashboard() {

        const [loading, setLoading] = useState(true);
        const [vfis, setVfis] = useState([]);
        
        useEffect(() => {
            axios.get(`/api//`).then(res=>{
                if(res.status === 200)
                {
                    setVfis(res.data.vfis) 
                    setLoading(false);
                }
            });
    
        }, []);
    
        const deleteVfi = (e, id) => {
            e.preventDefault();
            
            const thisClicked = e.currentTarget;
            thisClicked.innerText = "Deleting";
    
            axios.delete(`/api/delete-vfi/${id}`).then(res=>{
                if(res.data.status === 200)
                {
                    swal("Deleted!",res.data.message,"success");
                    thisClicked.closest("tr").remove();
                }
                else if(res.data.status === 404)
                {
                    swal("Error",res.data.message,"error");
                    thisClicked.innerText = "Delete";
                }
            });
        }
    

        if(loading)
        {
            return <h4>VFi Data loading...</h4>
        }
        else
        {
            var vfi_HTMLTABLE = "";
           
            vfi_HTMLTABLE = vfis.map( (item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.Gender}</td>
                        <td>{item.firstName}</td>
                        <td>{item.secondName}</td>
                        <td>{item.MaritalStatus}</td>
                        <td>{item.TelNo}</td>
                        <td>{item.TownofResidence}</td>
                        <td>{item.Fellowshipifattendingany}</td>
                        <td>{item.MinistryInvolvedin}</td>
                        <td>{item.ChurchYouattend}</td>
                        <td>{item.Profession}</td>
                        <td>{item.LengthofMembershipinVFi}</td>
                        <td>{item.Email}</td>
                        <td>
                            <Link to={`edit-vfi/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
                        </td>
                        <td>
                            <button type="button" onClick={(e) => deleteVfi(e, item.id)} className="btn btn-danger btn-sm">Delete</button>
                        </td>
                    </tr>
                );
            });
        }

        return (
            <div> 
                <div className="container">
                    <div className="row">
                                <div className="card-body">
                                  <h5 className="card-title pt-5">List of VFi Brethren in Kenya</h5>
                                  <h4><Link to={'add-vfi'} className="btn btn-primary btn-sm addbtn float-end"> Add Vfi</Link></h4>
                                   <div className="table-responsive">
                                     <table className="table">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Gender</th>
                                                <th>FirstName</th>
                                                <th>SecondName</th>
                                                <th>MaritalStatus</th>
                                                <th>TelNo</th>
                                                <th>TownofResidence</th>
                                                <th>Fellowship</th>
                                                <th>MinistryInvolvedin</th>
                                                <th>ChurchYouattend</th>
                                                <th>Profession</th>
                                                <th>LengthofMembershipinVFi</th>
                                                <th>Email</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {vfi_HTMLTABLE}
                                        </tbody>
                                    </table>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
   
export default Dashboard;
