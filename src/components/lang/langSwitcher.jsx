import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, MenuItem, IconButton } from '@mui/material';
import LanguageIcon from "@mui/icons-material/Language";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (lang) => {
    console.log('Changing language to', lang);  // Add this to check the language change
    i18n.changeLanguage(lang);
    changeDirection(lang)
    handleClose();
  };

  const changeDirection = (lang) => {
    if (lang === 'ar') {
      document.documentElement.dir = 'rtl'; // Change to RTL (Right-to-Left) for Arabic
    } else {
      document.documentElement.dir = 'ltr'; // Change to LTR (Left-to-Right) for English and others
    }
  };

  
  return (
    <>
      <IconButton
        id="language-botton"
        aria-label="language switcher"
        onClick={handleClick}
        color="#5f4a37"
      >
        <LanguageIcon />
      </IconButton>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
        <MenuItem onClick={() => changeLanguage('fr')}>Français</MenuItem>
        <MenuItem onClick={() => changeLanguage('ar')}>العربية</MenuItem>
      </Menu>
    </>
  );
};

export default LanguageSwitcher;
