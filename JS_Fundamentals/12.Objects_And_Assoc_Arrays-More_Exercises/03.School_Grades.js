function jsonsTable (inputData) {
    let html = '<table>\n';
    let parsed = JSON.parse(inputData)
    for (let data of parsed) {
        html += '  <tr>\n'
        html += '     <td>' + data.name + '</td>\n'
        html += '     <td>' + data.position + '</td>\n'
        html += '     <td>' + data.salary + '</td>\n'
        html += '  <tr>\n'
    }
    html += '</table>'
    console.log(html)
}