import React, { useState } from 'react';
import axios from 'axios';
import { Upload, Progress } from 'antd';
import Notification from '../../global/Notification';
import './styles.css';
import { URLbase } from '../../../Api/URLbase';
import { useSelector } from 'react-redux';

const UploadProduct = ({ fileList, setFileList, setHhumbUrl, thumbUrl, edit = false }) => {
  const { login } = useSelector((store) => store.login);
  const [defaultFileList, setDefaultFileList] = useState(
    edit
      ? [
          {
            percent: 100,
            size: 221700,
            status: 'uploading',
            thumbUrl: thumbUrl,
            type: 'image/png',
            uid: Math.random() + 100,
          },
        ]
      : [],
  );
  const [progress, setProgress] = useState(edit ? 100 : 0);

  const uploadImage = async (options) => {
    const { onSuccess, onError, file, onProgress } = options;
    const formData = new FormData();
    console.log(file, 'file');
    const config = {
      headers: { 'content-type': 'multipart/form-data', 'X-Auth-Token': login.token },
      onUploadProgress: (event) => {
        const percent = Math.floor((event.loaded / event.total) * 100);
        setProgress(percent);
        if (percent === 100) {
          setTimeout(() => setProgress(0), 1000);
        }
        onProgress({ percent: (event.loaded / event.total) * 100 });
      },
    };
    formData.append('file', file);

    try {
      const res = await axios.post(`${URLbase}/api/products/upload`, formData, config);
      if (!res.data.error) {
        Notification({
          message: 'Imagen Cargada',
          type: 'success',
        });
        setFileList(res.data.filename);
        onSuccess('Ok');
      } else {
        if (res.data.error === 'No token, authorization denied') {
          Notification({
            message: 'Debe iniciar sesion para cargar la imagen',
            type: 'error',
          });
        }
        if (res.data.error === 'Token is no valid') {
          Notification({
            message: 'Problemas de inicio de sesion, debe inicar sesion nuevamente',
            type: 'error',
          });
        }
      }

      console.log('server res: ', res);
    } catch (err) {
      console.log('Eroor: ', err);
      const error = new Error('Some error');
      onError({ err });
    }
  };

  const handleOnChange = ({ file, fileList, event }) => {
    setDefaultFileList(fileList);
    setHhumbUrl(fileList[0]);
    console.log(fileList);
  };

  return (
    <>
      <div className='container'>
        <Upload
          type='file'
          name='file'
          accept='image/*'
          customRequest={uploadImage}
          onChange={handleOnChange}
          listType='picture-card'
          defaultFileList={defaultFileList}
          className='image-upload-grid'>
          {defaultFileList.length >= 1 ? null : <div>Upload Button</div>}
        </Upload>
        {progress > 0 ? <Progress percent={progress} /> : null}
      </div>
    </>
  );
};

export default UploadProduct;
