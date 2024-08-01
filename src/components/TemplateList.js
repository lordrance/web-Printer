import React from 'react';

const TemplateList = ({ templates, loadTemplate, deleteTemplate }) => {
  return (
    <div className="saved-templates">
      <h2>Saved Templates</h2>
      <ul>
        {templates.map((template, index) => (
          template && template.name ? (
            <li key={index}>
              {template.name} 
              <button onClick={() => loadTemplate(template)}>Load</button>
              <button onClick={() => deleteTemplate(template.name)}>Delete</button>
            </li>
          ) : null
        ))}
      </ul>
    </div>
  );
};

export default TemplateList;
