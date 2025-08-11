import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import KanbanBoard from "../../components/board/KanbanBoard";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = useSelector((state: RootState) =>
    state.projects.find((p) => p.id === id)
  );

  if (!project) return <div>Project not found</div>;

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <Button
        type="default"
        icon={<ArrowLeftOutlined />}
        onClick={() => navigate(-1)}
      >
        Back to Projects
      </Button>

      <div className="bg-white shadow rounded p-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{project.name}</h1>
          <p className="mt-1 text-gray-700">
            Owner: <b>{project.owner}</b>
          </p>
        </div>
        <div className="space-y-1">
          <p>
            <span className="font-semibold">Status:</span>{" "}
            <span
              className={`px-2 py-1 rounded-full font-semibold text-white ${
                project.status === "Active"
                  ? "bg-green-500"
                  : project.status === "Completed"
                  ? "bg-blue-600"
                  : "bg-red-600"
              }`}
            >
              {project.status}
            </span>
          </p>
          <p>
            <b>Start Date:</b>{" "}
            {new Date(project.startDate).toLocaleDateString()}
          </p>
          <p>
            <b>Due Date:</b> {new Date(project.dueDate).toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="bg-white rounded shadow p-6">
        <h2 className="text-2xl font-semibold mb-3">Tasks</h2>
        <KanbanBoard projectId={project.id} />
      </div>
    </div>
  );
};

export default ProjectDetails;
