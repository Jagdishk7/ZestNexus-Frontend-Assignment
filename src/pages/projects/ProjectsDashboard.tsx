import { useState } from "react";
import { Button } from "antd";
import ProjectTable from "../../components/table/ProjectTable";
import ProjectForm from "./ProjectForm";
import { useDispatch } from "react-redux";
import type { Project } from "../../store/projectsSlice";
import { deleteProject } from "../../store/projectsSlice";
import { PlusOutlined } from "@ant-design/icons";

const ProjectsDashboard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | undefined>(
    undefined
  );
  const dispatch = useDispatch();

  const openAddModal = () => {
    setEditingProject(undefined);
    setModalVisible(true);
  };

  const openEditModal = (project: Project) => {
    setEditingProject(project);
    setModalVisible(true);
  };

  const onDelete = (id: string) => {
    dispatch(deleteProject(id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={openAddModal}
          size="large"
        >
          Add Project
        </Button>
      </div>
      <ProjectTable onEdit={openEditModal} onDelete={onDelete} />
      <ProjectForm
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        editingProject={editingProject}
      />
    </div>
  );
};

export default ProjectsDashboard;
