Vue.createApp({
    data: ()=>({
        myHtml: '<h1>Vu3 lesson</h1>',
        title: 'my title',
        person: {
            firstName: 'Ihor',
            lastName: 'Honchar',
            age: '32'
        },
        items: [1, 2]
    }),
    methods: {
        addItem() {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ''
        },
        remove(idx){
            this.items.splice(idx, 1)
        },
        log(item) {
            console.log(item)
        }
    },
    computed: {
        evenItems() {
            return this.items.filter(i => i % 2 === 0)
        }
    }
}).mount('#app');