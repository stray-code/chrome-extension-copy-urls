import van from "vanjs-core";

import "./style.css";

const App = () => {
  const { div, button } = van.tags;

  return div(
    {
      class: "wrapper",
    },
    button(
      {
        type: "button",
        onclick: async () => {
          const tabs = await chrome.tabs.query({
            active: true,
            currentWindow: true,
          });

          const urlsText = tabs.map((tab) => tab.url).join("\n");

          await navigator.clipboard.writeText(urlsText);

          window.close();
        },
      },
      "表示タブのURLをコピー",
    ),
    button(
      {
        type: "button",
        onclick: async () => {
          const tabs = await chrome.tabs.query({
            active: true,
            currentWindow: true,
          });

          const titlesText = tabs.map((tab) => tab.title).join("\n");

          await navigator.clipboard.writeText(titlesText);

          window.close();
        },
      },
      "表示タブのタイトルをコピー",
    ),
    button(
      {
        type: "button",
        onclick: async () => {
          const tabs = await chrome.tabs.query({
            active: true,
            currentWindow: true,
          });

          const titlesText = tabs
            .flatMap((tab) => [tab.title, tab.url])
            .join("\n");

          await navigator.clipboard.writeText(titlesText);

          window.close();
        },
      },
      "表示タブのタイトルとURLをコピー",
    ),
    button(
      {
        type: "button",
        onclick: async () => {
          const tabs = await chrome.tabs.query({
            currentWindow: true,
          });

          const urlsText = tabs.map((tab) => tab.url).join("\n");

          await navigator.clipboard.writeText(urlsText);

          window.close();
        },
      },
      "全てのタブのURLをコピー",
    ),
    button(
      {
        type: "button",
        onclick: async () => {
          const tabs = await chrome.tabs.query({
            currentWindow: true,
          });

          const titlesText = tabs.map((tab) => tab.title).join("\n");

          await navigator.clipboard.writeText(titlesText);

          window.close();
        },
      },
      "全てのタブのタイトルをコピー",
    ),
    button(
      {
        type: "button",
        onclick: async () => {
          const tabs = await chrome.tabs.query({
            currentWindow: true,
          });

          const titlesText = tabs
            .flatMap((tab) => [tab.title, tab.url])
            .join("\n");

          await navigator.clipboard.writeText(titlesText);

          window.close();
        },
      },
      "全てのタブのタイトルとURLをコピー",
    ),
  );
};

van.add(document.getElementById("app")!, App());
