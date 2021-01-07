"use strict";
const main = (chrome) => {
    chrome.alarms.clearAll();
    chrome.alarms.create("refresh", { delayInMinutes: 1, periodInMinutes: 5 });
    const re = /https:\/\/\w+\.lightning\.force\.com/;
    chrome.alarms.onAlarm.addListener(() => {
        chrome.tabs.getAllInWindow((tabs) => {
            tabs.filter((tab) => !tab.active && re.test(tab.url)).map((tab) => {
                chrome.tabs.reload(tab.id);
            });
        });
    });
};

main(chrome);
