import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { Header } from '../components/Header';
import { Task, TasksList } from '../components/TasksList';
import { TodoInput } from '../components/TodoInput';

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const newTask: Task = {
      id: new Date().getTime(),
      title: newTaskTitle,
      done: false
    }
    setTasks(oldArray => [...oldArray, newTask]);
  }

  function handleToggleTaskDone(id: number) {
    let newTasks: Task[] = [];
    tasks.forEach( (taskCurrent) => {
      if(taskCurrent.id===id){
        taskCurrent.done = !taskCurrent.done;
      }
      newTasks.push(taskCurrent);
   })
    setTasks(newTasks);
  }

  function handleRemoveTask(id: number) {
    let newTasks: Task[] = [];
    tasks.forEach( (taskCurrent) => {
      if(taskCurrent.id!==id){
        newTasks.push(taskCurrent);
      }
   })

    setTasks(newTasks);
  }

  return (
    <View style={styles.container}>
      <Header tasksCounter={tasks.length} />

      <TodoInput addTask={handleAddTask} />

      <TasksList 
        tasks={tasks} 
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleRemoveTask} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEBEB'
  }
})