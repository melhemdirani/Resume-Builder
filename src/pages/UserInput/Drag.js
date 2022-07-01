

import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Drag = () => {
   const  List =[
        {
            title: "ss1",
            id: 1

        },
        {
            title: "ss2",
            id: 2

        },
        {
            title: "ss",
            id: 3

        },
    ]
    let list =[]
  return (
    <div className="App">
      <DragDropContext
        
      >
          <h1>The List</h1>
          <Droppable droppableId="droppable-1">
            {(provided, _) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {List.map((item, i) => (
                  <Draggable
                    key={item.id}
                    draggableId={"draggable-" + item.id}
                    index={i}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        style={{
                          ...provided.draggableProps.style,
                          boxShadow: snapshot.isDragging
                            ? "0 0 .4rem #666"
                            : "none",
                        }}
                      >
                        <button {...provided.dragHandleProps} >drag {item.title}</button>
                        <span>{item.title}</span>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
      </DragDropContext>
    </div>
  );
};

export default Drag;