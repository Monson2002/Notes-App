import React from "react";

import { useState } from "react";

function Titlebar(props) {

  const [note, setnote] = useState(false)

  const toggleNote = (e) => {
    e.preventDefault()
    setnote(!note)
  }

  return (
    <>
      <div className={`${note ? "opacity-10" : "opacity-100"} flex justify-start items-center my-20 w-auto text-center`}>
        <div className="max-w-5xl">
          <h1 className="text-5xl font-bold">NoteLify</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary"
          onClick={toggleNote}>Add a Note</button>
        </div>
      </div>
      {/* Add Note */}
      <div className={`${note ? "absolute" : "hidden"} flex justify-center items-center h-screen w-full`}>
        <div className="card shadow-lg bg-base-100 w-1/2">
          <div className="card-body">
            <div className='flex justify-between items-center'>
              <h2 className="card-title">Notes</h2>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"
              className={`hover:cursor-pointer h-3 w-auto`}
              style={{color: "#d0d7e1;"}}
              onClick={toggleNote}>
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
              /></svg>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input type="text" placeholder="Note Title" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea placeholder="Note Description" className="textarea h-24 textarea-bordered"></textarea>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Submit" className="btn btn-primary"></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Titlebar;
