import React, {useEffect, useState} from 'react';
import axios from "axios";
import Loader from "../loader/Loader.jsx";

import 'bootstrap-icons/font/bootstrap-icons.css'
import {Link} from "react-router-dom";
import toast, { Toaster} from "react-hot-toast";


const ReadPage = () => {
    const [Refresh,setRefresh]=useState(0)
    const [Data,setData]=useState([])


      // auto run fnc use useEffect
    useEffect(() => {
        (async ()=>{
            await ReadData()
        })()
    }, [Refresh]);



    // call api fnc
    const ReadData=async ()=>{
        let res = await axios.get('/api/read');
        setData(res.data['row'])
    }

// delete api data
    const DeleteData=async (id)=>{
          let res=await axios.get(`/api/delete/${id}`);
              if(res.data['status']==='success'){
                 toast.success(res.data['message'])
              }
          await  ReadData()
    }




   
    
    
    
    return (
        

        <div className="container mt-5">
                 
            <Link to="/create" className="btn btn-outline-primary mx-4">Create page go</Link>
            <Toaster position={"bottom-center"}/>
            {/*page refresh */}
            <button onClick={() => setRefresh(Refresh + 1)} className='btn btn-outline-success'> Refresh</button>
            {/*page refresh */}
            <div className="row mt-4">
                <div className="col-lg-12 col-md-12 col-sm-12 ">
                   <div className="row">
                       {
                           Data.length === 0 ? (<Loader/>) :
                               Data.map((item,index)=>{
                                  return(
                                    
                                      <div key={index} className="col-md-3">
                                        
                                          <div className="card bg-white">
                                              <div className="card-body ">
                                                  <img
                                                      src={item['img']}
                                                      className="card-img-top img-size  " alt=""/>
                                                  <div className="img-price"><h4> TK:{item['Price']} </h4></div>
                                                 
                                                  <div className="d-flex">
                                                  <h5 className="card-title mt-3 mb-3 order-0 "> {item['title']}</h5>
                                                  <div className="img-discount order-1 ms-auto"><h4> {item['discountPrice']}% </h4></div>
                                                  </div>
                                                  <p className="card-text mt-3 mb-3"> {item['Description']}</p>
                                                  <Link className="btn shadow-lg  mx-3 res  text-success link-bg btn-outline-success"
                                                        to={`/update/${item['_id']}`}> Edit</Link>
                                                  <button onClick={() => DeleteData(item['_id'])}
                                                          className="btn shadow-lg btn-outline-danger button-bg">Delete
                                                  </button>
                                                  
                                              </div>
                                          </div>
                                      </div>
                                  )
                               })
                       }
                   </div>
                </div>


            </div>


        </div>
    );
};

export default ReadPage;