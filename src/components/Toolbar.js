import React from 'react';

// 注释掉组件的内容
/*
const Toolbar = ({ addElement }) => {
  return (
    <div className="toolbar">
      <button onClick={() => addElement({ content: 'Text', style: { position: 'absolute', left: '50px', top: '50px' } })}>
        Web Printer333
      </button>
      <img src="path_to_printer_image/printer.png" alt="Printer" width={30} onClick={() => addElement({ content: 'Image', style: { position: 'absolute', left: '100px', top: '100px' } })} />
    </div>
  );
};
*/

// 定义一个空的 Toolbar 以避免错误
const Toolbar = () => null;

export default Toolbar;
