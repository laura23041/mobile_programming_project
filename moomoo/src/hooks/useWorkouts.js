import { useState, useEffect } from 'react';

export default function useWorkouts() {
  const [workouts, setWorkouts] = useState([]);

  // Tämä hook tulee hallitsemaan workout-listaa (tulevaisuudessa SQLite + API)
  useEffect(() => {
    // Placeholder: alustetaan tyhjällä datalla
    setWorkouts([]);
  }, []);

  return { workouts, setWorkouts };
}
