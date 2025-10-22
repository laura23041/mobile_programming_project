import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('workouts.db');

export const createTables = () => {
  db.transaction(tx => {
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

// Lisää treeni
export const addWorkout = (workout, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO workouts (type, duration, distance, calories, date) VALUES (?, ?, ?, ?, ?)',
      [workout.type, workout.duration, workout.distance, workout.calories, workout.date],
      (_, result) => {
        if (typeof callback === 'function') callback(result);
      },
      (_, error) => console.log('Insert error:', error)
    );
  });
};

// Hae kaikki treenit
export const getWorkouts = (callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM workouts ORDER BY date DESC;',
      [],
      (_, { rows }) => {
        if (typeof callback === 'function') callback(rows._array);
      },
      (_, error) => console.log('Select error:', error)
    );
  });
};

// 🔹 Poista treeni id:n perusteella
export const deleteWorkout = (id, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM workouts WHERE id = ?;',
      [id],
      (_, result) => {
        if (typeof callback === 'function') callback(result);
      },
      (_, error) => console.log('Delete error:', error)
    );
  });
};
