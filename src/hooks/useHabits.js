import { useEffect, useState } from 'react';

const LOCAL_KEY = 'habit-garden-data';

export default function useHabits() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem(LOCAL_KEY));
    if (saved) setHabits(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(habits));
  }, [habits]);

  const addHabit = (name) => {
    setHabits((prev) => [
      ...prev,
      { id: Date.now(), name, level: 0, createdAt: new Date().toISOString() }
    ]);
  };

  const growHabit = (id) => {
    setHabits((prev) =>
      prev.map(h => h.id === id && h.level < 5 ? { ...h, level: h.level + 1 } : h)
    );
  };

  const resetHabit = (id) => {
    setHabits((prev) =>
      prev.map(h => h.id === id ? { ...h, level: 0 } : h)
    );
  };

  const deleteHabit = (id) => {
  setHabits(habits.filter(h => h.id !== id));
};


  return {
    habits,
    addHabit,
    growHabit,
    resetHabit,
    deleteHabit
  };
}
