import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';

const TemplateEditor = ({ template, paperSize, saveTemplate }) => {
  const [elements, setElements] = useState(template ? template.elements : []);
  const [, drop] = useDrop(() => ({ accept: 'ELEMENT' }));

  useEffect(() => {
    if (template) {
      setElements(template.elements);
    }
  }, [template]);

  const addElement = (element) => {
    setElements([...elements, element]);
  };

  const handleSaveTemplate = () => {
    const templateName = prompt('Enter template name:');
    if (templateName) {
      saveTemplate({ name: templateName, elements, paperSize });
    }
  };

  return (
    <div ref={drop} style={{ width: `${paperSize.width}mm`, height: `${paperSize.height}mm`, border: '1px solid black' }}>
      {elements.map((element, index) => (
        <div key={index} style={element.style}>
          {element.content}
        </div>
      ))}
      <button onClick={handleSaveTemplate}>Save Template</button>
    </div>
  );
};

export default TemplateEditor;
