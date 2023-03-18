<template>
  <div>
    <form @submit.prevent="addFood">
      <label for="upc">UPC:</label>
      <input type="text" id="upc" v-model="upc" />
      <br />
      <label for="quantity">Quantity:</label>
      <input type="number" id="quantity" v-model="quantity" />
      <br />
      <button type="submit">Add Food</button>
    </form>
    <p v-if="success">Food item added successfully!</p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      upc: '',
      quantity: '',
      success: false,
      error: '',
    };
  },
  methods: {
    async addFood() {
      try {
        const response = await fetch('http://localhost:8080/add-food', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            upc: this.upc,
            quantity: this.quantity,
          }),
        });
        const data = await response.json();
        if (data.success) {
          this.success = true;
          this.error = '';
          this.upc = '';
          this.quantity = '';
        }
      } catch (err) {
        this.success = false;
        this.error = 'Error adding food item';
      }
    },
  },
};
</script>
