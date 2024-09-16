import { BaseNode } from "./baseNode";
import { Position } from "reactflow";

export const InputNode = (props) => {
  const handles = {
    source: {
      type: "source",
      position: Position.Right,
      id: `${props.id}-value`,
    },
    targets: [], // If no target handles are required, this can be left as an empty array
  };

  const config = {
    title: "Input",
    idPrefix: "customInput-", // Prefix for generating default names
    defaultName: "input_", // Default name if no name is provided
    nameField: "inputName", // The name field for the input
    typeField: "inputType", // The type field for the input
    defaultType: "Text", // Default type if none is specified
    hasNameField: true, // Include a name field in the node
    hasTypeField: true, // Include a type selection in the node
    hasTextField: true, // This will enable the dynamic textarea for input text
    typeOptions: [
      { value: "Text", label: "Text" },
      { value: "File", label: "File" },
    ],
  };

  return <BaseNode {...props} handles={handles} config={config} />;
};
