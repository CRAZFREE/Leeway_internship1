import React from 'react';
import { Form} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';  

import {useSelector} from 'react-redux';

function View() {   
    const firstName= useSelector(state=>state.user.fname);
    const lastName= useSelector(state=>state.user.lname);
    const email= useSelector(state=>state.user.email);

        return(
            <Form>
            <Form.Input placeholder={firstName} readOnly  />
            <Form.Input placeholder={lastName} readOnly />
            <Form.Input placeholder={email} readOnly />
            
          </Form>
        );
}

export default View;