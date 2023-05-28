import { Form, Input, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
const { TextArea } = Input;


const TodoInput = ({ addTask = () => { console.log("PLS pass the addTask"); },clearAll = () => {console.log("PLS pass the clear all");} }) => {

  const [form] = Form.useForm();

  const generateKey = () => {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }

  const getCurrentDateTime = () => {
    const now = new Date();
    const date = now.toISOString().split('T')[0];
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return { date, time };
  }

  const onFinish = (values) => {
    console.log('Success:', values);
    addTask({
      key: generateKey(),
      title: values['task-heading'],
      description: values['task-description'],
      completed: false,
      ...getCurrentDateTime()
    })
    form.resetFields();
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Form
        form={form}
        layout='vertical'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        onReset={() => form.resetFields()}
      >
        <Form.Item
          label="Enter task"
          name="task-heading"
          rules={[
            {
              required: true,
              message: 'Title cannot be empty!',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Enter description"
          name="task-description"
        >
          <TextArea autoSize={{ minRows: 1, maxRows: 6 }} />
        </Form.Item>
        <Form.Item>
          <div  style={{display:"flex", justifyContent:"space-between", width:"100%", flexWrap:"wrap", gap:"1em 0"}}>
            <div style={{display:"flex", gap:"1em"}}>
          <Button type="primary" htmlType="submit">
            <PlusOutlined /> Add TODO
          </Button>
          <Button type="primary" ghost htmlType="reset" >
             Reset
          </Button>
            </div>
          <Button type="primary" danger htmlType="reset" onClick={()=> clearAll()} >
             ❎ Clear all
          </Button>
          </div>
        </Form.Item>
      </Form>
    </>
  );
};

export default TodoInput;