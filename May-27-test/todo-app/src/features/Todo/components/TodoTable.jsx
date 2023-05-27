import { useEffect, useState } from "react";
import { Table, Button, Checkbox, Modal, Input, Form } from 'antd'
const { TextArea } = Input;
import { EditOutlined, DeleteOutlined, ExclamationCircleFilled } from '@ant-design/icons';

const EditBtn = x => <Button {...x} shape='round' ghost type="primary"><EditOutlined /></Button>
const RemoveBtn = x => <Button {...x} shape='round' ghost danger><DeleteOutlined /></Button>

// TODO : Handle text overflow

const TodoTable = ({ data = [], setData = () => { console.log("PLS pass setData"); } }) => {

  useEffect(() => {
    console.log(data);
    console.log("data changed");
  }, [data])

  const showEditModal = (record) => {
    Modal.confirm({
      title: 'Edit task',
      icon: <EditOutlined />,
      okButtonProps: { style: { display: 'none' } },
      cancelButtonProps: { style: { display: 'none' } },
      content: (
        <>
          <Form onFinish={(v)=>{
            setData(data.map(x=>x.key===record.key?{...x,title:v['edit-name'],description:v['edit-description']}:x))
            Modal.destroyAll()
          }}>
            <Form.Item name="edit-name" initialValue={record.title} >
              <Input placeholder="Title"  />
            </Form.Item>
            <Form.Item  name="edit-description" initialValue={record.description} >
              <TextArea placeholder="Description" autoSize={{ minRows: 1, maxRows: 6 }} />
            </Form.Item>
              <div style={{display:"flex", flexDirection:"row-reverse", gap:"1em"}}>
              <Button type="primary" >
                Edit
              </Button>
              <Button type="primary" ghost >
                Cancel
              </Button>
              </div>
          </Form>
        </>
      ),
    });
  }

  const showDeleteConfirm = (record) => {
    Modal.confirm({
      title: 'Do you Want to delete this task?',
      icon: <ExclamationCircleFilled />,
      content: <><h3>{record.title}</h3>{record.description}</>,
      okText: 'Yes',
      onOk() {
        setData(data.filter(x => x.key !== record.key))
      },
      onCancel() {
      },
    });
  };

  let columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: "id",
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: "title"
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: "description"
    },
    {
      title: 'Action',
      dataIndex: 'action',
      key: "action",
      render: (text, record) => (
        <div style={{ display: "flex", gap: "0.5em", flexWrap:"wrap" }}>
          <EditBtn onClick={() => { showEditModal(record) }} />
          <RemoveBtn onClick={() => { showDeleteConfirm(record) }} />
        </div>
      )
    },
    {
      title: '',
      dataIndex: 'completed',
      key: "completed",
      render: (text, record) => (
        // use checkbox from antd for todo completed or not
        <div style={{ textAlign: "center" }} >
          <Checkbox
            checked={record.completed}
            onChange={(e) => {
              let newData = data.map(x => {
                if (x.key === record.key) {
                  x.completed = e.target.checked
                }
                return x
              })
              setData(newData)
            }}
          />
        </div>
      )
    }
  ]

  return (
    <>
      <Table columns={columns} dataSource={data} pagination={false} />
    </>
  );
};

export default TodoTable;