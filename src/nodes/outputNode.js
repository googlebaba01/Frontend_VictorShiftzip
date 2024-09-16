import React, { useCallback, useState } from 'react';
import { BaseNode } from './baseNode';
import { Position } from 'reactflow';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data?.outputType || 'Text');

  const handleNameChange = useCallback((e) => {
    setCurrName(e.target.value);
  }, []);

  const handleTypeChange = useCallback((e) => {
    setOutputType(e.target.value);
  }, []);

  const handles = {
    source: {
      type: 'target',
      position: Position.Left,
      id: `${id}-value`,
    },
  };

  const config = {
    title: 'Output',
    idPrefix: 'customOutput-',
    defaultName: 'output_',
    nameField: 'outputName',
    typeField: 'outputType',
    defaultType: 'Text',
    hasNameField: true,
    hasTypeField: true,
    typeOptions: [
      { value: 'Text', label: 'Text' },
      { value: 'File', label: 'Image' },
      { value: 'Video', label: 'Video' },
      { value: 'Audio', label: 'Audio' }
    ],
    hasTextField: false, // Assuming no text field is needed for OutputNode
  };

  return (
    <BaseNode
      id={id}
      data={data}
      handles={handles}
      config={config}
      setText={null} // No text input functionality in OutputNode
    />
  );
};
