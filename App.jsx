import React, { Component } from 'react';
import Header from './components/header';
import Navbar from './components/navbar';
import Contents from './components/contents';
import axios from 'axios'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
        dataSantri : [],
        newDataSantri : [],
        value : '',
        postDataSantri : {
          name: '',
          username : ''
        },
        isUpdate : false
    }
  }

  componentDidMount() {
    this.getDataSantri()
  }
  getDataSantri = () => {
    axios.get(`http://localhost:4000/posts?_sort=id&_order=desc`)
    .then((result) => {
        this.setState({
          dataSantri : result.data,
        })
    })
  }
  postDataSantri = () => {
    axios.post(`http://localhost:4000/posts `, this.state.postDataSantri)
    .then((result) => {
      console.log(result);
      this.getDataSantri()
    })
  }
  putDataSantri = () => {
    axios.put(`http://localhost:4000/posts/${this.state.postDataSantri.id}`, this.state.postDataSantri)
    .then(res => {
      this.getDataSantri()
    })
  }
  onHandleInput = (event) => {
    let NewPostDataSantri = {...this.state.postDataSantri}
    NewPostDataSantri[event.target.name] = event.target.value
    let timeid = new Date().getTime()
    
    if(!this.state.isUpdate){
      NewPostDataSantri['id'] = timeid
    }
    
    this.setState({
      postDataSantri : NewPostDataSantri
    }, () => {
      console.log(this.state.postDataSantri, 'isi state.postDataSantri');
    })
  }
  simpanDataSantri = () => {
    this.postDataSantri()
    console.log('data telah tersimpan');
    this.setState({
      postDataSantri: {
        name: '',
        username: ''
      }
    })
  }
  onHandleDelete = (id) => {
    axios.delete(`http://localhost:4000/posts/${id}`)
    .then(res => {
      alert('yakin mau dihapus ???', res);
      this.getDataSantri()
    })
  }
  dataUpdate = (e) => {
    this.setState({
      postDataSantri : e,
      isUpdate : true
    })
  }
  onHandleUpdate = () => {
    this.putDataSantri()
      this.setState({
        postDataSantri : {
          name: '',
          username: ''
        }
      })
  }
  searchedSantri = (e) => {
    this.setState ({
      value : e.target.value
    }, () => {
      if(this.state.dataSantri) {
        const searchedSantri = this.state.dataSantri.filter (
          item => (
            item.name.toLowerCase().indexOf(this.state.value.toLowerCase()) > -1
          )
        )
        this.setState({
          newDataSantri : searchedSantri
        })
      }
    })
  }
  render() {
    
    const { onHandleInput, simpanDataSantri, onHandleDelete, onHandleUpdate, dataUpdate, searchedSantri } = this
    const { dataSantri, newDataSantri, postDataSantri, value } = this.state

    return (
      <div className="container-fluid bg-info text-light">
        <Header />
        <Navbar 
          onHandleInput       = {onHandleInput}  
          simpanDataSantri    = {simpanDataSantri}
          postDataSantri      = {postDataSantri}
          searchedSantri      = {searchedSantri}
        />
        <Contents 
          onHandleUpdate    = {onHandleUpdate}
          onHandleInput     = {onHandleInput}
          simpanDataSantri  = {simpanDataSantri}
          onHandleDelete    = {onHandleDelete}
          dataUpdate        = {dataUpdate}
          newDataSantri     = {newDataSantri}
          dataSantri        = {dataSantri}
          postDataSantri    = {postDataSantri}
          searchedSantri    = {searchedSantri}
          value             = {value}
        />
      </div>
    )
  }
}
export default App;
