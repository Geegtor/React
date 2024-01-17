import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import RouterComponent from './RouterComponent';
import styles from './App.module.scss';
import WarningModal from './components/UI/Modal/WarningModal/WarningModal';
import ExitModalContent from './components/UI/Modal/ModalContent/ExitModalContent/ExitModalContent';
import WrongFormatModalContent from './components/UI/Modal/ModalContent/WrongFormatModalContent/WrongFormatModalContent';
import BigSizeModalContent from './components/UI/Modal/ModalContent/BigSizeModalContent/BigSizeModalContent';
import CandidateWrongFormatModalContent from './components/UI/Modal/ModalContent/CandidateWrongFormatModalContent/CandidateWrongFormatModalContent';
import CandidateBigSizeModalContent from './components/UI/Modal/ModalContent/CandidateBigSizeModalContent/CandidateBigSizeModalContent';
import { changeCandidateFile, showFileModalMessageWrongFormat, showFileModalMessageBigSize } from './store/actions/candidateFileActions';
import { changeProfilePhoto, showModalMessageWrongFormat, showModalMessageBigSize } from './store/actions/profilePhotoActions';
import { toggleExitModalPopUp } from './store/actions/modalActions';

function App() {
  const isExitModalOpen = useSelector((state) => state.profile.modal.exitModal);
  const isWrongFormatModalOpen = useSelector(
    (state) => state.profile.profilePhoto.isWrongFormatModalOpen,
  );
  const isBigSizeModalOpen = useSelector((state) => state.profile.profilePhoto.isBigSizeModalOpen);
  const isCandidateWrongFormatModalOpen = useSelector(
    (state) => state.profile.candidateFile.isWrongFormatModalOpen,
  );
  const isCandidateBigSizeModalOpen = useSelector(
    (state) => state.profile.candidateFile.isBigSizeModalOpen,
  );
  return (
    <div className={styles.App}>
      <Router>
        { isExitModalOpen && (
          <WarningModal classForContainer="exit_modal_container" toggleExitModalPopUp={toggleExitModalPopUp}>
            <ExitModalContent toggleExitModalPopUp={toggleExitModalPopUp} />
          </WarningModal>
        )}
        { isWrongFormatModalOpen && (
          <WarningModal classForContainer="exit_modal_container" toggleExitModalPopUp={showModalMessageWrongFormat}>
            <WrongFormatModalContent
              changeProfilePhoto={changeProfilePhoto}
              showModalMessageWrongFormat={showModalMessageWrongFormat}
            />
          </WarningModal>
        )}
        { isBigSizeModalOpen && (
          <WarningModal classForContainer="exit_modal_container" toggleExitModalPopUp={showModalMessageBigSize}>
            <BigSizeModalContent
              changeProfilePhoto={changeProfilePhoto}
              showModalMessageBigSize={showModalMessageBigSize}
            />
          </WarningModal>
        )}
        { isCandidateWrongFormatModalOpen && (
        <WarningModal classForContainer="exit_modal_container" toggleExitModalPopUp={showFileModalMessageWrongFormat}>
          <CandidateWrongFormatModalContent
            changeCandidateFile={changeCandidateFile}
            showModalMessageWrongFormat={showFileModalMessageWrongFormat}
          />
        </WarningModal>
        )}
        { isCandidateBigSizeModalOpen && (
          <WarningModal classForContainer="exit_modal_container" toggleExitModalPopUp={showFileModalMessageBigSize}>
            <CandidateBigSizeModalContent
              changeCandidateFile={changeCandidateFile}
              showModalMessageBigSize={showFileModalMessageBigSize}
            />
          </WarningModal>
        )}
        <RouterComponent />
      </Router>
    </div>
  );
}

export default App;
