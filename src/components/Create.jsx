import React, { useState } from 'react'
import { api_url } from "./Api_Url";
import './Crestyle.css'
import axios, { Axios } from 'axios';
import { useNavigate } from 'react-router-dom';


const Create = () => {
  const [studentName, setStudentName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [mobilNum, setMobilNum] = useState('');
  const [emailAdd, setEmailAdd] = useState('');
  const navigation = useNavigate();


  const postData = async () => {
    await axios.post(api_url,{
      studentName,
      fatherName,
      mobilNum,
      emailAdd
    })
    navigation ('/read')
  }


  return (
    <div className='container pt-5 mt-5'>
      <form>
        <div className="row">

          <div className="col">
            <label >Student Name</label>
            <input type="text" className="form-control" value={studentName} onChange={event => setStudentName(event.target.value)} />
          </div>
          <div className="col"></div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <label>Father Name</label>
            <input type="text" className="form-control" value={fatherName} onChange={event => setFatherName(event.target.value)} />

          </div>
          <div className="col"></div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <label>Mobile Number</label>
            <input type="text" className="form-control" value={mobilNum} onChange={event => setMobilNum(event.target.value)} />

          </div>
          <div className="col"></div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <label>Email</label>
            <input type="email" className="form-control" value={emailAdd} onChange={event => setEmailAdd(event.target.value)} />

          </div>
          <div className="col"></div>
        </div>
        <div className="btn btn-primary mt-3" onClick={postData}>Submit</div>
      </form>
    </div>
  )
}

export default Create
