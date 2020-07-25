const { TEXT_CHANGE } = require("./editorTypes")

const textChange = (text) => {
    return {
        type: TEXT_CHANGE,
        text
    }
}

export default textChange;