// Dragula.js

import { BaseNode } from "./baseNode";
import { Position } from "reactflow";

 export const DragulaNode = (props) => {
  const handles = {
    source: {
      type: "source",
      position: Position.Right,
      id: `${props.id}-response`,
    },
    targets: [
      {
        type: "target",
        position: Position.Left,
        id: `${props.id}-system`,
        style: { top: `${100 / 3}%` },
      },
      {
        type: "target",
        position: Position.Left,
        id: `${props.id}-prompt`,
        style: { top: `${200 / 3}%` },
      },
    ],
  };

  const config = {
    title: "MAGIC",
    hasNameField: false,
    hasTypeField: false,
    customContent: () => (
      <p>
        This is a <span className="font-bold animate-color-loop ">Magic</span>{" "}
      </p>
    ),
  };

  return <BaseNode {...props} handles={handles} config={config} />;
};
