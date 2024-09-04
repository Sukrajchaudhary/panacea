import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null
  })
  const handleNewFolder = (e) => {
    e.stopPropagation();
    setExpand(true)
    setShowInput({
      visible: true,
      isFolder
    })
  }
  const onaddFolder = (e) => {
    if (e.keyCode === 13 && e.target.vale) {
      setShowInput({ ...showInput, visible: true })
    }
  }
  if (explorer.isFolder) {
    return (
      <>
        <div>
          <div className="folder" style={{ cursor: "pointer" }} onClick={() => setExpand(!expand)}>
            <span>📁{explorer.name}</span>
            <div style={{ marginLeft: 35, display: "flex", gap: 5 }}>
              <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
              <button onClick={(e) => handleNewFolder(e, true)}>File +</button>
            </div>
          </div>
          <div style={{ display: expand ? "block" : "none", paddingLeft: 10, cursor: "pointer" }}>
            {
              showInput.visible && (
                <div className="inputContainer">
                  <span>{showInput.isFolder ? "📁" : "📄"}</span>
                  <input
                    autoFocus onKeyDown={onaddFolder}
                    onBlur={() => setShowInput({ ...setShowInput, visible: false })}
                    className="inputconatiner__input" type="text" />

                </div>
              )
            }
            {explorer.items.map((item) => {
              return <Folder explorer={item} key={item.id} />;
            })}
          </div>
        </div>
      </>
    );
  } else {
    return <span className="file">📄{explorer.name}</span>;
  }
};

export default Folder;
