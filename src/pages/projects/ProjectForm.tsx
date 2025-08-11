import React, { useEffect } from "react";
import { Modal, Form, Input, DatePicker, Select } from "antd";
import type { Project } from "../../store/projectsSlice";
import { addProject, editProject } from "../../store/projectsSlice";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";

const { Option } = Select;

interface Props {
  visible: boolean;
  onCancel: () => void;
  editingProject?: Project;
}

export default function ProjectForm({
  visible,
  onCancel,
  editingProject,
}: Props) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  // ✅ Make sure form is updated whenever editingProject changes
  useEffect(() => {
    if (editingProject) {
      form.setFieldsValue({
        name: editingProject.name,
        owner: editingProject.owner,
        status: editingProject.status,
        startDate: dayjs(editingProject.startDate),
        dueDate: dayjs(editingProject.dueDate),
      });
    } else {
      form.resetFields();
    }
  }, [editingProject, form, visible]);

  const handleOk = () => {
    form.validateFields().then((values) => {
      const payload: Project = {
        id: editingProject ? editingProject.id : uuidv4(),
        name: values.name,
        owner: values.owner,
        startDate: values.startDate.format("YYYY-MM-DD"),
        dueDate: values.dueDate.format("YYYY-MM-DD"),
        status: values.status,
      };
      if (editingProject) {
        dispatch(editProject(payload));
      } else {
        dispatch(addProject(payload));
      }
      onCancel();
    });
  };

  return (
    <Modal
      title={editingProject ? "Edit Project" : "Add Project"}
      open={visible}
      onOk={handleOk}
      onCancel={onCancel}
      destroyOnClose
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="name"
          label="Project Name"
          rules={[{ required: true }]}
        >
          <Input placeholder="Enter project name" />
        </Form.Item>
        <Form.Item name="owner" label="Owner" rules={[{ required: true }]}>
          <Input placeholder="Enter owner name" />
        </Form.Item>
        <Form.Item
          name="startDate"
          label="Start Date"
          rules={[{ required: true }]}
        >
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name="dueDate" label="Due Date" rules={[{ required: true }]}>
          <DatePicker style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item name="status" label="Status" rules={[{ required: true }]}>
          <Select placeholder="Select status">
            <Option value="Active">Active</Option>
            <Option value="Completed">Completed</Option>
            <Option value="Delayed">Delayed</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}
