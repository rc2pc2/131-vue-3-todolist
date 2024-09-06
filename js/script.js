const { createApp } = Vue

// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

// % input
// ! collegare l'input con i nostri data => come collego un INPUT con una proprieta' reattiva? ==> v-model
// # bottone

// Bonus:
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del todo corrispondente 
// % (se done era uguale a false, impostare true e viceversa)


createApp({
    data() {
        return {
            todoItemText: "",
            todoList : [
                {
                    text: "Fare la spesa",
                    done: false,
                },
                {
                    text: "Fare i compiti",
                    done: true,
                },
                {
                    text: "Stendere i panni",
                    done: true,
                },
                {
                    text: "Pagare l'assicurazione del lanciafiamme",
                    done: false,
                },
                {
                    text: "Andare in palestra in accappatoio",
                    done: false,
                },
                {
                    text: "Ballare in una fontana antica senza rovinarla",
                    done: false,
                },
            ],
        }
    },
    methods:{
        addItem(content){
            this.todoList.push(
                {
                    text: content,
                    done: false
                }
            );
            this.todoItemText = "";
        },
        removeItem(index){
            // console.log(`rimosso l'elemento con indice ${index}`);
            this.todoList.splice(index, 1);
        },
        toggleDone(index){
            // console.log(`invertito il valore di completamento dell'elemento con indice ${index}`);
            this.todoList[index].done = !this.todoList[index].done; 
        }
    }
}).mount('#app')




