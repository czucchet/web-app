function getPage1(req, res) {
    res.send("This is Page 1 content.");
}

function getPage2(req, res) {
    res.send("This is Page 2 content.");
}

function getAIData() {
    return Promise.resolve({ message: "AI Data Response" });
}

module.exports = {
    getPage1,
    getPage2,
    getAIData
};