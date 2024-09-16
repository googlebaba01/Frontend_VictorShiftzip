// toolbar.js

import { DraggableNode } from "./draggableNode";

export const PipelineToolbar = () => {
  return (
    <div
      //  className=" bg-[#5B00EC]"
      className="bg-white"
      style={{ padding: "10px" }}
    >
      <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="dragula" label="Dragula" />
        <DraggableNode type="ghost" label="Ghost" />
        <DraggableNode type="statue" label="Statue" />
        <DraggableNode type="writeup" label="Writeup" />
        <DraggableNode type="tldr" label="TLDR;" />
      </div>
    </div>
  );
};
