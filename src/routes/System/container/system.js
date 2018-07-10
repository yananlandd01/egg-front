import React from 'react';
import {connect} from 'dva';
import '../css/index.less';
import {Form, Icon, Input, Button} from 'antd';

const FormItem = Form.Item;

class AppComponent extends React.Component {
  handleSubmit = e => {
    const {dispatch} = this.props;
    e.preventDefault ();
    this.props.form.validateFields ((err, values) => {
      if (!err) {
        console.log ('Received values of form: ', values);
      }
      dispatch ({
        type: 'login/getLogin',
        payload: values,
      });
    });
  };

  render () {
    return <section className="login" />;
  }
}

export default connect (({login}) => {
  return {
    login: login,
  };
}) (Form.create () (AppComponent));
