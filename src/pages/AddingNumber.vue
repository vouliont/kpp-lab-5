<template>
   <Page class="page">
      <ActionBar class="action-bar" title="Add number" />

      <StackLayout class="form">

         <StackLayout class="input-field">
            <Label text="Name" class="label font-weight-bold m-b-5" />
            <TextField class="input" v-model="name" />
            <StackLayout class="hr-light"></StackLayout>
         </StackLayout>

         <StackLayout class="input-field">
            <Label text="Number" class="label font-weight-bold m-b-5" />
            <TextField class="input" v-model="number" />
            <StackLayout class="hr-light"></StackLayout>
         </StackLayout>

         <FlexboxLayout justifyContent="space-around">
            <Button
               class="btn btn-outline btn-cancel"
               text="Cancel"
               @tap="$router.push('/number')"
            ></Button>
            <Button
               class="btn btn-primary btn-add"
               text="Add number"
               @tap="addNumber()"
            ></Button>
         </FlexboxLayout>
      </StackLayout>
   </Page>
</template>

<script>
   export default {
      data() {
         return {
            name: '',
            number: ''
         }
      },
      methods: {
         addNumber() {
            this.$store.commit('addNumber', {
               name: this.name,
               number: this.number
            });

            this.$router.push('/number');
         }
      }
   }
</script>

<style scoped>
   .btn-cancel {
      width: 120;
      height: 40;
      border-color: hsl(209, 93%, 63%);
      color: hsl(209, 93%, 63%);
      border-radius: 3;
   }
   .btn-add {
      width: 120;
      height: 40;
      border-radius: 3;
      background-color: hsl(209, 93%, 63%);
      color: #fff;
   }
</style>

