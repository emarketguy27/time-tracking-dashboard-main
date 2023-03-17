/** @format */

// Access tabs and panels

const tabs = document.querySelectorAll("[role=tab]");
const panels = document.querySelectorAll("[role=tabpanel]");

function handleTabClick(e) {
  const controlPanel = e.currentTarget.getAttribute("aria-controls");
  panels.forEach((p) => {
    p.setAttribute(
      "aria-hidden",
      `${p.id === controlPanel ? "false" : "true"}`
    );
  });
  // set button state on selection
  tabs.forEach((t) =>
    t.setAttribute(
      "aria-selected",
      `${t === e.currentTarget ? "true" : "false"}`
    )
  );
}

// On selection - show appropriate panel

tabs.forEach((tab) => {
  tab.addEventListener("click", handleTabClick);
});

//keyboard events
