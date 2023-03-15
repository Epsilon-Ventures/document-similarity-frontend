import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function FileResponse() {
  const { state } = useLocation();
  const [fileResponse] = useState(
    state?.fileResponse ? state.fileResponse : [],
  );

  return (
    <div>
      {fileResponse.map((oneResponse) => (
        <>
          {oneResponse.map((item) => (
            <h3 key={item[0]?.id}>{item[0]?.id}</h3>
          ))}
        </>
      ))}
    </div>
  );
}

export default FileResponse;
