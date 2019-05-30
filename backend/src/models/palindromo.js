const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PalindromoSchema = new Schema({
    first_word: {
      type: String,
      required: [true, "A primeira palavra é obriatória"]
    },
    second_word: {
      type: String,
      required: [true, "A segunda palavra é obriatória"]
    },
    isPalindromo:{
      type:Boolean,
      default:false
    }
  });
  
PalindromoSchema.set('timestamps', true)
PalindromoSchema.set('toObject', { virtuals: true })
PalindromoSchema.set('toJSON', { virtuals: true })

const Palindromo = mongoose.model("Palindromo", PalindromoSchema);
  
module.exports = Palindromo;