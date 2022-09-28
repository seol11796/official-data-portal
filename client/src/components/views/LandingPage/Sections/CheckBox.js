import React, { useState } from 'react'
import { Collapse, Checkbox } from 'antd';

const { Panel } = Collapse;

function CheckBox(props) {

    // 이 state는 클릭한 check에 해당하는 _id를 기억하는 것. 
    const [Checked, setChecked] = useState([])

    const handleToggle = (value) => {

        //누른 것의 Index를 구하고 
        const currentIndex = Checked.indexOf(value)
        //전체 Checked된 State에서  현재 누른 Checkbox가 이미 있다면 
        const newChecked = [...Checked]

        // State 넣어준다. 
        // 
        if (currentIndex === -1) {
            newChecked.push(value)
            // 빼주고 
        } else {
            newChecked.splice(currentIndex, 1)
        }
        setChecked(newChecked)
        props.handleFilters(newChecked)
    }


// LandingPage를 보면 <Checkbox list={continents} /> 와 같이 list라는  이름의 prop을 넘겨줌. 
    const renderCheckboxLists = () => props.list && props.list.map((value, index) => (
        <React.Fragment key={index} >
            <Checkbox onChange={() => handleToggle(value._id)}
                checked={Checked.indexOf(value._id) === -1 ? false : true} />
            <span>{value.name}</span>
        </React.Fragment>
    ))

    return (
        <div>
            <Collapse defaultActiveKey={['0']} >
                <Panel header="Continents" key="1">
                    
                    {renderCheckboxLists()}

                </Panel>
            </Collapse>
        </div>
    )
}

export default CheckBox
