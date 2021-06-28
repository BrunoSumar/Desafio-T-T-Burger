<template>
    <div>
        <b-table
            :fields="fields"
            :items="items"
            head-variant="dark"
            striped
            hover
            bordered
            responsive
            foot-clone
            foot-variant="light"
        >
            <template #head(loja)="data">
                <b-form-datepicker
                    size="sm"
                    :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
                    placeholder="--/--/----"
                >
                </b-form-datepicker>
            </template>

            <template #cell(loja)="data">
                <span class="text-blue">{{data.item.loja}}</span>
            </template>
            <template #cell(atingimento)="data">
                {{ (data.item.vendas/data.item.meta_valor).toFixed(3) }}
            </template>
            <template #cell(produtos_cliente)="data">
                {{ (data.item.q_produtos/data.item.q_produtos_burger).toFixed(3) }}
                <b-icon v-if="data.item.q_produtos>=data.item.meta_prod_clt*data.item.q_produtos_burger"
                        icon="arrow-up" variant="success"
                ></b-icon>
                <b-icon v-else icon="arrow-down" variant="danger"></b-icon>
            </template>
            <template #cell(ticket_medio)="data">
                {{ (data.item.vendas/data.item.q_produtos_burger).toFixed(3) }}
            </template>


            <template variant="info" #foot(loja)="data">
                <span class="text-blue">Total</span>
            </template>
            <template #foot(vendas)="data">
                {{total.vendas}}
            </template>
            <template #foot(meta_valor)="data">
                {{total.meta_valor}}
            </template>
            <template #foot(atingimento)="data">
                {{ (total.vendas/total.meta_valor).toFixed(3) }}
            </template>
            <template #foot(produtos_cliente)="data">
                {{ (total.q_produtos/total.q_produtos_burger).toFixed(3) }}
            </template>
            <template #foot(ticket_medio)="data">
                {{ (total.vendas/total.q_produtos_burger).toFixed(3) }}
            </template>
        </b-table>
    </div>
</template>


<script>
 export default {
     name: 'Navbar',
     data() {
         return {
             fields: [
                 'loja',
                 // { key: 'loja', label: '' },
                 { key: 'vendas', label: 'Venda(R$)' },
                 { key: 'meta_valor', label: ' Meta(R$)' },
                 { key: 'atingimento', label: ' Atingiemnto de meta (R$)' },
                 { key: 'produtos_cliente', label: 'Quantidade de produtos / cliente' },
                 { key: 'ticket_medio', label: 'Ticket médio / cliente' },
             ],
             // 'Data', 'venda(rs)','Meta(R$)','Atingiemnto de meta (R$)','Quantidade de produtos / cliente','Ticket médio / cliente'],
             // fields: ['first_name', 'last_name', 'age'],
             items: [
                 // {loja: 'local',vendas: 4, meta_valor: 3, q_produtos:5,q_produtos_burger: 3},
                 {loja: 'local',vendas: 4, meta_valor: 3, meta_prod_clt: 3, q_produtos:5, q_produtos_burger: 1},
                 {loja: 'local',vendas: 4, meta_valor: 3, meta_prod_clt: 3, q_produtos:5, q_produtos_burger: 1},
                 {loja: 'local',vendas: 4, meta_valor: 3, meta_prod_clt: 3, q_produtos:5, q_produtos_burger: 1},
                 {loja: 'local',vendas: 4, meta_valor: 3, meta_prod_clt: 3, q_produtos:5, q_produtos_burger: 1},
             ],
             total: {},
         }
     },
     methods: {
         calcTotal: function() {
             return this.items.reduce((ac, arr) => {
                 return {
                     vendas: ac.vendas +arr.vendas,
                     meta_valor: ac.meta_valor + arr.meta_valor,
                     meta_prod_clt: ac.meta_prod_clt + arr.meta_prod_clt,
                     q_produtos:ac.q_produtos + arr.q_produtos,
                     q_produtos_burger: ac.q_produtos_burger + arr.q_produtos_burger,
                 }
             },{
                 vendas: 0, meta_valor: 0, meta_prod_clt: 0, q_produtos:0, q_produtos_burger: 0
             })
         }
     },
    created: function () {
        this.total = this.calcTotal()
    }
 }
</script>

<style>
 thead th{
     background-color: #21252a !important;
 }

 .text-blue {
     color: #3d59ff !important;
 }
 td, th, th div label {
     text-align: center !important;
     white-space: nowrap !important;
 }
 td, tfoot th {
     font-size: 1.22em;
 }
 tfoot tr th{
     background-color: #c0c0c0 !important;
     color: #2f2f2f !important;
 }
</style>
