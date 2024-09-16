// VenomNode.js

import { Position } from "reactflow";
import { BaseNode } from "./baseNode";

export const StatueNode = (props) => {
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
    title: "ReactJs",
    hasNameField: false,
    hasTypeField: false,
    customContent: () => (
      <img
        src="./logo192.png"
        alt="Statue"
        className=" w-full h-[120px] object-cover"
      />
    ),
  };

  return <BaseNode {...props} handles={handles} config={config} />;
};
