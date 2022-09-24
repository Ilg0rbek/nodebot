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

const arr = ['category', 'allName', 'technology', 'call', 'region', 'salary', 'jobs', 'callTime', 'goal']
var chatId ;

bot.on('message', (msg) => {

    // started bot
     if(msg.text === '/start'){
        const opts = {
            reply_markup:{
                keyboard: [
                    ['Sherik kerak', 'Ish joyi kerak'],
                    ['Hodim kerak', 'Ustoz kerak'] ,
                    ['Shogirt kerak']           
                ],
            }
        }
        const message =  `Assalomu alekum ${msg.from.first_name} \nUstoz shogirt kanalining rasmiy botiga hush kelibsiz\n\n/help yordam buyrugi orqali nimalarga qodir ekanligimni bilib oling!`
        bot.sendMessage(
            msg.chat.id, 
            message,
            opts,
         )
        }
  

     //category Sherik kerak
     if(msg.text === 'Sherik kerak'){
        objSherik.category = msg.text
        chatId = msg.message_id
        bot.sendMessage(
            msg.chat.id, 
            `<strong>Sherik topish uchun ariza berish</strong> \n\nHozir sizga birnecha savollar beriladi.\nHar biriga javob bering.\nOxirida agar hammasi to'g'ri bo'lsa, HA tugmasini bosing \nva arizangiz Adminga yuboriladi.`,
            {parse_mode:'HTML'}
            )
        bot.sendMessage(msg.chat.id, '<b>Isim, familiyangizni kiriting</b>', {parse_mode:'HTML'})
     }
     
     if(msg.message_id - chatId == 3 ){
        objSherik.allName = msg.text
        chatId = msg.message_id
        console.log(chatId);
        bot.sendMessage(msg.chat.id, `
        📚 <b>Texnologiya:</b> \n\nTalab qilinadigan texnologiyalarni kiriting \nTexnologiya nomlarini vergul bilan ajrating. Masalan,\n\nJava, C++, C#`,
        {parse_mode:'HTML'}
        )
     }

    if(msg.message_id-chatId == 2){
        objSherik.allName = msg.text
        chatId = msg.message_id
        bot.sendMessage(msg.chat.id, 
            ` 📞 <b>Aloqa:</b> \n\nBog'lanish uchun raqamingizni kiriting \nMasalan, +998 90 123 45 67 `,
            {parse_mode:'HTML'}
            )
    }


});


