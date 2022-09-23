import TelegramBot  from 'node-telegram-bot-api';

const token = '5680804675:AAG0We22XZUzVOH2h2NmijaaEIgddk85xI8';

const bot = new TelegramBot(token, {polling: true});

const objSherik = {
    category:'',
    allName:'',
    technology:'',
    call:'',
    region:'',
    salary:'',
    jobs:'',
    callTime:'',
    goal:''
}

bot.on('message', (msg) => {

    // started bot
     if(msg.text === '/start'){
        const opts = {
            reply_to_message_id: msg.message_id,
            reply_markup: JSON.stringify({
                keyboard: [
                    ['Sherik kerak', 'Ish joyi kerak'],
                    ['Hodim kerak', 'Ustoz kerak'] ,
                    ['Shogirt kerak']           
                ],
                one_time_keyboard: true,
                selective: true
            })
        }

        bot.sendMessage(
            msg.chat.id, 
            `Assalomu alekum ${msg.from.first_name} Ustoz shogirt kanalining rasmiy botiga hush kelibsiz`,
             opts
            )
     }

     //category Sherik kerak
     if(msg.text === 'Sherik kerak'){
        objSherik.category = msg.text
        bot.sendMessage(
            msg.chat.id, 
            `Sherik topish uchun ariza berish Hozir sizga birnecha savollar beriladi.Har biriga javob bering. Oxirida agar hammasi to'g'ri bo'lsa, HA tugmasini bosing va arizangiz Adminga yuboriladi.`
            )
        bot.sendMessage(msg.chat.id, 'Isim, familiyangizni kiriting')
        return
     }

     
     if(objSherik.category === 'Sherik kerak'){
        objSherik.allName = msg.text
        bot.sendMessage(msg.chat.id, `
        📚 Texnologiya:Talab qilinadigan texnologiyalarni kiriting? Texnologiya nomlarini vergul bilan ajrating. Masalan, 
         Java, C++, C#`)
         return
     }
    if(objSherik.allName){
        objSherik.allName = msg.text
        bot.sendMessage(msg.chat.id, ` 📞 Aloqa: Bog'lanish uchun raqamingizni kiriting ? Masalan, +998 90 123 45 67 `)
    }     

});


