import React from 'react';

const TemplateList = ({ templates, loadTemplate, deleteTemplate }) => {
  return (
    <div>
      <h3>Saved Templates</h3>
      <ul>
        {templates.map((template, index) => (
          <li key={index}>
            <button onClick={() => loadTemplate(template)}>{template.name}</button>
            <button onClick={() => deleteTemplate(template.name)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TemplateList;
