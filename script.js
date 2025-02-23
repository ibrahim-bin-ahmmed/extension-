function startTyping() {
    let codeInput = document.getElementById("codeInput").value;
    let outputDiv = document.getElementById("codeOutput");

    outputDiv.innerHTML = "";
    let index = 0;
    let typedCode = "";

    function typeEffect() {
        if (index < codeInput.length) {
            let char = codeInput.charAt(index);
            typedCode += char;
            let formattedCode = typedCode.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            outputDiv.innerHTML = syntaxHighlight(formattedCode);
            index++;
            setTimeout(typeEffect, 20);
        }
    }
    typeEffect();
}

function syntaxHighlight(code) {
    code = code.replace(/([a-zA-Z-]+)(\s*:\s*)([^;]+)(;?)/g, function(match, property, colon, value, semicolon) {
        let leftColor = '#e5ee31';
        let rightColor = '#ffffff';
        return `<span style="color: ${leftColor};">${property}</span>${colon}<span style="color: ${rightColor};">${value}</span>${semicolon}`;
    });
    code = code.replace(/\b(class|id)\b/g, `<span style="color: #005f99;">$1</span>`);
    return code;
}