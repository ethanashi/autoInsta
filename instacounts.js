const fs = require('fs');
const {combineVids} = require('./videoDownload');
const {download} = require('./videoDownload');



let accesstoken = '';


const axios = require('axios');
const FormData = require('form-data');





async function uploadFile() {
    const form = new FormData();
    form.append('file', fs.createReadStream('output.mp4'));

    try {
        const response = await axios.post('https://0x0.st', form, {
            headers: {
                ...form.getHeaders()
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log("Quick error")
        return  await uploadFile();
    }
}


async function createContainer(account, videoUrl, caption) {
    const options = {
        method: 'POST',
        url: `https://graph.facebook.com/v17.0/${account.id}/media`,
        params: {
          video_url: videoUrl,
          media_type: 'REELS',
          caption: caption,
          access_token: accesstoken
        }
      };

      
      
     let response = await axios.request(options)
     
     return response.data.id;
}

async function publishPost(account, creationID) {
    const options = {
        method: 'POST',
        url: `https://graph.facebook.com/v17.0/${account.id}/media_publish`,
        params: {
          creation_id: creationID,
          access_token: accesstoken
        }
      };

      
      try {
      let response = await axios.request(options);
      return response.data.id;    
      } catch(err) {
        await sleep(30000);
        console.log("Error: Sleeping for 30s...");
        await publishPost(account, creationID);
      }
    

}






class Account {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

let theBistro = new Account("INSTA_BUSINESS_ID", "NAME");

let PixelatedOasis = new Account("INSTA_BUSINESS_ID", "NAME");


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function uploadVideo(Acc) {
    
    let vid = await download();

    await combineVids();


    let uploaded = await uploadFile();
    
    let uploadedURL = uploaded.replace(/\s+/g, '');

    let caption = `${vid.caption}\n.\n.\n.\nFollow @theBistroEnt and @PixelatedOasis for more content!\n.\n.\n.\n📸: u/${vid.username} on ${vid.reddit}\n.\n.\n.\n#explore #explorepage #viral #viralpost #toxicmasculinity #toxicmemes #futurelations #cityboys #cityboysup #trending #funnymeme #funnyvideos #funny #memereels`;

    let container = await createContainer(Acc, uploadedURL , caption);
    console.log("container", container);
    try {
        

        await sleep(120000);
        await publishPost(Acc, container);
    }
    catch(err) {
        console.log("Error: SLeeping...");
        await sleep(1200000);
        await publishPost(Acc, container);
    }

}

async function uploadVideoPaw(Acc) {
    
    let vid = await download(true);

    await combineVids();


    let uploaded = await uploadFile();
    
    let uploadedURL = uploaded.replace(/\s+/g, '');

    let caption = `${vid.caption}\n.\n.\n.\nFollow @PawesomeVideos for more content!\n.\n.\n.\n📸: u/${vid.username} on ${vid.reddit}\n.\n.\n.\n#explore #explorepage #viral #viralpost #funnydogvideos #hilariousvideos #dogtricksofinstagram #kitten #petlovers #petstagram #catphotography #catworld #cat #cats_of_world #catlife`;

    let container = await createContainer(Acc, uploadedURL , caption);
    console.log("container", container);
    try {
        

        await sleep(120000);
        await publishPost(Acc, container);
    }
    catch(err) {
        console.log("Error: SLeeping...");
        await sleep(1200000);
        await publishPost(Acc, container);
    }

}

module.exports = {
    uploadVideo, 
    uploadVideoPaw,
    Account
};