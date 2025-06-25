import { useEffect } from 'react';
import HabitForm from './components/HabitForm';
import HabitCard from './components/HabitCard';
import useHabits from './hooks/useHabits';
import styles from './App.module.css';

const LOCAL_KEY = 'habit-garden-data';

export default function App() {
  const saved = JSON.parse(localStorage.getItem(LOCAL_KEY)) ?? [];
  const { habits, addHabit, growHabit, resetHabit, deleteHabit } = useHabits(saved);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(habits));
  }, [habits]);
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>🌼 Habit Garden 🌼</h1> 
      <HabitForm onAdd={addHabit} /> 
      <div className={styles.grid}>
        {habits.map(habit => (
          <HabitCard
            key={habit.id}
            habit={habit}
            onGrow={growHabit}
            onReset={resetHabit}
            onDelete={deleteHabit}
          />
        ))}
      </div>
    </div>
  );
}
