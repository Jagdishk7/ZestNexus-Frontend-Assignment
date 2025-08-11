import React, { useState } from "react";
import { Table, Tag, Input, Select } from "antd";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import type { Project } from "../../store/projectsSlice";
import { Link } from "react-router-dom";
import type { ColumnsType } from "antd/es/table";

const { Search } = Input;

interface ProjectTableProps {
  onEdit: (project: Project) => void;
  onDelete: (id: string) => void;
}

const statusColors: Record<string, string> = {
  Active: "green",
  Completed: "blue",
  Delayed: "red",
};

const ProjectTable: React.FC<ProjectTableProps> = ({ onEdit, onDelete }) => {
  const projects = useSelector((state: RootState) => state.projects);
  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | undefined>(
    undefined
  );

  const filteredProjects = projects.filter(
    (p) =>
      (!statusFilter || p.status === statusFilter) &&
      p.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns: ColumnsType<Project> = [
    {
      title: "Project Name",
      dataIndex: "name",
      key: "name",
      sorter: (a: Project, b: Project) => a.name.localeCompare(b.name),
      render: (text: string, record: Project) => (
        <Link
          className="text-blue-600 hover:underline"
          to={`/projects/${record.id}`}
        >
          {text}
        </Link>
      ),
    },
    {
      title: "Owner",
      dataIndex: "owner",
      key: "owner",
      sorter: (a: Project, b: Project) => a.owner.localeCompare(b.owner),
    },
    {
      title: "Start Date",
      dataIndex: "startDate",
      key: "startDate",
      sorter: (a: Project, b: Project) =>
        a.startDate.localeCompare(b.startDate),
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Due Date",
      dataIndex: "dueDate",
      key: "dueDate",
      sorter: (a: Project, b: Project) => a.dueDate.localeCompare(b.dueDate),
      render: (date: string) => new Date(date).toLocaleDateString(),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      filters: [
        { text: "Active", value: "Active" },
        { text: "Completed", value: "Completed" },
        { text: "Delayed", value: "Delayed" },
      ],
      onFilter: (value, record) => record.status === value,

      render: (status: string) => (
        <Tag color={statusColors[status]} className="font-semibold">
          {status}
        </Tag>
      ),
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: Project) => (
        <div className="flex gap-4">
          <button
            className="text-indigo-600 hover:text-indigo-900 font-semibold"
            onClick={() => onEdit(record)}
          >
            Edit
          </button>
          <button
            className="text-red-600 hover:text-red-900 font-semibold"
            onClick={() => onDelete(record.id)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-between mb-4 gap-2">
        <Search
          placeholder="Search Projects"
          allowClear
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: 240 }}
          enterButton
        />
        <Select
          placeholder="Filter by Status"
          allowClear
          style={{ width: 180 }}
          onChange={(value) => setStatusFilter(value)}
          options={[
            { label: "Active", value: "Active" },
            { label: "Completed", value: "Completed" },
            { label: "Delayed", value: "Delayed" },
          ]}
          value={statusFilter}
        />
      </div>
      <Table
        columns={columns}
        dataSource={filteredProjects}
        rowKey="id"
        pagination={{ pageSize: 5 }}
        bordered
        scroll={{ x: 800 }}
      />
    </>
  );
};

export default ProjectTable;
