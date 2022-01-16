import React, {useState} from "react";
import {Select} from "./Select";


const arrayCity = [
  {id:1,title:'St.Petersburg'},
  {id:2,title:'Moscow'},
  {id:3,title:'Ufa'},
  {id:4,title:'Krasnodar'},

]
export const MySelect = () => {
  const [value, setValue] = useState(arrayCity[1])
  const changeValue = (id:number) => {
    debugger
    let newValue = arrayCity.filter(item => item.id === id)
    setValue(newValue[0])
  }

  return <Select options={arrayCity} value={value} changeValue={changeValue} />
}