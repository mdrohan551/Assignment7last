
import axios from "axios";
import { useRef, useState } from "react";
import {Link, useNavigate} from "react-router-dom";

const CreatePage = () => {

    let navigator = useNavigate()
    const CreatePage=async (event)=>{
        let formData= new FormData(event.target);
        event.preventDefault();
          let title =formData.get('title');
          let Price =formData.get('Price');
          let Description =formData.get('Description');
          let discount =formData.get('discount');
          let discountPrice =formData.get('discountPrice');
          let images =formData.get('images');
             await axios.post('/api/create',{
                 title:title,
                 Price:parseFloat(Price),
                 Description:Description,
                 discount:discount,
                 discountPrice:parseFloat(discountPrice),
                 img:images,
                 
             })

        navigator('/')
    }
    return (
        <div className='container'>
            <h5 className=' font-monospace mt-lg-5 text-center bg-success text-white p-5'>Create page here</h5>
            <Link to="/" className='btn btn-outline-danger' >back to home</Link>
          <div className="row">
              <div className="col-md-12">
                  <form onSubmit={CreatePage} className="mt-5 gy-2 gx-3 align-items-center">
                      <div className="row">
                          <div className="col-auto">
                              <label><h4>title</h4></label>
                              <input type="text" className="form-control form-control-lg" name="title"
                                     placeholder='type title'/>
                          </div>     <div className="col-auto">
                              <label><h4>Price</h4></label>
                              <input type="text" className="form-control form-control-lg" name="Price"
                                     placeholder='type Price'/>
                          </div>     <div className="col-auto">
                              <label><h4>Description</h4></label>
                              <input type="text" className="form-control form-control-lg" name="Description"
                                     placeholder='type Description'/>
                          </div>     <div className="col-auto">
                              <label><h4>discount</h4></label>
                          <select  className="form-control form-control-lg" name="discount" aria-label="Default select example">
                              <option value="">select option</option>
                              <option value="YES">YES</option>
                              <option value="NO">NO</option>
                          </select>
                          </div>
                          <div className="col-auto">
                              <label  className='mt-lg-4'><h4 >discountPrice</h4></label>
                              <input   type="text" className="form-control form-control-lg " name="discountPrice"     placeholder='type discountPrice'/>     
                          </div>
                          <div className="col-auto">
                              <label  className='mt-lg-4'><h4>images</h4></label>
                              <input type="text" className="form-control form-control-lg  "  name="images"
                                     placeholder='images'/>
                          </div>
                      </div>
                     <button type="submit"  className="btn btn-outline-success shadow mt-lg-5 mt-4"> submit</button>
                  </form>
              </div>
          </div>
        </div>
    );
};

export default CreatePage;