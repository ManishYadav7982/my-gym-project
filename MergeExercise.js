// const fs = require('fs');
// const path = require('path');

// // ✅ Your actual folder path
// const exercisesFolder = 'C:/Users/Acer/Downloads/exercises.json-master/exercises.json-master/exercises';
// const outputFile = 'C:/Users/Acer/Downloads/exercises.json-master/exercises.json-master/exercises.json';

// let allExercises = [];

// fs.readdirSync(exercisesFolder).forEach(folder => {
//   const folderPath = path.join(exercisesFolder, folder);
//   const jsonPath = path.join(folderPath, 'index.json');

//   // Find the image inside each folder
//   const imageFile = fs.readdirSync(folderPath).find(file =>
//     file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')
//   );

//   if (fs.existsSync(jsonPath)) {
//     const exerciseData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
//     exerciseData.localImage = `images/${folder}/${imageFile}`; // relative image path
//     allExercises.push(exerciseData);
//   }
// });

// fs.writeFileSync(outputFile, JSON.stringify(allExercises, null, 2));
// console.log('✅ All exercises merged into exercises.json with image paths');
