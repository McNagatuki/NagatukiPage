function arrayShuffle(array) {
    for (let i = array.length - 1; i >= 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[rand];
      array[rand] = temp;
    }
    return array
}

function clicked() {
    const rowNames = document.getElementById("names").value;
    const names = rowNames.split("\n").map(e => e.replace(/\s/g, "")).filter(e => e.length > 0);

    const roles = [];
    document.querySelectorAll("#roles > div")
        .forEach(element => {
            const input = element.querySelector(":scope > input");
            if (input && input.checked) {
                roles.push(element.querySelector(":scope > label").innerText);
            }
        });
    
    const shuffledName = arrayShuffle(names);

    const tBodies = document.getElementById("results").tBodies[0];
    while (tBodies.firstChild) {
        tBodies.removeChild(tBodies.firstChild);
    }

    for (let i = 0; i < roles.length; ++i) {
        const tr = tBodies.insertRow(-1);
        tr.insertCell(0).appendChild(document.createTextNode(shuffledName[i]));
        tr.insertCell(1).appendChild(document.createTextNode(roles[i]));
    }
}