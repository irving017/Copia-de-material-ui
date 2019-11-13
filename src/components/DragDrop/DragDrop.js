import React, { useState }  from 'react';
import Column from './Column';
import { DragDropContext } from 'react-beautiful-dnd';

const initialData= {
  questions: {
    'question-1': { id: 'question-1', content: 'This is the cuestion one' },
    'question-2': { id: 'question-2', content: 'This is the cuestion two' },
    'question-3': { id: 'question-3', content: 'This is the cuestion three' },
    'question-4': { id: 'question-4', content: 'This is the cuestion four' },
  },
  'question-order': ['question-1', 'question-2', 'question-3', 'question-4']
}

const DragDrop = () => {
  const [ data, setData ] = useState(initialData);
  console.log(data);
  const questions = data['question-order'].map( question => data.questions[question]);
  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return
    if (destination.index === source.index) return
    const newOrder = Array.from(data['question-order']);
    newOrder.splice(source.index, 1);
    newOrder.splice(destination.index,0,draggableId);
    const newData = {
      ...data,
      'question-order': newOrder
    };
    return setData(newData);
  }
  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <Column questions = {questions} />
    </DragDropContext>
  );
};

export default DragDrop;
