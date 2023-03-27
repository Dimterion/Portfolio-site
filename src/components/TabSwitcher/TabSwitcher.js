import { useState } from "react";
import "./tabSwitcher.css";

function TabSwitcher({ tabs }) {
  const [selectedId, setSelectedId] = useState(tabs[0].id);
  const selectedTab = tabs.find((tab) => tab.id === selectedId);

  return (
    <>
      <div>
        {tabs.map((tab) => (
          <button
            className="tab-btn"
            key={tab.id}
            onClick={() => setSelectedId(tab.id)}
          >
            {tab.header}
          </button>
        ))}
      </div>
      <div key={selectedId}>
        <h3>{selectedTab.header}</h3>
        {selectedTab.content}
      </div>
    </>
  );
}

export default TabSwitcher;
