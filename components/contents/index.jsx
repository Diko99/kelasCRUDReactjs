import React from 'react'
import DataSantri from './dataSantri'

const Contents = (props) => {
   return ( 
      <div className="container-fluid">
         { props.dataSantri && props.searchedSantri ? 
            <DataSantri 
            searchedSantri    = {props.searchedSantri}
            onHandleUpdate    = {props.onHandleUpdate}
            postDataSantri    = {props.postDataSantri}
            onHandleInput     = {props.onHandleInput}
            dataSantri        = {props.dataSantri}
            onHandleDelete    = {props.onHandleDelete}
            dataUpdate        = {props.dataUpdate}
            simpanDataSantri  = {props.simpanDataSantri}
            /> : null
         }
      </div>
   )
}

export default Contents