import van from "vanjs-core";

import "./style.css";

const App = () => {
  const { div, button } = van.tags;

  const copyClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);

    // すぐにウィンドウを閉じるとコピーできない場合があるため、待つ
    await new Promise((resolve) => setTimeout(resolve, 10));

    window.close();
  };

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

          await copyClipboard(urlsText);
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

          await copyClipboard(titlesText);
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

          await copyClipboard(titlesText);
        },
      },
      "表示タブのタイトルとURLをコピー",
    ),
    div({
      class: "divider",
    }),
    button(
      {
        type: "button",
        onclick: async () => {
          const tabs = await chrome.tabs.query({
            currentWindow: true,
          });

          const urlsText = tabs.map((tab) => tab.url).join("\n");

          await copyClipboard(urlsText);
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

          await copyClipboard(titlesText);
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

          await copyClipboard(titlesText);
        },
      },
      "全てのタブのタイトルとURLをコピー",
    ),
  );
};

van.add(document.getElementById("app")!, App());
