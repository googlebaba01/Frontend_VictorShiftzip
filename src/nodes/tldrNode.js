
import { BaseNode } from "./baseNode";
import { Position } from "reactflow";

export const TLDRNode = (props) => {
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
    title: "TLDR;",
    hasNameField: false,
    hasTypeField: false,
    customContent: () => <div>Fine Tuning</div>,
  };

  return <BaseNode {...props} handles={handles} config={config} />;
};
