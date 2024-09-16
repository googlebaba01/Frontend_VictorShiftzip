// draggableNode.js

export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData)
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
    className={`bg-black text-white border-transparent flex flex-col items-center min-w-[150px] justify-center border-2 border-black shadow-lg cursor-pointer px-6 rounded-2xl h-12 backdrop-filter backdrop-blur-xl ${type}`}

      onDragStart={(event) => {
        onDragStart(event, type) && (event.target.style.cursor = "grabbing");
      }}
      F
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      draggable
    >
      <span className="font-sans font-semibold text-white ">{label}</span>
    </div>
  );
};
