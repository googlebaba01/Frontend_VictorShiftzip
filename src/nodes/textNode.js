import React, { useState, useCallback } from 'react';
import { BaseNode } from './baseNode';
import { Position } from 'reactflow';

export const TextNode = (props) => {
  const [text, setText] = useState(props.data?.text || '{{input}}');
  const [nodeSize, setNodeSize] = useState({ width: 200, height: 30 });
  const [language, setLanguage] = useState(props.data?.language || 'English');
  const [isValid, setIsValid] = useState(true); // State to track validation

  // Function to validate JavaScript variable names
  const validateVariable = (str) => {
    const isCurlyBraced = /^\{\{([a-zA-Z_$][a-zA-Z_$0-9]*)\}\}$/.test(str);
    if (isCurlyBraced) {
      const variableName = str.slice(2, -2).trim();
      const isValidVariable = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/.test(variableName);
      return isValidVariable;
    }
    return false;
  };

  // Function to update text and dynamically adjust node size
  const handleTextChange = useCallback((e) => {
    const newText = e.target.value;
    setText(newText);

    // Validate the input text
    const isValidInput = validateVariable(newText);
    setIsValid(isValidInput);

    // Adjust node width based on text length
    const newWidth = Math.min(250, Math.max(200, newText.length * 10));

    // Use scrollHeight to adjust height based on content
    const textareaElement = e.target;
    const newHeight = Math.min(150, textareaElement.scrollHeight);

    setNodeSize({ width: newWidth, height: newHeight });
  }, []);

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  // Conditionally include the target handle if the text is valid
  const handles = {
    source: {
      type: 'source',
      position: Position.Right,
      id: `${props.id}-response`,
    },
    targets: isValid
      ? [
          {
            type: 'target',
            position: Position.Left,
            id: `${props.id}-prompt`,
            style: { top: `${200 / 3}%` },
          },
        ]
      : [],
  };

  const config = {
    title: 'Text',
    idPrefix: 'customText-',
    defaultName: 'text_',
    nameField: 'textName',
    typeField: 'language',
    defaultType: 'Text',
    hasNameField: false,
    hasTypeField: false,
    hasTextField: false,
    customContent: () => (
      <div className="flex flex-col gap-2 p-2">
        {/* Upper content block */}
        <div className="flex flex-col gap-2">
          <label>Content:</label>
          <textarea
            value={text}
            onChange={handleTextChange}
            className="border-none outline-none focus:outline-none ring-0 focus:ring-0 pl-3 rounded-md bg-white resize-none"
            style={{
              width: '100%', // Make textarea full width
              height: `${nodeSize.height}px`,
              maxWidth: '250px',
              minHeight: '30px', // Prevent shrinking height
              overflow: 'auto',
              boxSizing: 'border-box',
              border: isValid ? '1px solid #ccc0' : '1px solid red',
            }}
          />
        </div>

        {/* Language selection */}
        <div className="flex flex-col gap-2">
          <label>Language:</label>
          <select
            value={language}
            onChange={handleLanguageChange}
            className="border-none outline-none focus:outline-none ring-0 focus:ring-0 rounded-md bg-[#fff7f783] w-full" // Ensure the select is full width
            style={{
              width: '100%', // Make select full width
              maxWidth: '250px',
            }}
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            {/* Add more language options as needed */}
          </select>
        </div>
      </div>
    ),
  };

  return (
    <BaseNode
      {...props}
      handles={handles}
      config={config}
      setText={setText} // Pass setText to BaseNode
    />
  );
};
