import Message from 'quark-ui/lib/message';

export const setStorage =(key,value) =>{
    if(!window.localStorage){
        Message.error('很抱歉，您的客户端不支持本地存储。');
    }
    localStorage.setItem(key,value)
}

export const getStorage = (key)=>{
    return localStorage.getItem(key)
}