import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import swal from 'sweetalert';

function EditVfi() {

    const navigate = useNavigate();
    const { id } = useParams(); 
    const [loading, setLoading] = useState(true);
    const [vfiInput, setVfi] = useState([]);
    const [errorInput, setError] = useState([]);

   
    useEffect(() => {   
      
        axios.get(`/api/edit-vfi/${id}`).then( res => {

            if(res.data.status === 200)
            {
                setVfi(res.data.vfi);
                setLoading(false);
            }
            else if(res.data.status === 404)
            {
                swal("Error",res.data.message,"error");
                navigate('/');
            }
        });
        
       // eslint-disable-next-line
    }, [navigate]); 

    const handleInput = (e) => {
        e.persist();
        setVfi({...vfiInput, [e.target.name]: e.target.value });
    }

    const updateVfi = (e) => {
        e.preventDefault();

        // const id = props.params.id;
         
        const data = {
            Gender:vfiInput.Gender,
            firstName:vfiInput.firstName,
            secondName:vfiInput.secondName,
            MaritalStatus:vfiInput.MaritalStatus,
            TelNo:vfiInput.TelNo,
            TownofResidence:vfiInput.TownofResidence,
            Fellowshipifattendingany:vfiInput.Fellowshipifattendingany,
            MinistryInvolvedin:vfiInput.MinistryInvolvedin,
            ChurchYouattend:vfiInput.ChurchYouattend,
            Profession:vfiInput.Profession,
            LengthofMembershipinVFi:vfiInput.LengthofMembershipinVFi,
            Email:vfiInput.Email,
        }

        axios.put(`/api/update-vfi/${id}`, data).then(res=>{
            if(res.data.status === 200)
            {
                swal("Success",res.data.message,"success");
                setError([]);
                navigate('/');
            }
            else if(res.data.status === 422)
            {
                swal("All fields are mandetory","","error");
                setError(res.data.validationErrors);
            }
            else if(res.data.status === 404)
            {
                swal("Error",res.data.message,"error");
                navigate('/');
            }
        });
    }

    if(loading)
    {
        return <h4>Vfi Data loading...</h4>
    }
    
    return (
        <div>
            <div className="row header-container justify-content-center">
                <div className="container-fluid mt-4">
                <div className="row justify-content-center">
              <section className="col-md-8">
                 <div className="card mb-3">
                     <h5 className="card-title">Update data of VFi Kenya Brethren</h5>
                            <div className="card-body">
                                <form onSubmit={updateVfi} >
                                   <div className="form-group">
                                        <label>Gender</label>
                                        <input type="text" name="Gender" onChange={handleInput} value={vfiInput.Gender} className="form-control" />
                                        <span className="text-danger">{errorInput.Gender}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input type="text" name="firstName" onChange={handleInput} value={vfiInput.firstName}  className="form-control" />
                                        <span className="text-danger">{errorInput.firstName}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Second Name</label>
                                        <input type="text" name="secondName" onChange={handleInput} value={vfiInput.secondName}  className="form-control" />
                                        <span className="text-danger">{errorInput.secondName}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Marital Status</label>
                                        <input type="text" name="MaritalStatus" onChange={handleInput} value={vfiInput.MaritalStatus}  className="form-control" />
                                        <span className="text-danger">{errorInput.MaritalStatus}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Tel No</label>
                                        <input type="text" name="TelNo" onChange={handleInput} value={vfiInput.TelNo}  className="form-control" />
                                        <span className="text-danger">{errorInput.TelNo}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Town of Residence</label>
                                        <input type="text" name="TownofResidence" onChange={handleInput} value={vfiInput.TownofResidence}  className="form-control" />
                                        <span className="text-danger">{errorInput.TownofResidence}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Fellowship</label>
                                        <input type="text" name="Fellowshipifattendingany" onChange={handleInput} value={vfiInput.Fellowshipifattendingany}  className="form-control" />
                                        <span className="text-danger">{errorInput.Fellowshipifattendingany}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Ministry Involved in</label>
                                        <input type="text" name="MinistryInvolvedin" onChange={handleInput} value={vfiInput.MinistryInvolvedin}  className="form-control" />
                                        <span className="text-danger">{errorInput.MinistryInvolvedin}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Church You Attend</label>
                                        <input type="text" name="ChurchYouattend" onChange={handleInput} value={vfiInput.ChurchYouattend}  className="form-control" />
                                        <span className="text-danger">{errorInput.ChurchYouattend}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Profession</label>
                                        <input type="text" name="Profession" onChange={handleInput} value={vfiInput.Profession}  className="form-control" />
                                        <span className="text-danger">{errorInput.Profession}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Length of Membership in VFi</label>
                                        <input type="text" name="LengthofMembershipinVFi" onChange={handleInput} value={vfiInput.LengthofMembershipinVFi}  className="form-control" />
                                        <span className="text-danger">{errorInput.LengthofMembershipinVFi}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="text" name="Email" onChange={handleInput} value={vfiInput.Email} className="form-control" />
                                        <span className="text-danger">{errorInput.Email}</span>
                                    </div>
                                    <button type="submit" className="btn btn-info">Update</button>
                                </form>

                            </div>
                        </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default EditVfi;