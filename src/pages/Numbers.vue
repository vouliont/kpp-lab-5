<template>
   <Page class="page">
      <ActionBar class="action-bar" title="My numbers"></ActionBar>

      <FlexboxLayout flexDirection="column" justifyContent="space-between" alignItems="flex-end">
         <ListView class="list-group" for="item in $store.getters.numbers">
            <v-template>
               <GridLayout class="list-group-item" rows="auto, *" columns="*">
                  <Label row="0" col="1" :text="item.name" class="list-group-item-heading" />
                  <Label row="1" col="1" :text="item.number" class="list-group-item-text" />
               </GridLayout>
            </v-template>
         </ListView>
      
         <Button class="btn-add" text="+" @tap="$router.push('/add-number')"></Button>

      </FlexboxLayout>

   </Page>
</template>

<script>
   export default {

   }
</script>

<style scoped>
   .btn-add {
      width: 60;
      height: 60;
      border-radius: 30;
      background-color: #46bcfb;
      color: #fff;
      font-size: 22;
      line-height: 60;
      margin: 5 15 15 5;
   }
</style>
