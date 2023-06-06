import {defineStore} from 'pinia';

export const useTasksStore = defineStore('taskStore', {
    state: () => ({
        tasks: [
            {id: 1, title: "buy some milk", isFav:false},
            {id: 2, title: "play piano", isFav:true}
        ]
    }),
    getters: {
        getFavs() {
            return this.tasks.filter(t => t.isFav)
        },
        getFavCount(){
            return this.tasks.reduce((p,c) => {
                return c.isFav ? p + 1 : p
            }, 0)
        },
        getTotalCount: (state) => {
            return state.tasks.length
        }
    },
    actions: {
        actionAddTask(task){
            this.tasks.push(task)
        },
        actionDeleteTask(id){
            this.tasks = this.tasks.filter(t => {
                return t.id != id
            })
        },
        actionToggleFav(id){
            const task = this.tasks.find(t => t.id === id)
            task.isFav = !task.isFav
        }
    }
})