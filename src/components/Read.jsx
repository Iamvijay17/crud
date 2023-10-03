import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { api_url } from './Api_Url';
import { MdDelete, MdEdit } from "react-icons/md";


const Read = () => {

  const [apidata, setApiData] = useState([]);
  const navigation = useNavigate();

  const updateStudent = ({studentName, fatherName, mobilNum, emailAdd, id}) => {
  localStorage.setItem('ID', id)
  localStorage.setItem('Student Name', studentName)
  localStorage.setItem('ID', id)
    navigation('/update')
  }


  const deleteStudent = async (id) => {
    await axios.delete(api_url + id)
    callGetApi();
  }

  const callGetApi = async () => {
    const resp = await axios.get(api_url);
    setApiData(resp.data)
  }
  useEffect(() => {
    callGetApi();
  }, []);

  return (
    <div>
      <div className="container mt-3 pt-5">
        <h2>Student database</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Student Name</th>

              <th>Mobile Number</th>
              <th>Email Address</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {
              apidata.map(data => (
                <tr key={data.id}>
                  <td>{data.studentName}</td>

                  <td>{data.mobilNum}</td>
                  <td>{data.emailAdd}</td>
                  <td>
                    <div className="btn btn-primary me-3 mb-3" onClick={() => updateStudent(data.id)}><MdEdit /></div>
                    <div className="btn btn-danger mb-3" onClick={() => deleteStudent(data)}> <MdDelete /> </div>

                  </td>

                </tr>
              ))
            }


          </tbody>
        </table>
      </div>
    </div>

  )
}

export default Read
