import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../store";
import {
  addTask,
  removeTask,
  moveTask,
  type Task,
  type TaskStatus,
} from "../../store/tasksSlice";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import { v4 as uuidv4 } from "uuid";
import { Button, Input } from "antd";
import clsx from "clsx";

const columns: TaskStatus[] = ["To Do", "In Progress", "Done"];

function Column({
  status,
  children,
}: {
  status: TaskStatus;
  children: React.ReactNode;
}) {
  const { setNodeRef, isOver } = useDroppable({ id: status });

  return (
    <div
      ref={setNodeRef}
      className={clsx(
        "bg-white rounded-lg p-4 flex-1 min-h-[300px] border border-gray-300 transition-all",
        isOver && "border-blue-500 shadow-lg"
      )}
    >
      <h3 className="text-lg font-semibold mb-3 text-gray-700">{status}</h3>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
}

function DraggableTask({ task }: { task: Task }) {
  const { setNodeRef, listeners, attributes, isDragging } = useDraggable({
    id: task.id,
  });
  const dispatch = useDispatch();

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={clsx(
        "p-3 rounded shadow bg-gray-100 flex justify-between items-center cursor-pointer select-none",
        isDragging && "opacity-50"
      )}
    >
      <span className="text-gray-800">{task.title}</span>
      <Button
        size="small"
        danger
        type="text"
        onClick={(e) => {
          e.stopPropagation(); // Prevent accidental drag
          dispatch(removeTask(task.id));
        }}
      >
        Remove
      </Button>
    </div>
  );
}

export default function KanbanBoard({ projectId }: { projectId: string }) {
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) =>
    state.tasks.filter((t) => t.projectId === projectId)
  );

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [selectedColumn, setSelectedColumn] = useState<TaskStatus>("To Do");

  // ✅ Enable smooth drag with mouse
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    })
  );

  const handleAddTask = () => {
    if (!newTaskTitle.trim()) return;
    dispatch(
      addTask({
        id: uuidv4(),
        projectId,
        title: newTaskTitle.trim(),
        status: selectedColumn,
      })
    );
    setNewTaskTitle("");
  };

  const onDragEnd = (event: any) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      dispatch(moveTask({ id: active.id, status: over.id }));
    }
  };

  return (
    <>
      <DndContext sensors={sensors} onDragEnd={onDragEnd}>
        <div className="flex gap-6 flex-col sm:flex-row">
          {columns.map((col) => (
            <Column key={col} status={col}>
              {tasks
                .filter((t) => t.status === col)
                .map((task) => (
                  <DraggableTask key={task.id} task={task} />
                ))}
              {selectedColumn === col && (
                <div className="mt-2">
                  <Input
                    size="small"
                    placeholder="New task title"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    onPressEnter={handleAddTask}
                  />
                  <Button
                    size="small"
                    type="primary"
                    className="mt-1 w-full"
                    onClick={handleAddTask}
                  >
                    Add
                  </Button>
                </div>
              )}
            </Column>
          ))}
        </div>
      </DndContext>

      {/* Column selection buttons */}
      <div className="flex justify-center mt-4 flex-wrap gap-2">
        {columns.map((col) => (
          <Button
            key={col}
            type={selectedColumn === col ? "primary" : "default"}
            onClick={() => setSelectedColumn(col)}
          >
            Add Task to "{col}"
          </Button>
        ))}
      </div>
    </>
  );
}
