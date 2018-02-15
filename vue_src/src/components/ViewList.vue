<template>
    <div class="bucket-list">
        <ul id="list">
            <li v-for="item in items">
                {{ item.title }} - {{ item.description }} - {{ item.category }}
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: 'ViewList',
        data () {
            return {
                items: "",
                input: {},
                response: ""
            }
        },
        mounted() { 
          axios({ method: "GET", "url": "http://localhost:3000/bucketlist" }).then(result => {
                this.items = result.data.lists;
                console.log(result.data.lists);
            }, error => {
                console.error(error);
            });
        },
        methods: { 
        //   sendData() {
        //         axios({ method: "POST", "url": "https://httpbin.org/post", "data": this.input, "headers": { "content-type": "application/json" } }).then(result => {
        //             this.response = result.data;
        //             console.log(this.response);
        //         }, error => {
        //             console.error(error);
        //         });
        //     }
        }
    }
</script>

<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    textarea {
        width: 600px;
        height: 200px;
    }
</style>