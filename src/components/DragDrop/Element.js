import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { AvatarCard, Icon, Card } from 'generation-ui-components/dist/generation-ui-components';

const Element = ({ question, index }) => {
  const generateContentItems = () => {
    return [
      <div>This is some kind of contentcontentcontentcontentcontentcontentcontentcontent</div>,
    ];
  }
  const generateActions = () => {
    return [
      <Icon size="x2">drag</Icon>,
    ];
  }
  const generateIcon = (isActive, text) => {
    return <div style={{ 
      width: '21px',
      height:'21px',
      backgroundColor: isActive ? '#0084ff': 'rgba(0, 0, 0, 0.45)',
      borderRadius: '10px',
    }}>
      <div style={{
        width: '11px',
        height: '21px',
        mixBlendMode: 'luminosity',
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 'normal',
        letterSpacing: 'normal',
        color: 'white',
        padding: '0px 0px 5px 5px',
      }}>
        {text}
      </div>
    </div>;
    return <AvatarCard.AvatarBubble size='x1' color='blue'>1</AvatarCard.AvatarBubble>
  }
  return (
    <Draggable draggableId={question.id} index={index}>
      {provided => (
          <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
           <Card
            actions={generateActions()}
            contentItems={generateContentItems()}  
            header={question.content}
            icon={generateIcon(true, '3')} 
            isActive
          />
        </div>
      )}
    </Draggable>
  );
};

export default Element;
