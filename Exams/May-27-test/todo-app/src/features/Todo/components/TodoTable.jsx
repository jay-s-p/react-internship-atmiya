import { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined, ExclamationCircleFilled } from '@ant-design/icons';
import '../assets/Checkbox.css'
import { Table, Button, Checkbox, Modal, Input, Form, Typography } from 'antd'
const { TextArea } = Input;
const { Paragraph, Text } = Typography;


const EditBtn = x => <Button {...x} shape='round' ghost type="primary"><EditOutlined /></Button>
const RemoveBtn = x => <Button {...x} shape='round' ghost danger><DeleteOutlined /></Button>

// TODO : Handle text overflow

const TodoTable = ({ data = [], setData = () => { console.log("PLS pass setData"); } }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 987);
    };

    handleResize(); // Check on initial mount

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   console.log(data[0].key, data[1].key , data[0].completed , " - ", data[1].completed);
  //   console.log("data changed");
  // }, [data])

  const showEditModal = (record) => {
    Modal.confirm({
      title: 'Edit task',
      icon: <EditOutlined />,
      okButtonProps: { style: { display: 'none' } },
      cancelButtonProps: { style: { display: 'none' } },
      style: !isDesktop && { top: "calc(100vh - 20em)",bottom:100 },
      content: (
        <>
          <Form onFinish={(v) => {
            setData(data.map(x => x.key === record.key ? { ...x, title: v['edit-name'], description: v['edit-description'] } : x))
            Modal.destroyAll()
          }}>
            <Form.Item name="edit-name" initialValue={record.title} >
              <Input placeholder="Title" />
            </Form.Item>
            <Form.Item name="edit-description" initialValue={record.description} >
              <TextArea placeholder="Description" autoSize={{ minRows: 1, maxRows: 6 }} />
            </Form.Item>
            <div style={{ display: "flex", flexDirection: "row-reverse", gap: "1em" }}>
              <Button type="primary" htmlType="submit">
                Edit
              </Button>
              <Button type="primary" ghost onClick={Modal.destroyAll}>
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
      title: '',
      dataIndex: 'completed',

      fixed: 'left',
      width: 55,
      key: 'completed',
      render: (text, record) => (
        <div style={{ textAlign: 'center', maxWidth: "1em", margin: "0" }}>
          <label className="checkbox">
            <input
              onChange={(e) => { }}
              onClick={(e) => {
                console.log("lol");
                let newData = data.map((x) => {
                  if (x.key === record.key) {
                    x.completed = e.target.checked;
                  }
                  return x;
                });
                setData(newData);
              }}
              className="checkbox__input"
              type="checkbox"
              checked={record.completed}
            />
            <svg className="checkbox__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22">
              <rect width={29} height={29} x=".5" y=".5" fill="#FFF" stroke="#006F94" rx={20.5} />
              <path className="tick" stroke="#6EA340" fill="none" strokeLinecap="round" strokeWidth={4} d="M9 15l4 4 8-8" />
            </svg>
          </label>
        </div>
      ),
    },
  ];

  if (isDesktop) {
    columns.push(
      {
        title: 'Title',
        dataIndex: 'title',
        key: 'title',
        render: (text, record) => (
          <>
            <Paragraph
              delete={record.completed}
              style={{ maxWidth: "20em", margin: "0" }}
              ellipsis={{
                rows: 1,
                width: 10,
              }}>
              {record.title}
            </Paragraph>
          </>
        )
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description',
        render: (text, record) => (
          <>
            <Paragraph
              delete={record.completed}
              style={{ maxWidth: "20em", margin: "0" }}
              ellipsis={{
                rows: 3,
                width: 10,
              }}>
              {record.description}
            </Paragraph>
          </>
        )
      },
      {
        title: 'Action',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => (
          <div style={{ display: 'flex', gap: '0.5em' }}>
            <EditBtn onClick={() => showEditModal(record)} />
            <RemoveBtn onClick={() => showDeleteConfirm(record)} />
          </div>
        ),
      },
    );
  } else {
    columns.push({
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      render: (text, record) => (
        <div style={{ display: 'flex', flexDirection: "column" }}>
          <Paragraph
            delete={record.completed}
            style={{ margin: "0", maxWidth: "15em" }}
            ellipsis={{
              rows: 1,
              width: 10,
            }}>
            {record.title}
          </Paragraph>
          <Paragraph

            style={{ margin: "0", maxWidth: "15em", color: "#777" }}
            ellipsis={{
              rows: 1,
              width: 10,
            }}>
            {record.description}
          </Paragraph>
          <div style={{ display: "flex", gap: '0.5em', marginTop: "0.2em" }}>
            <EditBtn onClick={() => showEditModal(record)} />
            <RemoveBtn onClick={() => showDeleteConfirm(record)} />
          </div>
        </div>
      ),
    });
  }


  return (
    <>
      <Table columns={columns} dataSource={data} pagination={false}
        scroll={{
          y: "calc(100vh - 32em)",
        }} />
    </>
  );
};

export default TodoTable;