<template>
    <b-container>
                    <section v-if="errored">
                        <p>We're sorry, we're not able to retrieve this information at the moment, please try later</p>
                    </section>
                    <section v-else>
                        <p>animal name: {{ posts.name }}</p>
                        <p>animal id: {{posts.id}}</p>
                        <p>animal image link: {{ posts.image_link }}</p>
                        <p>fake link: {{ imglink }}</p>
                        <b-img center v-bind:src="imglink"></b-img>
                    </section>
     
                <b-button href="#" @click="mounted" variant="primary">Contact</b-button>
  
        </b-container>
</template>

<script>
import axios from 'axios'

export default {
    el: "#CuriosityView",
    data () {
        return  {
            posts: [],
            imglink: null,
            loading: true,
            errored: false
        }
    },
    methods: {
        mounted () {
            axios
                .get("https://zoo-animal-api.herokuapp.com/animals/rand/")
                .then(response => {
                    (this.posts = response.data),
                    (this.imglink = this.posts.image_link)
                })
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })
                .finally(() => this.loading = false)
        }
    }
}
</script>

<style>

</style>
