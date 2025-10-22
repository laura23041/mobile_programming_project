
// Tuodaan käyttöön Expo SQLite -kirjasto
import * as SQLite from 'expo-sqlite';

// Luodaan paikallinen tietokanta nimeltä 'workouts.db'
const db = SQLite.openDatabase('workouts.db');

// Luodaan tietokantataulut
export const createTables = () => {
  db.transaction(tx => {
    // Suoritetaan SQL-lauseen sisältävä komento
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS workouts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        type TEXT,
        duration INTEGER,
        distance REAL,
        calories REAL,
        date TEXT
      );`
    );
  });
};

// Lisää uusi treeni
export const addWorkout = (workout, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      // SQL-lause, joka lisää rivin workouts-tauluun
      'INSERT INTO workouts (type, duration, distance, calories, date) VALUES (?, ?, ?, ?, ?)',
      // Arvot välitetään taulukossa paikoilleen
      [workout.type, workout.duration, workout.distance, workout.calories, workout.date],
      // Jos onnistuu, kutsutaan callback funktio
      (_, result) => {
        if (typeof callback === 'function') callback(result);
      },
      // Jos tapahtuu virhe, tulostetaan virheviesti
      (_, error) => console.log('Insert error:', error)
    );
  });
};

// Hae kaikki treenit tietokannasta
export const getWorkouts = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM workouts ORDER BY date DESC;',
      [],
      (_, { rows }) => {
        // rows array sisältää kaikki tulokset JavaScript taulukkona
        if (typeof callback === 'function') callback(rows._array);
      },
      (_, error) => console.log('Select error:', error)
    );
  });
};

// 🔹 Poistaa treenin id:n perusteella tietokannasta
export const deleteWorkout = (id, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM workouts WHERE id = ?;', // Poistaa rivin, jonka id vastaa annettua arvoa
      [id], // välitetään poistettavan rivin id
      (_, result) => {
        if (typeof callback === 'function') callback(result);
      },
      (_, error) => console.log('Delete error:', error)
    );
  });
};
