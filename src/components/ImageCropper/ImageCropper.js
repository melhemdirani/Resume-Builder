import React , { useState, useCallback, useContext } from 'react';
import Cropper from 'react-easy-crop';
import { Slider } from '@material-ui/core';
import getCroppedImg from './cropImage'
import './ImageCropper.styles.scss';
import { EditorContext } from '../../components/EditorContext';

export default  function ImageCropper () {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)
  const [aspect, setAspect] = useState(1)

  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
  const [croppedImage, setCroppedImage] = useState(null)
  const {image, setCropper, round, setRound, setImage }= useContext(EditorContext)


  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels( croppedAreaPixels)
  }, [])

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        image,
        croppedAreaPixels,
      )
      setCroppedImage(croppedImage)
     
      setImage(croppedImage)

    } catch (e) {
      console.error(e)
    }
  }, [croppedAreaPixels, round, aspect])

  const onClose = useCallback(() => {
    setCroppedImage(null)
  }, [])

  const onRoundClick = () => {
    if(!round){
      setRound(true)
    }
    if(aspect != 1){
      setAspect(1)
    }
  }
  const onSquareClick = () => {
    if(round){
      setRound(false)
    }
    if(aspect !== 1){
      setAspect(1)
    }
  }
  const onRectClick = () => {
    if(round){
      setRound(false)
    }
    if(aspect === 1){
      setAspect(3/4)
    }

  }
  const onSaveClick = () => {
    showCroppedImage();
    setCropper(false) 
  }
  return (

    <div className='ImageCropper_Container'>
        <Cropper
            image={image}
            crop={crop}
            zoom={zoom}
            aspect={aspect}
            cropShape={round ? "round" :"rect"}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
            classes={ {containerClassName: "cropperContainer", mediaClassName: "string", cropAreaClassName: "cropArea"} }
        />
        <div className='controls'>
          <div className='buttons'>
            <button onClick={() => onRectClick(false)} className="rect" style={{background: aspect !== 1 ? "#3F50B5" : "inherit"}}/>
            <button onClick={() => onSquareClick()} className="square" style={{background: aspect === 1 && !round ? "#3F50B5" : "inherit"}}/>
            <button onClick={() => onRoundClick()} className="round" style={{background: aspect === 1 && round ? "#3F50B5" : "inherit"}}/>
          </div>
          <div className='slider'>
            <Slider
              min={1}
              max={3}
              value={zoom}
              step={0.1}
              aria-labelledby="Zoom"
              onChange={(e, zoom) => setZoom(zoom)}
            />
          </div>
          <div className='settings'>
            <button onClick={(e) => onSaveClick(e)} className="save">
              save
            </button>
            <button onClick={() => setCropper(false)} className="save">
              Cancel
            </button>
          </div>
        </div>
    </div>

  )
}