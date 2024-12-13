import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { useEffect, useRef, useState } from 'react';

export default function DraggableList({ chips, handleListUpdate }) {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    const updatedList = chips
      ?.filter((item) => item.selected)
      .map((item, index) => ({ ...item, level: index + 1 }));
    setPages(updatedList);
    handleListUpdate(updatedList);
  }, [chips]);

  const draggingItem = useRef();
  const dragOverItem = useRef();

  const handleDragStart = (e, position) => {
    draggingItem.current = position;
  };

  //   const handleDragEnter = (e, position) => {
  //     dragOverItem.current = position;
  //   };

  const handleDragEnter = (e, position) => {
    dragOverItem.current = position;
    const listCopy = [...pages];
    const draggingItemContent = listCopy[draggingItem.current];
    listCopy.splice(draggingItem.current, 1);
    listCopy.splice(dragOverItem.current, 0, draggingItemContent);

    // Update orders based on the new position
    const updatedList = listCopy.map((item, index) => ({
      ...item,
      order: index + 1, // Update the `order` based on position
    }));

    draggingItem.current = dragOverItem.current;
    dragOverItem.current = null;
    setPages(updatedList);
    handleListUpdate(updatedList);
  };

  //   const handleDragEnd = () => {
  //     const listCopy = [...pages];
  //     const draggingItemContent = listCopy[draggingItem.current];
  //     listCopy.splice(draggingItem.current, 1);
  //     listCopy.splice(dragOverItem.current, 0, draggingItemContent);

  //     draggingItem.current = null;
  //     dragOverItem.current = null;
  //     setPages(listCopy);
  //   };

  return (
    <nav aria-label="Breadcrumb" className="flex">
      <ol role="list" className="flex items-center space-x-4 flex-wrap">
        {pages
          ?.filter((item) => item.selected)
          .map((page, idx) => (
            <li key={idx} className="my-2">
              <div className={`flex items-center`}>
                {idx !== 0 && (
                  <ChevronRightIcon aria-hidden="true" className="size-5 shrink-0 text-gray-400" />
                )}
                <div
                  className={`ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 cursor-move`}
                  onDragStart={(e) => handleDragStart(e, idx)}
                  // onDragEnter={(e) => handleDragEnter(e, idx)}
                  onDragEnter={(e) => handleDragEnter(e, idx)}
                  // onDragEnd={handleDragEnd}
                  onDragOver={(e) => e.preventDefault()}
                  draggable
                >
                  {page.name}
                </div>
              </div>
            </li>
          ))}
      </ol>
    </nav>
  );
}
