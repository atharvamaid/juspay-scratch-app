import React from "react";
import Sidebar from "./components/Sidebar";
import MidArea from "./components/MidArea";
import PreviewArea from "./components/PreviewArea";
import { DragDropContext } from "react-beautiful-dnd";
import { useAppProvider } from "./context/AppProvider";
import { updateMotionsOnDragDrop } from "./helpers/DragDropActions";

export default function App() {
  const { setClonedMotions, clonedMotions } = useAppProvider();
  const onItemDragEnd = (result) => {
    console.log(result)
    updateMotionsOnDragDrop(result, clonedMotions, setClonedMotions);
  };
  return (
    <div className="bg-blue-100 pt-6 font-sans">
      <div className=" overflow-hidden flex flex-row">
        <DragDropContext onDragEnd={onItemDragEnd}>
          <div className="flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2">
            <Sidebar />
            <MidArea />
          </div>
          <div className="flex-1 h-screen overflow-hidden bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2">
            <PreviewArea />
          </div>
        </DragDropContext>
      </div>
    </div>
  );
}
