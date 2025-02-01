import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';

const UpdatePage = () => {

    let navigator = useNavigate()
   const {id}=useParams()


    const [oldData,setOlddata]=useState(null)
const Existinginfo= async (id)=>{
     const res = await axios.get(`/api/viewUpdate/${id}`);
     setOlddata(res.data['row'][0])
}
    useEffect(() => {
        (async ()=>{
            await Existinginfo(id)
           
        })()
    }, []);





    const UpdateData=async (event)=>{
        let formData= new FormData(event.target);
        event.preventDefault();
        let title =formData.get('title');
        let Price =formData.get('Price');
        let Description =formData.get('Description');
        let discount =formData.get('discount');
        let discountPrice =formData.get('discountPrice');
        let images=formData.get('images');
       let res= await axios.post(`/api/update/${id}`,{
            title:title,
            Price:parseFloat(Price),
            Description:Description,
            discount:discount,
            discountPrice:parseFloat(discountPrice),
            img:images
         
            
        })
        if(res.data['message']==='updated'){
            toast.success("updated")
        }
        navigator('/')
    }




    return (
        <div className='container'>
             <Toaster position='bottom-center'/>
            <h5 className=' font-monospace mt-lg-5 text-center bg-dark text-white p-5'>Dashboard Update your
                details</h5>
                <Link to="/" className='btn btn-outline-danger' >back to home</Link>
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={UpdateData} className="mt-5 gy-2 gx-3 align-items-center">
                        <div className="row">
                            <div className="col-auto">
                                <label><h4>title</h4></label>
                                <input defaultValue={oldData !== null ? (oldData['title']) : ("")} type="text"
                                       className="form-control form-control-lg" name="title"
                                       placeholder='type title'/>
                            </div>
                            <div className="col-auto">
                                <label><h4>Price</h4></label>
                                <input defaultValue={oldData !== null ? (oldData['Price']) : ("")} type="text"
                                       className="form-control form-control-lg" name="Price"
                                       placeholder='type Price'/>
                            </div>
                            <div className="col-auto">
                                <label><h4>Description</h4></label>
                                <input defaultValue={oldData !== null ? (oldData['Description']) : ("")} type="text"
                                       className="form-control form-control-lg" name="Description"
                                       placeholder='type Description'/>
                            </div>
                            <div className="col-auto">
                                <label><h4>discount</h4></label>
                                <select className="form-control form-control-lg" name="discount"
                                        aria-label="Default select example">
                                    <option value="">select option</option>
                                    <option selected={oldData !== null && oldData['discount'] === 'YES'}
                                            value="YES">YES
                                    </option>
                                    <option selected={oldData !== null && oldData['discount'] === 'NO'} value="NO">NO
                                    </option>
                                </select>
                            </div>
                            <div className="col-auto">
                                <label className='mt-lg-4'><h4>discountPrice</h4></label>
                                <input defaultValue={oldData !== null ? (oldData['discountPrice']) : ("")} type="text"
                                       className="form-control form-control-lg " name="discountPrice"
                                       placeholder='type discountPrice'/>
                                       
                            </div>
                            <div className="col-auto">
                                <label className='mt-lg-4'><h4>images</h4></label>
                                <input defaultValue={oldData !== null ? (oldData['img']) : ("")}  type="text" className="form-control form-control-lg " name="images"
                                       placeholder='images'/>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-outline-success shadow mt-lg-5 mt-4"> Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatePage;