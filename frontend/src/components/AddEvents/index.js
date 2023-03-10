import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import './AddEvents.css';
import * as eventsAction from "../../store/events";
import * as sessionActions from "../../store/session";
import {
    Button,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Select,
    Upload
   } from 'antd';
   const { TextArea } = Input;

function AddEvents ()  {
    const dispatch = useDispatch();
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [params, setParams] = useState({
        eventTitle: '',
        clubName: '',
        eventType: '',
        description: '',
        location: '',
        date: '',
        ticketInventory: ''
    })



    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(eventsAction.addevent({params}))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            })
            .then(history.push("/home"))
    }
    const onReset = () =>{}

    return (
        <div class='addEvent'>
            <img src={require('../../assets/images/arena.jpeg')} className='banner'/>
            <div className='box'>
                <div className="title">
                    <h2>Add Event</h2>
                </div>
                <Form
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 24,
                    }}
                    layout="horizontal"
                    // onValuesChange={onFormLayoutChange}
                    // disabled={componentDisabled}
                    style={{
                        maxWidth: 800,
                    }}
                    >
                    <Form.Item name="eventTitle" label="Event Title" rules={[{required: true},]}>
                        <Input
                            onChange={e => {params.eventTitle = e.target.value}}
                            value={params.eventTitle}
                        />
                    </Form.Item>
                    <Form.Item name="clubName" label="Club Name" rules={[{required: true,},]}>
                        <Input
                            onChange={e => {params.clubName = e.target.value}}
                            value={params.clubName}
                        />
                    </Form.Item>
                    <Form.Item name="eventType" label="Event Types" rules={[{required: true,},]}>
                        <Select onChange={e =>{params.eventType = e }}>
                            <Select.Option value="Academic">Academic</Select.Option>
                            <Select.Option value="Recreation">Recreation</Select.Option>
                            <Select.Option value="Sports">Sports</Select.Option>
                            <Select.Option value="Others">Others</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="description" label="Description" rules={[{required: true,},]}>
                        <TextArea
                            rows={4}
                            onChange={e => {params.description = e.target.value}}
                            value={params.description}
                        />
                    </Form.Item>
                    <Form.Item name="location" label="Location" rules={[{required: true,},]}>
                        <Input
                            onChange={e => {params.location = e.target.value}}
                            value={params.location}
                        />
                    </Form.Item>
                    <Form.Item name="date" label="Date" rules={[{required: true,},]}>
                        <DatePicker
                                onChange={(date,dateString) => {params.date = dateString}}
                                value={params.date}
                        />
                    </Form.Item>
                    <Form.Item name="ticketInventory" label="Inventory" rules={[{required: true,},]}>
                        <InputNumber
                            onChange={value => {params.ticketInventory = value}}

                            value={params.ticketInventory}
                        />
                    </Form.Item>
                    <Form.Item className='buttons'>
                        <Button className='addSubmit' type="primary" htmlType="submit" onClick={handleSubmit}>Add</Button>
                        <Button className='addReset' htmlType="button" onClick={onReset}>Reset</Button>
                </Form.Item>
                </Form>
            </div>
        </div>

    );

}

export default AddEvents;
