// Dragula.js

import { BaseNode } from "./baseNode";
import { Position } from "reactflow";

export const WriteupNode = (props) => {
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
    title: "Massage",
    hasNameField: false,
    hasTypeField: false,
    customContent: () => (
      <p className=" max-w-[250px]">
       Hello VictorShift ! Its me Gajendra
      </p>
    ),
  };

  return <BaseNode {...props} handles={handles} config={config} />;
};
