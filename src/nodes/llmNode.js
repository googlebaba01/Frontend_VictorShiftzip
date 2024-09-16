import React, { useState, useCallback } from "react";
import { BaseNode } from "./baseNode";
import { Position } from "reactflow";

export const LLMNode = (props) => {
  const [currName, setCurrName] = useState(
    props.data?.name || props.id.replace("customLLM-", "llm_")
  );
  const [llmType, setLlmType] = useState(props.data?.llmType || "OpenAI");

  // Handle name change
  const handleNameChange = useCallback((e) => {
    setCurrName(e.target.value);
  }, []);

  // Handle LLM type change
  const handleLlmTypeChange = useCallback((value) => {
    setLlmType(value);
  }, []);

  // Define handles (target and source)
  const handles = {
    source: {
      type: "source",
      position: Position.Right,
      id: `${props.id}-output1`,
    },
    targets: [
      { type: "target", position: Position.Left, id: `${props.id}-input1` },
      { type: "target", position: Position.Top, id: `${props.id}-input3` },
    ],
  };

  // Define config for BaseNode
  const config = {
    title: "LLM",
    idPrefix: "customLLM-",
    defaultName: "llm_",
    nameField: "name",
    typeField: "llmType",
    defaultType: "OpenAI",
    hasNameField: true,
    hasTypeField: true,
    typeOptions: [
      { value: "OpenAI", label: "OpenAI" },
      { value: "Anthropic", label: "Anthropic" },
      { value: "Llama", label: "Llama" },
      { value: "Cohere", label: "Cohere" },
      { value: "AWS", label: "AWS" },
      { value: "OpenSource", label: "OpenSource" },
    ],
  };

  return (
    <BaseNode
      {...props}
      handles={handles}
      config={config}
      data={{
        name: currName,
        llmType: llmType,
      }}
    />
  );
};
