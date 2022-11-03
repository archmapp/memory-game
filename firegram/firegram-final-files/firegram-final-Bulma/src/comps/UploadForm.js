import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg', 'image/jfif', 'image/webp']

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('次の拡張子を持つファイルを選択してください。 (png, jpg, jfif, webp)')
    }
  };

  return (
		<form>
			<label id="label0">
				<input id="input0" type="file" onChange={handleChange} />
				<span id="span0">+</span>
			</label>
			<div className="output">
				{error && <div className="error">{error}</div>}
				{file && <div>{file.name}</div>}
				{file && <ProgressBar file={file} setFile={setFile} />}
			</div>
		</form>
	)
}

export default UploadForm;