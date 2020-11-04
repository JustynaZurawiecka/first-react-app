import React from 'react';
import {NavLink, Link} from 'react-router-dom'; 
import styles from './Header.scss';
import Container from '../Container/Container';
import { settings } from '../../data/dataStore';
import Icon from '../Icon/Icon';

class Header extends React.Component {
  static defaultProps = {
    icon: settings.header.icon,
  };
  render() {
    const { icon} = this.props;
    return (
      <header className={styles.component}>
          <Container>
              <div className={styles.wrapper}>
                  <Link className={styles.logo} to='/'>
                      <Icon name={icon} />
                  </Link>
                  <nav>
                    <NavLink exact to='/' activeClassName='active'>Home</NavLink>
                    <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
                    <NavLink exact to='/faq' activeClassName='active'>FAQ</NavLink>
                  </nav>
              </div>
          </Container>
      </header>
    );
  }
}

export default Header;