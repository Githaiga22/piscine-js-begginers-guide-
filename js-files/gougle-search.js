"use strict";

async function queryServers(serverName, q) {
    const url = `/${serverName}?q=${q}`.replaceAll(" ", "+")
    const urlBackup = `/${serverName}_backup?q=${q}`.replaceAll(" ", "+")
    return await Promise.race([getJSON(url), getJSON(urlBackup)])
}

async function gougleSearch(q) {
    let rejected = false
    const web = await Promise.race([queryServers("web", q), new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Error('timeout'))
        }, 80)
    })])
    const image = await Promise.race([queryServers("image", q), new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Error('timeout'))
        }, 80)
    }, () => {
        rejected = true
    })])
    const video = await Promise.race([queryServers("video", q), new Promise((resolve) => {
        setTimeout(() => {
            resolve(new Error('timeout'))
        }, 80)
    })])
    const obj = new Object
    obj["web"] = await web
    obj["image"] = await image
    obj["video"] = await video
    for (const [key, value] of Object.entries(obj)) {
        if (value.message == new Error('timeout').message) throw new Error('timeout')
    }
    return obj
}