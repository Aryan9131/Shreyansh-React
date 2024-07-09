import {useState} from 'react'


const useImgPreview=function(){
    const [mediaUrl, setMediaUrl] = useState(null);
    const [isVideo, setIsVideo] = useState(false);
    const handleMediaChange=(e)=>{
        const file=e.target.files[0];
        if(file && file.type.startsWith('video/')){
            setIsVideo(true);
        }else if(file && file.type.startsWith('image/')){
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
    return {handleMediaChange, mediaUrl, isVideo}
}

export default useImgPreview