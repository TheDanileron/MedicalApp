import React from "react"
import test_hospitals from "../test_data/hospitals"
import HospitalItem from "./HospitalItem"

export default class HospitalList extends React.Component{
    render() {
        return <div>
            {test_hospitals.map((item, index) => <HospitalItem key={index} item={item}/>)}
        </div>
    }
}