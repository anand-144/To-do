import React, { useState, useEffect } from 'react';

// Predefined list of people to assign tasks to
const teamMembers = ['Anand Singh', 'Team Member 1', 'Team Member 2', 'Team Member 3'];

const tasks = [
  { id: 1, title: 'Self-Reflection & Goal Setting (5-10 mins)', category: 'Morning Routine' },
  { id: 2, title: 'Mindfulness or Quick Exercise (15-20 mins)', category: 'Morning Routine' },
  { id: 3, title: 'Reading or Knowledge Intake (10-15 mins)', category: 'Morning Routine' },
  { id: 4, title: 'Learning New Concepts (1 hour)', category: 'Technical Skill-Building' },
  { id: 5, title: 'Practice with Small Projects or Code Challenges (1 hour)', category: 'Technical Skill-Building' },
  { id: 6, title: 'Build/Refactor Projects (1 hour)', category: 'Project Work or Experimentation' },
  { id: 7, title: 'Experiment with New Tools/Technologies (1 hour)', category: 'Project Work or Experimentation' },
  { id: 8, title: 'Code Reviews & Mentorship (30 mins)', category: 'Collaboration & Communication' },
  { id: 9, title: 'Improve Communication Skills (30 mins)', category: 'Collaboration & Communication' },
  { id: 10, title: 'Mindset & Emotional Intelligence (15 mins)', category: 'Soft Skills Development' },
  { id: 11, title: 'Public Speaking & Presentation (15 mins)', category: 'Soft Skills Development' },
  { id: 12, title: 'Engage in Online Communities', category: 'Networking & Community Involvement' },
  { id: 13, title: 'Review & Planning (15-20 mins)', category: 'Review & Planning' },
  { id: 14, title: 'Unwind & Recharge', category: 'Personal Time & Relaxation' },
];

// Function to assign tasks randomly from the available team members
const assignTasks = (tasks) => {
  return tasks.map(task => ({
    ...task,
    assignedTo: teamMembers[Math.floor(Math.random() * teamMembers.length)],
  }));
};

function ToDoList() {
  const [completedTasks, setCompletedTasks] = useState([]);
  const [assignedTasks, setAssignedTasks] = useState([]);

  useEffect(() => {
    setAssignedTasks(assignTasks(tasks));
  }, []);

  const handleToggleTask = (taskId) => {
    if (completedTasks.includes(taskId)) {
      setCompletedTasks(completedTasks.filter(id => id !== taskId));
    } else {
      setCompletedTasks([...completedTasks, taskId]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-10 p-5 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-5">Daily Developer To-Do List</h1>
      <div className="space-y-4">
        {assignedTasks.map(task => (
          <div key={task.id} className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={completedTasks.includes(task.id)}
                onChange={() => handleToggleTask(task.id)}
                className="mr-3"
              />
              <span className={`text-lg ${completedTasks.includes(task.id) ? 'line-through text-gray-500' : ''}`}>
                {task.title}
              </span>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-sm text-gray-400">{task.category}</span>
              <span className="text-xs text-gray-500 mt-2">Assigned to: {task.assignedTo}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
