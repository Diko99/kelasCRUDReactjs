import React from 'react'
import DataSantri from './dataSantri'

const Contents = (props) => {
   return ( 
      <div className="container-fluid">
         { props.dataSantri ? 
            <DataSantri 
            value             = {props.value}
            searchedSantri    = {props.searchedSantri}
            newDataSantri     = {props.newDataSantri}
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