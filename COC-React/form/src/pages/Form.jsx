import InputText from '../components/InputText';
import InputTextarea from '../components/InputTextarea';
import NoData from '../components/NoData';

import { createContext, useContext, useMemo, useRef, useState } from 'react';

export const SetUserDataContext = createContext()

function App() {

  const default_data = { name: "", enrollment: "", program: "", batch: "", department: "", mobile: "", email: "", dob: "", bloodgroup: "", address: "" }

  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState(default_data);

  const compareObjects = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

  const toggleEditMode = () => setEditMode(!editMode);
  const preventDefault = () => (e) => (e.preventDefault)

  const setDefaultUserData = () => setUserData(default_data);
  const setDemoData = () => { setUserData({ name: "Jay", enrollment: "1234567890", program: "B.tech", batch: "2021-2024", department: "Computer Engineering", mobile: "9876543210", email: "jaysparmar303@gmail.com", dob: "2002-11-11", bloodgroup: "O-", address: "\nNear abcd road,\nRajkot - 360002" }) }

  return (
    <form className=' ' onSubmit={preventDefault} onReset={setDefaultUserData} >
      <SetUserDataContext.Provider value={setUserData}>
        <div className="card rounded-4 w-100">
          <div className="card-header d-flex justify-content-between align-items-center">
            <h5 className='m-0'>
              {editMode ?
                "✒️ Edit Student details"
                :
                "^_^ Student details"}
            </h5>
            {!editMode && <button className='btn btn btn-dark ms-3' onClick={toggleEditMode}>✒️ Edit</button>}
          </div>
          <div className="card-body d-flex">
            {editMode ?
              <div className='w-100'>

                <InputText placeholder="Name" data_type="name" data={userData.name} />

                <div className="d-flex gap-2">
                  <InputText placeholder="Enrollment No" data_type="enrollment" data={userData.enrollment} type="number" />
                  <InputText placeholder="Program" data_type="program" data={userData.program} />
                </div>

                <div className="d-flex gap-2">
                  <InputText placeholder="Batch" data_type="batch" data={userData.batch} />
                  <InputText placeholder="Department" data_type="department" data={userData.department} />
                </div>

                <InputText placeholder="Mobile" data_type="mobile" data={userData.mobile} type="number" />

                <InputText placeholder="Email" data_type="email" data={userData.email} type="email" />

                <div className="d-flex gap-2">
                  <InputText placeholder="DOB" data_type="dob" data={userData.dob} type="date" />
                  <InputText placeholder="Blood group" data_type="bloodgroup" data={userData.bloodgroup} />
                </div>

                <InputTextarea placeholder="Address" data_type="address" data={userData.address} rows='4' />

              </div>
              : compareObjects(default_data, userData) ?
                <div className='d-flex flex-column w-100'>
                  <NoData />
                  <button
                    className='btn btn-secondary m-auto btn-lg'
                    onClick={setDemoData}
                  >Add demo data</button>
                </div>
                :
                <table className='table table-striped table-bordered table-hover '>
                  <tbody>
                    {
                      Object.entries(userData).map((x) => {
                        return (
                          <tr>
                            <td className='text-capitalize'>{x[0]}</td>
                            <td>{x[1]}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
            }
          </div>
          {
            editMode
            &&
            <div className="card-footer d-flex  text-muted">
              <input className='ms-auto btn btn-outline-dark' type='reset' value="Reset" />
              <button className='ms-3 btn btn-primary' onClick={toggleEditMode}>Submit</button>
            </div>
          }
        </div>
      </SetUserDataContext.Provider>
    </form >
  )
}

export default App
