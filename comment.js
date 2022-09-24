switch(msg.text){

    // category sherik
    case 'Sherik kerak': 
       await bot.sendMessage(
            msg.chat.id, 
            `<strong>Sherik topish uchun ariza berish</strong> \n\nHozir sizga birnecha savollar beriladi.\nHar biriga javob bering.\nOxirida agar hammasi to'g'ri bo'lsa, HA tugmasini bosing \nva arizangiz Adminga yuboriladi.`,
            {parse_mode:'HTML'}
            )
       await bot.sendMessage(msg.chat.id, '<b>Isim, familiyangizni kiriting</b>', {parse_mode:'HTML'})
     ; break;
     
    // category ish joyi
    case 'Ish joyi kerak':
           await bot.sendMessage(
                msg.chat.id, 
                `<strong>Ish topish uchun ariza berish</strong> \n\nHozir sizga birnecha savollar beriladi.\nHar biriga javob bering.\nOxirida agar hammasi to'g'ri bo'lsa, HA tugmasini bosing \nva arizangiz Adminga yuboriladi.`,
                {parse_mode:'HTML'}
                )
           await bot.sendMessage(msg.chat.id, '<b>Isim, familiyangizni kiriting</b>', {parse_mode:'HTML'})
         ; break;

    //category hodim
    case 'Hodim kerak':
        await  bot.sendMessage(
                msg.chat.id, 
                `<strong>Hodim topish uchun ariza berish</strong> \n\nHozir sizga birnecha savollar beriladi.\nHar biriga javob bering.\nOxirida agar hammasi to'g'ri bo'lsa, HA tugmasini bosing \nva arizangiz Adminga yuboriladi.`,
                {parse_mode:'HTML'}
                )
         await bot.sendMessage(msg.chat.id, '<b>Isim, familiyangizni kiriting</b>', {parse_mode:'HTML'})
         ; break;
     
    //category ustoz
     case 'Ustoz kerak':
        await bot.sendMessage(
                msg.chat.id, 
                `<strong>Ustoz topish uchun ariza berish</strong> \n\nHozir sizga birnecha savollar beriladi.\nHar biriga javob bering.\nOxirida agar hammasi to'g'ri bo'lsa, HA tugmasini bosing \nva arizangiz Adminga yuboriladi.`,
                {parse_mode:'HTML'}
                )
        await  bot.sendMessage(msg.chat.id, '<b>Isim, familiyangizni kiriting</b>', {parse_mode:'HTML'})
         ; break;

    //category shogird
     case 'Shogird kerak':
        await  bot.sendMessage(
                msg.chat.id, 
                `<strong>Shogird topish uchun ariza berish</strong> \n\nHozir sizga birnecha savollar beriladi.\nHar biriga javob bering.\nOxirida agar hammasi to'g'ri bo'lsa, HA tugmasini bosing \nva arizangiz Adminga yuboriladi.`,
                {parse_mode:'HTML'}
                )
        await   bot.sendMessage(msg.chat.id, '<b>Isim, familiyangizni kiriting</b>', {parse_mode:'HTML'})
         ; break;
}




if(msg.message_id-chatId == 2){
     objSherik.allName = msg.text
     chatId = msg.message_id
     bot.sendMessage(msg.chat.id, 
         `<b>🌐 Hudud :</b> \n\nQaysi hududdansiz?
         \nViloyat nomi, Toshkent shahar yoki Respublikani kiriting. `,
         {parse_mode:'HTML'}
         )
 }

 if(msg.message_id-chatId == 2){
     objSherik.allName = msg.text
     chatId = msg.message_id
     bot.sendMessage(msg.chat.id, 
         `<b>💰 Narxi:</b> \n\nTolov qilasizmi yoki Tekinmi?
         \nKerak bo'lsa, Summani kiriting? `,
         {parse_mode:'HTML'}
         )
 }

 if(msg.message_id-chatId == 3){
     objSherik.allName = msg.text
     chatId = msg.message_id
     bot.sendMessage(msg.chat.id, 
         `<b>👨🏻‍💻 Kasbi: </b> \n\nIshlaysizmi yoki o'qiysizmi?
         \nMasalan, Talaba`,
         {parse_mode:'HTML'}
         )
 }
 
 if(msg.message_id-chatId == 2){
     objSherik.allName = msg.text
     chatId = msg.message_id
     bot.sendMessage(msg.chat.id, 
         `<b>🕰 Murojaat qilish vaqti:</b> \n\nQaysi vaqtda murojaat qilish mumkin?
         \nMasalan, 9:00 - 18:00`,
         {parse_mode:'HTML'}
         )
 }

 if(msg.message_id-chatId == 3){
     objSherik.allName = msg.text
     chatId = msg.message_id
     bot.sendMessage(msg.chat.id, 
         `<b>🔎 Maqsad:</b> \n\nMaqsadingizni qisqacha yozib bering.`,
         {parse_mode:'HTML'}
         )
 }
 