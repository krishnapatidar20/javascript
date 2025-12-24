const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
}