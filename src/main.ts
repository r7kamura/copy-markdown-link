import "./style.css";

function copy({ plain }: { plain: string }) {
  const listener = (event: any) => {
    event.clipboardData.setData("text/plain", plain);
    event.preventDefault();
  };
  document.addEventListener("copy", listener);
  document.execCommand("copy");
  document.removeEventListener("copy", listener);
}

chrome.tabs.query(
  {
    active: true,
    currentWindow: true,
  },
  (tabs) => {
    const { title, url } = tabs[0];
    copy({
      plain: `[${title}](${url})`,
    });
  }
);
