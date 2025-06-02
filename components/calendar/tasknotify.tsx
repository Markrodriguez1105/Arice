// TaskNotify.tsx
import React, { useMemo } from 'react';

type TaskNotifyProps = {
  tasks: { [date: string]: string[] };
  selectedDate: string;
};

const TaskNotify: React.FC<TaskNotifyProps> = ({ tasks, selectedDate }) => {
  return null;
};

// Helper function to generate markedDates object
export const getMarkedDates = (
  tasks: { [date: string]: string[] },
  selectedDate: string,
) => {
  const marks: { [key: string]: any } = {};

  Object.keys(tasks).forEach(date => {
    marks[date] = {
      marked: true,
      dotColor: 'red',
    };
  });

  if (selectedDate) {
    marks[selectedDate] = {
      ...(marks[selectedDate] || {}),
      selected: true,
      selectedColor: '#00C58D',
      selectedTextColor: '#fff',
    };
  }

  return marks;
};

export default TaskNotify;
