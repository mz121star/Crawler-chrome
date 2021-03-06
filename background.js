/**
 * 注册标签页更新时的事件
 * 这里调用了initialize()事件，把func.js注入当前标签页中
 */
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    initialize(tabId);
});

/**
 * 注册切换标签页时的事件
 * 这里调用了initialize()事件，把func.js注入当前标签页中
 */
chrome.tabs.onSelectionChanged.addListener(function(tabId, selectInfo) {
/* initialize(tabId);*/
});

/**
 * 初始化方法 ，注入func.js事件
 * @param {Object} tabId
 */

/*chrome.browserAction.onClicked.addListener(function(tabId) {
    chrome.tabs.executeScript(null, {file: "jquery-1.9.1.min.js", allFrames: true});
  *//*  chrome.tabs.executeScript(null, {file: "func.js", allFrames: true});*//*
});*/


function initialize(tabId){

    chrome.tabs.executeScript(tabId, {file: "jquery-1.9.1.min.js", allFrames: true});
    // chrome.tabs.executeScript(tabId, {file: "func.js", allFrames: true});
}