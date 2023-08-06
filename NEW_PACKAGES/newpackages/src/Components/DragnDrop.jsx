// import React, { useState } from 'react'
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
// import { dragData } from './HELPER'


// export const DragnDrop = () => {
//     const [item, setItems] = useState(dragData)
//     const reOrder = (list, startIndex, EndIndex) => {
//         const result = Array.from(list);
//         const [remove] = list.splice(startIndex, 1);
//         list.splice(EndIndex, 0, remove)
//         return result
//     }
//     const onDragEnd = (result) => {
//         console.log('result', result)
//         if (!result) {
//             return

//         }
//         const reorderedlist = reOrder(item, result.source.index, result.destination.index);
//         setItems(reorderedlist)

//     }

//     return (
//         <div>
//             <DragDropContext onDragEnd={onDragEnd}>
//                 <Draggable droppableId="droppable">
//                     {(provider, snapshots) => (
//                         <div  {...provider.draggableProps} ref={provider.innerRef} >
//                             {
//                                 item.map((i, index) => {
//                                     return <Draggable draggableId={i.id} key={item.id} index={index} style={{ background: 'red',   margin: 20 }}>
//                                         {(provider, snapshots) => {
//                                             return <div style={{ background: 'red', width: 100, height: 100, margin: 20 }} {...provider.dragHandleProps} {...provider.dragHandleProps} ref={provider.innerRef} className='card'> </div>
//                                         }}
//                                     </Draggable>
//                                 }
//                                 )
//                             }
//                         </div>
//                     )}
//                 </Draggable>
//             </DragDropContext>
//         </div>
//     )
// }
