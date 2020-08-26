Vue.component('calculator-numbers', {
    data:  function(){
        numbers: [1,2,3,4,5,6,7,8,9,0]
    },
    template: `<div class="cell" v-for="(item, index) in numbers" @click="result+=item">
    {{ item }}
  </div>`
})

var vm = new Vue({
    el: '#root',
    data: {
        numbers: [1,2,3,4,5,6,7,8,9,0],
        symbs: ['+', '-', '*', '/'],
        result: ''
    },
    methods: {
        add: function(i) {
            this.result = this.result.slice(1);
            this.result = result + i;
        },
        makeResult: function() {
            
            this.result = math.evaluate(this.result);
            this.result = this.result + '';
        }
    }
})