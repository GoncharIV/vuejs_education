const App = {
    data() {
        return {
            title: 'Список заметок:',
            placeholderString: 'Введите название заметки',
            inputValue: '',
            notes: ['1', '2', '3']
        }
    },
    methods: {
        // inputChangeHandler(event) {
        //     this.inputValue = event.target.value
        // },
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue)
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNote(idx, event) {
            this.notes.splice(idx, 1)
        },
        // inputKeyPress(event) {
        //     if (event.key === 'Enter') {
        //         this.addNewNote();
        //     }
        // }
    },
    computed: {
        doubleCountComputed() {
            return this.notes.length * 2
        }
    },
    watch: {
        // название функции должно совпадать с названием переменной
        inputValue() {

        }
    }
};

const app = Vue.createApp(App)
app.mount('#app')