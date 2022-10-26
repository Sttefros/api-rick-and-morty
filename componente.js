new Vue ({
    el: '#app',

    data () {
        return {
            info:null,
            meta:null,
            search:null
        }
    },
        mounted (){
            axios
                .get('https://rickandmortyapi.com/api/character')
                .then(res => {
                    this.info = res.data.results,
                    this.meta = res.data.info;
                })
        },

        methods: {
            siguiente() {
                axios
                    .get(this.meta.next)
                    .then(res => {
                        this.info = res.data.results,
                        this.meta = res.data.info;
                    })
            },
            anterior() {
                axios
                    .get(this.meta.prev)
                    .then(res => {
                        this.info = res.data.results,
                        this.meta = res.data.info;
                    })
            },
            locacion(){
                axios
                    .get("https://rickandmortyapi.com/api/location")
                    .then(res => {
                        this.info = res.data.results,
                        this.meta = res.data.info;
                    })
            },
            personajes(){
                axios
                    .get('https://rickandmortyapi.com/api/character')
                    .then(res => {
                        this.info = res.data.results,
                        this.meta = res.data.info;
                    })
            }
        }
})