import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TemplateEditor from './components/TemplateEditor';
import Toolbar from './components/Toolbar';
import PaperSizeSelector from './components/PaperSizeSelector';
import TemplateList from './components/TemplateList';
import UploadButton from './components/UploadButton';
import printerImage from './assets/printer.png';
import './App.css';

function App() {
  const [templates, setTemplates] = useState([]);
  const [currentTemplate, setCurrentTemplate] = useState({ name: '', elements: [] });
  const [paperSize, setPaperSize] = useState({ width: 210, height: 297 }); // Default A4 size in mm
  const [customSize, setCustomSize] = useState(false);

  useEffect(() => {
    const savedTemplates = JSON.parse(localStorage.getItem('templates')) || [];
    setTemplates(savedTemplates);
  }, []);

  const saveTemplate = (template) => {
    const updatedTemplates = [...templates, template];
    setTemplates(updatedTemplates);
    localStorage.setItem('templates', JSON.stringify(updatedTemplates));
  };

  const loadTemplate = (template) => {
    setCurrentTemplate(template);
    setPaperSize(template.paperSize); // 加载纸张尺寸
  };

  const deleteTemplate = (templateName) => {
    const updatedTemplates = templates.filter(template => template.name !== templateName);
    setTemplates(updatedTemplates);
    localStorage.setItem('templates', JSON.stringify(updatedTemplates));
  };

  const handlePresetChange = (e) => {
    const preset = e.target.value;
    if (preset === 'custom') {
      setCustomSize(true);
    } else {
      setCustomSize(false);
      if (preset === 'A4') {
        setPaperSize({ width: 210, height: 297 });
      } else if (preset === 'A3') {
        setPaperSize({ width: 297, height: 420 });
      }
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <div className="header">
          <h1>Web Printer</h1>
          <img src={printerImage} alt="Printer" className="printer-image" />
        </div>
        <div className="paper-size-selector">
          <select onChange={handlePresetChange}>
            <option value="A4">A4</option>
            <option value="A3">A3</option>
            <option value="custom">自定义</option>
          </select>
          {customSize && (
            <div className="custom-size-inputs">
              <label>
                宽度 (mm):
                <input
                  type="number"
                  value={paperSize.width}
                  onChange={(e) => setPaperSize({ ...paperSize, width: e.target.value })}
                />
              </label>
              <label>
                高度 (mm):
                <input
                  type="number"
                  value={paperSize.height}
                  onChange={(e) => setPaperSize({ ...paperSize, height: e.target.value })}
                />
              </label>
            </div>
          )}
        </div>
        <Toolbar addElement={(element) => setCurrentTemplate(prev => ({ ...prev, elements: [...prev.elements, element] }))} />
        <TemplateList templates={templates} loadTemplate={loadTemplate} deleteTemplate={deleteTemplate} />
        <UploadButton />
        <TemplateEditor
          template={currentTemplate}
          paperSize={paperSize}
          saveTemplate={(template) => saveTemplate({ ...template, elements: currentTemplate.elements })}
        />
      </div>
    </DndProvider>
  );
}

export default App;
