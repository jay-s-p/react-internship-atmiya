import { Form, Input, Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons';
const { TextArea } = Input;


const TodoInput = ({ addTask = () => {console.log("PLS pass the addTask");} }) => {

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
  }
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Form
        name='todo'
        layout='vertical'
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
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
          <Button type="primary" htmlType="submit">
            <PlusOutlined /> Add TODO
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default TodoInput;