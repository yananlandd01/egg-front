import React from 'react';
import {connect} from 'dva';
import './index.less';
import {Form, Icon, Input, Button} from 'antd';

const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
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
    const {getFieldDecorator} = this.props.form;
    return (
      <section className="login">
        <Form onSubmit={this.handleSubmit} className="login-form login-center">
          <FormItem>
            {getFieldDecorator ('userName', {
              rules: [{required: true, message: 'Please input your username!'}],
            }) (
              <Input
                prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}} />}
                placeholder="Username"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator ('password', {
              rules: [{required: true, message: 'Please input your Password!'}],
            }) (
              <Input
                prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}} />}
                type="password"
                placeholder="Password"
              />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator ('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })}
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{width: '100%'}}
            >
              Log in
            </Button>
          </FormItem>
        </Form>
      </section>
    );
  }
}

const WrappedNormalLoginForm = Form.create () (NormalLoginForm);

export default connect (({login}) => {
  return {
    login: login,
  };
}) (WrappedNormalLoginForm);
