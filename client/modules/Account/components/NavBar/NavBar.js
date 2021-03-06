import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

// Import Style
import styles from './NavBar.css'

export function NavBar(props) {

  const path = props.location.pathname.split('/')
  const selected = path[path.length - 1]

  return (
    <div className={styles.navbar} style={{ zIndex: 1 }}>
      <div className={styles.nav}>

        <div className={ `${ styles['nav-item'] } ${ selected === 'profile' ? styles.active: '' } ` }><Link to='/account/profile'>Profile</Link></div>
        <div className={ `${ styles['nav-item'] } ${ selected === 'billing' ? styles.active: '' } ` }><Link to='/account/billing'>Billing</Link></div>
        <div className={ `${ styles['nav-item'] } ${ selected === 'documents' ? styles.active: '' } ` }><Link to='/account/documents'>Documents</Link></div>
        <div className={ `${ styles['nav-item'] } ${ selected === 'activity' ? styles.active: '' } ` }><Link to='/account/activity'>Activity</Link></div>

      </div>
    </div>
  );
}

NavBar.contextTypes = {
  router: PropTypes.object,
};

NavBar.propTypes = {

};

export default NavBar
