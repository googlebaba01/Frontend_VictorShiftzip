import React, { useState } from "react";
import { Handle} from "reactflow";
import TextareaAutosize from "react-textarea-autosize";
import Dropdown from "../components/dropdown";
import './baseNode.css'; 

export const BaseNode = ({
  children,
  id,
  data,
  type,
  handles,
  config,
  setText,
}) => {
  const [currName, setCurrName] = useState(
    data?.[config.nameField] || id.replace(config.idPrefix, config.defaultName)
  );
  const [currType, setCurrType] = useState(
    data?.[config.typeField] || config.defaultType
  );
  const [currText, setCurrText] = useState(data?.text || "{{input}}");

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (value) => setCurrType(value);
  const handleTextChange = (e) => {
    setCurrText(e.target.value);
    if (setText) setText(e.target.value); // Call setText if it is passed
  };

  return (
    <div className="nodeContainer">
      {/* Source handle */}
      <Handle className="handle handle-source" {...handles.source} />

      {/* Target handles */}
      {handles.targets?.map((handle, index) => (
        <Handle
          key={index}
          className={`handle handle-target ${handle.position}`}
          {...handle}
        />
      ))}

      {/* Node title */}
      <div className="nodeHeading">
        {config.title}
      </div>

      <div className="flex flex-col gap-3 inputGroup">
        {/* Name field if present */}
        {config.hasNameField && (
          <div className="flex gap-1.5 items-center">
            <label className="label">Name</label>
            <input
              type="text"
              value={currName}
              className="input"
              onChange={handleNameChange}
            />
          </div>
        )}

        {/* Type field if present */}
        {config.hasTypeField && (
          <div className="flex w-full gap-5">
            <label className="label">Type:</label>
            <Dropdown
              caption={currType}
              options={config.typeOptions.map((option) => option.value)}
              onSelect={handleTypeChange}
              className="select"
            />
          </div>
        )}

        {/* Textarea input field */}
        {config.hasTextField && (
          <div className="inputGroup">
            <label className="label">Text:</label>
            <TextareaAutosize
              name="text"
              value={currText}
              onChange={handleTextChange}
              className="textarea"
              minRows={1}
              maxRows={10}
              style={{
                width: "100%",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                resize: "none",
                whiteSpace: "pre-wrap",
                wordWrap: "break-word",
                overflow: "hidden",
              }}
            />
          </div>
        )}

        {/* Custom content if provided in config */}
        {config.customContent &&
          config.customContent({
            text: currText,
            onTextChange: handleTextChange,
          })}

        {/* Children content passed from the parent */}
        <div>{children}</div>
      </div>
    </div>
  );
};
