const removeSlimTopString = (output) => {
    const trimmed = output.split("// Starting run at generation <start>:").pop()
    const outputArr = trimmed.split('\n')
    return outputArr.splice(3)
}

module.exports = { removeSlimTopString }