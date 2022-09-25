import TelegramBot  from 'node-telegram-bot-api';
import dotenv from 'dotenv'

dotenv.config()

const token = process.env.token;

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
var chatId ;

var step = 0;

bot.on('message', (msg) => {
   
    console.log(msg);
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
         if(step === 0 ){
            step++
        }
         return
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
        if(step === 1){
            step++
        }
        return
     }

     if(step===2 ){
        objSherik.allName = msg.text
        chatId = msg.message_id
        bot.sendMessage(
            msg.chat.id, 
            `<strong>📚 Texnologiya:</strong> \n\nTalab qilinadigan texnologiyalarni kiriting \nTexnologiya nomlarini vergul bilan ajrating. Masalan, \n\nJava, C++, C#.`,
            {parse_mode:'HTML'}
            )
            if(step === 2){
                step++
            }
            return
     }
     
     if(step===3){
        objSherik.technology = msg.text
        chatId = msg.message_id
        bot.sendMessage(
            msg.chat.id, 
            `<strong>📞 Aloqa:</strong> \n\nBog'lanish uchun raqamingizni kiriting?\nMasalan, +998 90 123 45 67`,
            {parse_mode:'HTML'}
            )
            if(step === 3){  
                step++
            }
            return
     }

     if(step===4){
        objSherik.call = msg.text
        chatId = msg.message_id
        bot.sendMessage(
            msg.chat.id, 
            `<strong>🌐 Hudud:</strong> \n\nQaysi hududdansiz?\nViloyat nomi, Toshkent shahar yoki Respublikani kiriting.`,
            {parse_mode:'HTML'}
            )
           if(step ===4){
            step++
           }
            return
     }

     if(step === 5){
        objSherik.region = msg.text
        chatId = msg.message_id
        bot.sendMessage(
            msg.chat.id, 
            `<strong>💰 Narxi:</strong> \n\nTolov qilasizmi yoki Tekinmi?\nKerak bo'lsa, Summani kiriting?`,
            {parse_mode:'HTML'}
            )
            if(step ===5){
                step++
               }
            return
     }

     if(step===6){
        objSherik.salary = msg.text
        chatId = msg.message_id
        bot.sendMessage(msg.chat.id, 
            `<b>👨🏻‍💻 Kasbi: </b> \n\nIshlaysizmi yoki o'qiysizmi?
            \nMasalan, Talaba`,
            {parse_mode:'HTML'}
            )
            if(step ===6){
                step++
               }
            return
    }

    if(step===7){
        objSherik.jobs = msg.text
        chatId = msg.message_id
        bot.sendMessage(msg.chat.id, 
            `<b>🕰 Murojaat qilish vaqti:</b> \n\nQaysi vaqtda murojaat qilish mumkin?
            \nMasalan, 9:00 - 18:00`,
            {parse_mode:'HTML'}
            )
        if(step ===7){
            step++
        }
            return
    }

    if(step===8){
        objSherik.callTime = msg.text
        chatId = msg.message_id
        bot.sendMessage(msg.chat.id, 
            `<b>🔎 Maqsad:</b> \n\nMaqsadingizni qisqacha yozib bering.`,
            {parse_mode:'HTML'}
            )
            if(step ===8){
                step++
               }
            return
    }
    
    if(step===9){
        objSherik.goal === msg.text

        const message = `
           \n\n<b>${objSherik.category}:</b>
           \n\n🏅 Sherik: ${objSherik.allName},\n📚 Texnologiya: ${objSherik.technology},\n🇺🇿 Telegram: ${msg.from.username},\n📞 Aloqa: ${objSherik.call},\n🌐 Hudud: ${objSherik.region},\n💰 Narxi: ${objSherik.salary},\n👨🏻‍💻 Kasbi: ${objSherik.jobs},\n🕰 Murojaat qilish vaqti: ${objSherik.callTime},\n🔎 Maqsad: ${objSherik.goal}\n\n${objSherik.technology},${objSherik.region}\n\n
           `

           const opts = {
            reply_markup:{
                keyboard: [
                    ['Ha', 'Yo`q']  
                ],
            }
        } 

        bot.sendMessage(
            msg.chat.id,
            message,
            {parse_mode:'HTML'}
        )
        bot.sendMessage(msg.chat.id, `Barcha ma'lumotlar to'g'rimi?`, opts)
    }

});



