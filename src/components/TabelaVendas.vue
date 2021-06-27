<template>
  <div>
      <b-table
          :fields="fields"
          head-variant="dark"
          :items="items"
          sticky-header
      >
        <template #cell(Data)="data">
            {{ items[data.index].age + 1 }}
        </template>
      </b-table>
  </div>
</template>


<script>
export default {
     name: 'Navbar',
     data() {
      return {
          fields: ['Data', 'Venda(R$)','Meta(R$)','Atingiemnto de meta (R$)','Quantidade de produtos / cliente','Ticket médio / cliente'],
          // fields: ['first_name', 'last_name', 'age'],
          items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
          { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
          { age: 89, first_name: 'Geneva', last_name: 'Wilson' }
        ]
      }
    }
}
</script>

<style>
thead {
    background-color: #21252a !important;
    border: 3px yellow solid;
}
</style>
