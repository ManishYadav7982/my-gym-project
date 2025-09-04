const fs = require('fs');
const path = require('path');

// ✅ Your exercises folder path
const exercisesFolder = 'C:/Users/Acer/Downloads/exercises.json-master/exercises.json-master/exercises';
const outputFile = 'C:/Users/Acer/Downloads/exercises.json-master/exercises.json-master/exercises.json';

let allExercises = [];

fs.readdirSync(exercisesFolder).forEach(folder => {
  const folderPath = path.join(exercisesFolder, folder);
  const jsonPath = path.join(folderPath, 'index.json');

  if (fs.existsSync(jsonPath)) {
    const imageFile = fs.readdirSync(folderPath).find(file =>
      file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')
    );

    const exerciseData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
    exerciseData.localImage = `images/${folder}/${imageFile}`; // store relative path
    allExercises.push(exerciseData);
  }
});

fs.writeFileSync(outputFile, JSON.stringify(allExercises, null, 2));
console.log("✅ Merged all exercises into exercises.json");
