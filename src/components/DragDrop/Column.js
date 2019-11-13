import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Element from './Element'


const ColumnWrapper = styled.div`
  border: 1px dotted black;
  padding: 20px;
`;

const Column = ({ questions }) => {
  return (
    <div>
      This is the dnd zone
      <Droppable droppableId='1'>
        {provided => (
          <ColumnWrapper
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {questions.map((question, index) => <Element key={question.id} question={question} index={index}/>)}
            {provided.placeholder}
          </ColumnWrapper>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
