import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { useForm } from './components/useForm';
import $ from 'jquery';

function App() {
  const [values,handleChange] = useForm({email:'',password:'',car:'',house:false,verify:false})

  useEffect(()=>{
    $(".car").on("change", function (e) {
    // console.log(e.target.value)
    handleChange(e)
    console.log("car change")
    // console.log(values.car)
  });  
},[])

  return (
    <div className="App">
      <form>
      <div className="form-group row">
      <div className="form-group col">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="text" name="email" id="exampleInputEmail1" value={values.email} onChange={handleChange} />
      </div>
      <div className="form-group col">
        <label htmlFor="exampleInputPassword">ＰassWord</label>
        <input type="password" name="password" id="exampleInputPassword" value={values.password} onChange={handleChange}></input>
      </div>
      <div className="form-group col">
      <label htmlFor="exampleInputCar">Car Choice</label>
      <select name="car" id="exampleInputCar" className="car form-control form-control-lg">
        <option value="1">Volvo</option>
        <option value="2">Saab</option>
        <option value="3">Opel</option>
        <option value="4">Audi</option>
      </select>
      </div>
      <div className="form-group col">
      <input type="checkbox" name="house" value={values.house} checked={values.house} onChange={handleChange}></input>
      </div>
      <div className="form-group col">
      <input type="radio" name="verify" value={values.verify} checked={values.verify?true:false} onChange={handleChange} />是
      <input type="radio" name="verify" value={values.verify} checked={!values.verify?true:false} onChange={handleChange} />否
      </div>
      </div>
      </form>
    </div>
  );
}

export default App;
