import { useState } from 'react';
import styles from '../styles/HabitForm.module.css';

export default function HabitForm({ onAdd }) {
  const [habit, setHabit] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habit.trim()) {
      onAdd(habit.trim());
      setHabit('');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={habit}
        placeholder="Enter a new habit..."
        onChange={(e) => setHabit(e.target.value)}
      />
      <button className={styles.button} type="submit">Add 🌱</button>
    </form>
  );
}
