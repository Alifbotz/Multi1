const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api-alphabot.herokuapp.com',
}

// Free apikey
global.APIKeys = {
	'https://api-alphabot.herokuapp.com': 'Alphabot',
}

// setting 
global.autoread = true // auto read pesan / message
global.autorecording = true //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)

// Other
global.botname = "Sad-Bot`Zོ"
global.ownername= "ᴹᴿ᭄ Alifbotོ ×፝֟͜×"
global.myweb ="https://api-alphabot.herokuapp.com/"
global.youtube = "https://youtube.com/c/ZeeoneOfc"
global.github = "https://github.com/Alifbotz"
global.ownernomer = "6281915605137"
global.ownernomerr = "+6281915605137"
global.thumbnail = "./image/lol.jpg"
global.donasi = "./image/donasi2.jpg"
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["6281915605137","6281915605137","6281915605137"] //ganti agar fitur owner bisa di gunakan
global.packname = '© Sad-Botzོ' //sticker wm
global.author = 'Di Buat Oleh Bang Alif' //sticker wm
global.sessionName = 'session'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '🤗Done, Oke Desu~',
    admin: 'Anda Admin Bukan?, Bukan, Pantes Gak Bisa, Makanya Naik Jabatan Tod🤣 !',
    botAdmin: 'Awokawok Gak Bisa Makanya Jadikan Saya Admin Agar Fiturnya Dapat Di Gunakan !',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Bang Alif !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: 'Fitur Khusus Nomor Bot ',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '⏳ Sedang Di Proses',
	lockCmd: 'Fitur Gak Aktif, Bilang Ama Bang Alif Suruh Aktifin!',
	example1: 'Selamat Datang or Welcome @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
