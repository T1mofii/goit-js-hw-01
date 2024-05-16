function getFileName(file) {
  const index = file.indexOf(css, html, js);
  if (file.indexOF()) {
    return file.slice(0, index);
  } else {
    return file;
  }
}

console.log(getFileName("styles.css"));
console.log(getFileName("styles.css"));
console.log(getFileName("app"));
console.log(getFileName("index.js"));
console.log(getFileName("index.html"));
console.log(getFileName("index.css"));
console.log(getFileName("index"));

