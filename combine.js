const fs = require('fs');
const path = require('path');

let content = '';

function scan(base) {
    for (let file of fs.readdirSync(base)) {
        const location = path.join(base, file);

        if (file.endsWith('.d.ts')) {
            let source = fs.readFileSync(location).toString();

            // remove references
            source = source.split('\n').filter(line => !line.trim().startsWith('/// <reference')).join('\n');

            // remove declare statements
            source = source.replace(/declare\s+(class|namespace|interface|const|enum)/g, match => match.split(/\s+/)[1]);

            // remove readonly statements
            source = source.replace(/readonly\s+[a-z]/g, match => match.split(/\s+/).pop());

            // add tabs
            source = source.split('\n').map(line => `\t${line}`).join('\n');

            content += `\t// from '${location}'\n${source}\n\n`;
        } else if (fs.statSync(location).isDirectory()) {
            scan(location);
        }
    }
}

scan('luucy');

fs.writeFileSync('environment.d.ts', `
declare namespace luucy {
    ${content}
}
`);