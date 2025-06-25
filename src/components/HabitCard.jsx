import styles from '../styles/HabitCard.module.css';

export default function HabitCard({ habit, onGrow, onReset, onDelete }) {
  const stages = ['🌱', '🌿', '🪴', '🌼', '🏵️', '🌳'];

  return (
    <div className={styles.card}>
      <button className={styles.delete} onClick={() => onDelete(habit.id)}>✖</button>
      <div className={styles.name}>{habit.name}</div>
      <div className={styles.stage}>{stages[habit.level]}</div>
      <div className={styles.level}>Level {habit.level}</div>
      <div className={styles.actions}>
        <button className={styles.button} onClick={() => onGrow(habit.id)}>Water 💧</button>
        <button className={styles.button} onClick={() => onReset(habit.id)}>Reset 🔁</button>
      </div>
    </div>
  );
}
