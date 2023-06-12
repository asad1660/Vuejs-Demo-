<template>
<div>
<h3>User can search from list based on prefix</h3>
    <!-- <input v-model="prefix" placeholder="Search by First Name"> -->
    <v-text-field v-model="prefix"   label="Search by First Name"></v-text-field>
</div>
<br>
    <v-select
    v-model="selected"
  label="Select"
  :items="filteredNames"
></v-select>

<v-sheet width="300" class="mx-auto" style="margin-top: 100px;">
    <v-form fast-fail @submit.prevent>
        <v-text-field v-model="first"  :counter="10" label="First name" required></v-text-field>
        <v-text-field v-model="last"  :counter="10" label="Last name" required></v-text-field>
        <v-btn type="submit" @click="create" block class="mt-2">Create</v-btn>
        <v-btn type="submit" @click="update" block class="mt-2">Update</v-btn>
        <v-btn type="submit" @click="del" block class="mt-2">Delete</v-btn>
    </v-form>
</v-sheet>

</template>

<script>
export default {
    name: "BasicCrud",
    data() {
        return {
            names: ['test data 1', 'data 2', 'test'],
            selected: '',
            prefix: '',
            first: '',
            last: ''
        }
    },
    computed: {
        filteredNames() {
            return this.names.filter((n) =>
                n.toLowerCase().startsWith(this.prefix.toLowerCase())
            )
        }
    },
    watch: {
        selected(name) {
            [this.last, this.first] = name.split(' ')
        }
    },
    methods: {
        create() {
            if (this.hasValidInput()) {
                const fullName = `${this.last}+' '+ ${this.first}`
                if (!this.names.includes(fullName)) {
                    this.names.push(fullName)
                    this.first = this.last = ''
                }
            }
        },
        update() {
            if (this.hasValidInput() && this.selected) {
                const i = this.names.indexOf(this.selected)
                this.names[i] = this.selected = `${this.last}, ${this.first}`
            }
        },
        del() {
            if (this.selected) {
                const i = this.names.indexOf(this.selected)
                this.names.splice(i, 1)
                this.selected = this.first = this.last = ''
            }
        },
        hasValidInput() {
            return this.first.trim() && this.last.trim()
        }
    }
};
</script>

<style scoped>
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
