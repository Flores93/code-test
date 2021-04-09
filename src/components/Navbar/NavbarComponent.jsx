import { AppBar, fade, makeStyles, Toolbar } from '@material-ui/core'
import { useSelector } from 'react-redux'

import NavLinkItem from './NavLinkItem'

import belloteroLogo from '../../assets/img/bellotero.png'
import { selectMenuItems } from '../../redux/selectors/navbarSelector'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  // menuButton: {
  //   marginRight: theme.spacing(2),
  // },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  navLinkItems: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
}))

const NavbarComponent = () => {
  const menuItems = useSelector(selectMenuItems)
  const classes = useStyles()

  return (
    <>
      <div className={classes.root}>
        <AppBar color="inherit" position="static">
          <div className="container">
            <Toolbar>
              <img src={belloteroLogo} alt="Belloterio.io" />
              <div className={classes.title} />
              {menuItems.map(({ route, text }) => (
                <NavLinkItem
                  key={text}
                  to={`/${route}`}
                  label={text}
                  styles={classes.navLinkItems}
                />
              ))}
            </Toolbar>
          </div>
        </AppBar>
      </div>
    </>
  )
}

export default NavbarComponent
