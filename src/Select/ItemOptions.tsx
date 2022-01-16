import React from "react";
import s from "./SelectStyle.module.scss";


type ItemOptionsPropsType = {
    id:number
    title:string
    changeSelected:(id:number) => void
    value?:{id:number,title:string}
}
export const ItemOptions = (props:ItemOptionsPropsType) => {
    const onChangeSelected = () => {
      props.changeSelected(props.id)
    }
    const finalClassForItem = `${props.value && props.value.title === props.title ? s.good : ''} ${s.itemOption}`
    return(
        <div key={props.id}  onClick={onChangeSelected} className={finalClassForItem}>{props.title}</div>
    )
}