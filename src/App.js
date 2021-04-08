import React, { useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import Modal from "./comps/Modal";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import SignIn from "./comps/SignIn";
import { auth } from "./firebase/config";
import "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import SignOut from "./comps/SignOut";

// const ImageGrid = React.lazy(() => import("./comps/ImageGrid")); // Lazy-loaded
import ImageGrid from "./comps/ImageGrid";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [Loading, setLoading] = useState(false);

  const loader = () => {
    setLoading(false);
  };
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
            {Loading ? (
              <div className='loading'>
                <PulseLoader color={"#a18cd1"} loading={Loading} size={150} />
              </div>
            ) : (
              <ImageGrid
                setSelectedImg={setSelectedImg}
                setLoading={setLoading}
                loader={loader}
              />
            )}
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
