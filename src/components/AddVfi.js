import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import swal from 'sweetalert';

function AddVfi() {

    const navigate = useNavigate();
    const [vfiInput, setVfi] = useState({
        Gender:'',
        firstName:'',
        secondName:'',
        MaritalStatus:'',
        TelNo:'',
        TownofResidence:'',
        Fellowshipifattendingany:'',
        MinistryInvolvedin:'',
        ChurchYouattend:'',
        Profession:'',
        LengthofMembershipinVFi:'',
        Email:'',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setVfi({...vfiInput, [e.target.name]: e.target.value })
    }

    const saveVfi = (e) => {
        e.preventDefault();
        
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

        axios.post(`/api/add-vfi`, data).then(res => {

            if(res.data.status === 200)
            {
                swal("Success!",res.data.message,"success");
                setVfi({
                    Gender:'',
                    firstName:'',
                    secondName:'',
                    MaritalStatus:'',
                    TelNo:'',
                    TownofResidence:'',
                    Fellowshipifattendingany:'',
                    MinistryInvolvedin:'',
                    ChurchYouattend:'',
                    Profession:'',
                    LengthofMembershipinVFi:'',
                    Email: '',
                    error_list: [],
                });
                navigate('/');
            }
            else if(res.data.status === 422)
            {
                setVfi({...vfiInput, error_list: res.data.validate_err });
            }
        });
    }

    return (
        <div>
          <div className="row header-container justify-content-center">
            <div className="header">
              <h1>Welcome to VFI Kenya Portal</h1>
            </div>
           </div>
            <div className="container-fluid mt-4"  id="create-form">
            <div className="row justify-content-center">
              <section className="col-md-8">
                 <div className="card mb-3">
                    <h5 className="card-title">Please Enter Your information</h5>
                            <div className="card-body">
                                <form onSubmit={saveVfi} >
                                    <div className="form-group">
                                        <label>Gender</label>
                                        <input type="text" name="Gender" onChange={handleInput} value={vfiInput.Gender} className="form-control" />
                                        <span className="text-danger">{vfiInput.error_list.Gender}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>First Name</label>
                                        <input type="text" name="firstName" onChange={handleInput} value={vfiInput.firstName}  className="form-control" />
                                        <span className="text-danger">{vfiInput.error_list.firstName}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Second Name</label>
                                        <input type="text" name="secondName" onChange={handleInput} value={vfiInput.secondName}  className="form-control" />
                                        <span className="text-danger">{vfiInput.error_list.secondName}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Marital Status</label>
                                        <input type="text" name="MaritalStatus" onChange={handleInput} value={vfiInput.MaritalStatus}  className="form-control" />
                                        <span className="text-danger">{vfiInput.error_list.MaritalStatus}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Tel No</label>
                                        <input type="text" name="TelNo" onChange={handleInput} value={vfiInput.TelNo}  className="form-control" />
                                        <span className="text-danger">{vfiInput.error_list.TelNo}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Town of Residence</label>
                                        <input type="text" name="TownofResidence" onChange={handleInput} value={vfiInput.TownofResidence}  className="form-control" />
                                        <span className="text-danger">{vfiInput.error_list.TownofResidence}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Fellowship</label>
                                        <input type="text" name="Fellowshipifattendingany" onChange={handleInput} value={vfiInput.Fellowshipifattendingany}  className="form-control" />
                                        <span className="text-danger">{vfiInput.error_list.Fellowshipifattendingany}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Ministry Involved in</label>
                                        <input type="text" name="MinistryInvolvedin" onChange={handleInput} value={vfiInput.MinistryInvolvedin}  className="form-control" />
                                        <span className="text-danger">{vfiInput.error_list.MinistryInvolvedin}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Church You Attend</label>
                                        <input type="text" name="ChurchYouattend" onChange={handleInput} value={vfiInput.ChurchYouattend}  className="form-control" />
                                        <span className="text-danger">{vfiInput.error_list.ChurchYouattend}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Profession</label>
                                        <input type="text" name="Profession" onChange={handleInput} value={vfiInput.Profession}  className="form-control" />
                                        <span className="text-danger">{vfiInput.error_list.Profession}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Length of Membership in VFi</label>
                                        <input type="text" name="LengthofMembershipinVFi" onChange={handleInput} value={vfiInput.LengthofMembershipinVFi}  className="form-control" />
                                        <span className="text-danger">{vfiInput.error_list.LengthofMembershipinVFi}</span>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="text" name="Email" onChange={handleInput} value={vfiInput.Email} className="form-control" />
                                        <span className="text-danger">{vfiInput.error_list.Email}</span>
                                    </div>
                                        <button type="submit" className="btn btn-info">Save</button>
                                </form>
                            </div>
                           </div>
                        </section>
                    </div>
                </div>
            </div>
    );

}

export default AddVfi;