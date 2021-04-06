import React, { useState } from "react";
import ImageGrid from "./comps/ImageGrid";
import Modal from "./comps/Modal";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import SignIn from "./comps/SignIn";
import { auth } from "./firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import SignOut from "./comps/SignOut";
function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [user] = useAuthState(auth);
  return (
    <div className='App'>
      <header>
        <h1>FireGram</h1>
        <div style={{ textAlign: "right" }}>
          <SignOut />
        </div>
      </header>
      <section>
        {user ? (
          <div>
            <Title />
            <UploadForm />
            <ImageGrid setSelectedImg={setSelectedImg} />
            {selectedImg && (
              <Modal
                selectedImg={selectedImg}
                setSelectedImg={setSelectedImg}
              />
            )}
          </div>
        ) : (
          <SignIn />
        )}
      </section>
    </div>
  );
}

export default App;
