import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('sportsTracker.db');

// Luo taulu, jos ei vielä ole
export const createTables = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS workouts (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        duration INTEGER,
        date TEXT
      );`
    );
  });
};

// Hae kaikki harjoitukset
export const getWorkouts = (setWorkouts) => {
  db.transaction(tx => {
    tx.executeSql(
      'SELECT * FROM workouts;',
      [],
      (_, { rows }) => setWorkouts(rows._array)
    );
  });
};

// Lisää harjoitus
export const addWorkout = (title, duration, date, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO workouts (title, duration, date) VALUES (?, ?, ?);',
      [title, duration, date],
      () => callback()
    );
  });
};

// Poista harjoitus
export const deleteWorkout = (id, callback) => {
  db.transaction(tx => {
    tx.executeSql(
      'DELETE FROM workouts WHERE id = ?;',
      [id],
      () => callback()
    );
  });
};
