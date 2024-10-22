const fs = require('fs-extra');
const path = require('path');

(async function build() {
  // Define the build folder inside the same directory as the script
  const buildDir = path.join(__dirname, 'bundle/ai-test');

  // Check if the build folder exists; if not, create it
  if (!fs.existsSync(buildDir)) {
    fs.mkdirSync(buildDir, { recursive: true });
  }

  // Copy the file from the 'dist' folder to the 'bundle/ai-test' folder
  await fs.copyFile(path.join(__dirname, 'dist/ai-test.js'), path.join(buildDir, 'ai-test.js'));

  console.log('Build complete! Files copied to bundle/ai-test.');
})();
