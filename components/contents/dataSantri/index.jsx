import React from 'react'

const renderDataSantri = (props) => {
   return props.searchedSantri && props.value 
            ? props.newDataSantri
            : props.dataSantri
}

const DataSantri = (props) => {
   console.log(props)
   return (
      <table className="table table-hover text-white">
      <thead>
         <tr>
            <th scope="col">ID</th>
            <th scope="col">Nama</th>
            <th scope="col">Jurusan</th>
            <th scope="col" className="text-center" >Action</th>
         </tr>
      </thead>
      <tbody>
         { renderDataSantri(props).map((item, id) => (
            <tr key={id}>
               <th scope="row">{item.id}</th>
               <td>{item.name}</td>
               <td>{item.username}</td>
               <td className='row justify-content-center'>
                  <button 
                     className   = "btn btn-sm btn-default btn-danger"
                     onClick     = {()=>props.onHandleDelete(item.id)}
                  >
                     Delete
                  </button>
                  <button 
                     className   = "btn btn-sm btn-default btn-warning text-light ml-1" 
                     data-toggle = "modal" 
                     data-target = "#dataUpdate"
                     onClick     = {()=>props.dataUpdate(item)}
                  >
                     Edit
                  </button>
         <div className="modal fade" id="dataUpdate" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title text-dark" id="exampleModal">Update data santri</h5>
                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                     <span aria-hidden="true">&times;</span>
                  </button>
                  </div>
                  <div className="modal-body text-dark">
                     <label htmlFor="exampleInputEmail1" >Update Santri</label>
                     <input
                        className   = "form-control" 
                        placeholder = "Nama Santri.."
                        onChange    = {props.onHandleInput}
                        name        = "name" 
                        value       = {props.postDataSantri.name}
                     />
                     <label htmlFor="exampleInputEmail1" className="mt-4">Update Jurusan</label>
                     <input 
                        className   = "form-control" 
                        placeholder = "Jurusan..."
                        onChange    = {props.onHandleInput}
                        name        = "username"
                        value       = {props.postDataSantri.username}
                     />
                  </div>
                  <div className="modal-footer">
                     <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Close</button>
                     <button 
                        type        = "button" 
                        className   = "btn btn-warning text-light"
                        onClick     = {()=>props.onHandleUpdate(item.id)}
                     >
                        Update
                     </button>
                  </div>
               </div>
            </div>
         </div>
               </td>
            </tr>
         ))
         }
      </tbody>
   </table>
   )
}

export default DataSantri