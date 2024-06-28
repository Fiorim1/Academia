import "../../../../../styles/Training.css"
import React, { useState } from 'react';
import Header from "../../../../Header";
import Footer from "../../../../Footer";
import { useNavigate } from "react-router-dom";

const TrainingBoxe = () => {
  // Estado local para armazenar os treinos
  const [workouts, setWorkouts] = useState([
    { id: 1, day: 'Segunda', exercise: 'Sparring', sets: 4, reps: 10 },
    { id: 2, day: 'Terça', exercise: 'Manopla', sets: 3, reps: 12 },
    { id: 3, day: 'Quarta', exercise: 'Sombra', sets: 3, reps: 15 },
    { id: 4, day: 'Quinta', exercise: 'Teto-Solo', sets: 4, reps: 8 },
    { id: 5, day: 'Sexta', exercise: 'Pular Corda', sets: 5, reps: 8 }
  ]);

  // Função para atualizar um treino específico
  const handleUpdate = (id, field, value) => {
    const updatedWorkouts = workouts.map(workout => {
      if (workout.id === id) {
        return { ...workout, [field]: value };
      }
      return workout;
    });
    setWorkouts(updatedWorkouts);
  };

  const navigate = useNavigate()

  function backMuscle() {
    navigate("/pageboxe")
  }


  function saveMuscle() {
    alert("Treinos Salvos")
  }

  return (
    <div>
      <Header />
      <div className="trainingTableContainer">
        <table className="trainingTable">
          <thead>
            <tr>
              <th>Dia</th>
              <th>Exercício</th>
              <th>Séries</th>
              <th>Repetições</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map(workout => (
              <tr key={workout.id}>
                <td>{workout.day}</td>
                <td contentEditable onBlur={(e) => handleUpdate(workout.id, 'exercise', e.target.innerText)}>{workout.exercise}</td>
                <td contentEditable onBlur={(e) => handleUpdate(workout.id, 'sets', parseInt(e.target.innerText))}>{workout.sets}</td>
                <td contentEditable onBlur={(e) => handleUpdate(workout.id, 'reps', parseInt(e.target.innerText))}>{workout.reps}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="allButons">
        <div className="saveButton">
          <button type="button" onClick={saveMuscle}>Salvar Treino</button>
        </div>
        <div className="back">
          <button type="button" onClick={backMuscle}>VOLTAR</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TrainingBoxe;
