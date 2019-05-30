const PalindromoModel = require('../../models/palindromo')

exports.index = async (req,res)=>{
    try{        
        let filter = req.query.filter,
        query = {}

        if(filter)
            query.$or =[
                { "first_word": new RegExp(filter, 'i') },          
                { "second_word": new RegExp(filter, 'i') }
            ]

        let list = await PalindromoModel.find(query)        

        return res.success('Ok',{palindromo:list})    
    }catch(err){
        return res.error('Bad request',err.message)   
    }
}

exports.show = async (req,res)=>{
    try{
        let data = await PalindromoModel.findOne({_id:req.params.id})
        return res.success('Ok',{palindromo:data})
    }catch(err){
        return res.error('Bad request',err.message)   
    }    
}

exports.analize = (req,res)=>{       
    let {first_word,second_word} = req.all()
    if(!first_word || !second_word)
        return res.error('Bad request','As palavras não podem ser vazias',400)

    let revertFirstWord = first_word.trim()
    revertFirstWord = revertFirstWord.split("")
    revertFirstWord = revertFirstWord.reverse()
    revertFirstWord = revertFirstWord.join("")
    revertFirstWord = revertFirstWord.toLowerCase()

    second_word = second_word.trim()
    second_word = second_word.toLowerCase()

    let isPalindromo = revertFirstWord == second_word

    return PalindromoModel.create({
        first_word,
        second_word,
        isPalindromo
    }).then(data=>{
        return res.success('Ok',{palindromo:data},201)
    })    
    .catch(err=>{        
        return res.error('Bad request',err.message,400)
    })

}
