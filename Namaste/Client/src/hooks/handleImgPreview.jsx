import {useState} from 'react'


const useImgPreview=function(imgUrl, setImgFile){
    const [mediaUrl, setMediaUrl] = useState(imgUrl ? imgUrl : null);
    const [isVideo, setIsVideo] = useState(false);
    const handleMediaChange=(e)=>{
        const file=e.target.files[0];
        if(file && file.type.startsWith('video/')){
            setIsVideo(true);
        }else if(file && file.type.startsWith('image/')){
            if(setImgFile){
                console.log(file);
                setImgFile(file)
            }
            setIsVideo(false);
        }
        if(file){
            const reader=new FileReader();
            reader.onloadend=()=>{
                setMediaUrl(reader.result);
            }
            reader.readAsDataURL(file)
        }else{

        }
    }
    const clearMedia = () => {
        setMediaUrl(null);
        setIsVideo(false);
      };
    const setMedia=(url)=>{
        setMediaUrl(url)
    }
    return {handleMediaChange, mediaUrl, isVideo, clearMedia, setMedia}
}

export default useImgPreview