import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from '../../../index';

const defaultProps = {
  isOpen: false,
  i18n: {
    heading: 'Do you wish to log out?',
    secondaryButton: 'Cancel',
    primaryButton: 'Log out',
    body:
      'Logging out also logs you out of each application that is open in the same browser.  To ensure a secure log out, close all open browser windows.',
  },
};

const propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  i18n: PropTypes.shape({
    heading: PropTypes.string,
    primaryButton: PropTypes.string,
    secondaryButton: PropTypes.string,
    body: PropTypes.string,
  }),
};

const SuiteHeaderLogoutModal = ({ isOpen, onClose, onLogout, i18n }) => {
  const mergedI18N = { ...defaultProps.i18n, ...i18n };
  return (
    <Modal
      open={isOpen}
      modalHeading={mergedI18N.heading}
      primaryButtonText={mergedI18N.primaryButton}
      secondaryButtonText={mergedI18N.secondaryButton}
      onSecondarySubmit={onClose}
      onRequestSubmit={onLogout}
      onRequestClose={onClose}
    >
      {mergedI18N.body}
    </Modal>
  );
};

SuiteHeaderLogoutModal.propTypes = propTypes;
SuiteHeaderLogoutModal.defaultProps = defaultProps;

export default SuiteHeaderLogoutModal;
