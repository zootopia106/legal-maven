import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './LegalTopics.css';

// Import Components
import PageHeader from './components/PageHeader';

class LegalTopics extends Component {
  constructor(props) {
    super(props);

    this.category = [
      {
        title: 'Start-Ups',
        topics: [
          {
            title: 'Should I incorporate?',
            href: '/legaltopics/incorporate'
          },
          {
            title: 'Can I trademark?',
            href: '/legaltopics/trademark'
          },
          {
            title: 'Do I need to set up payroll?',
            href: '/legaltopics/payroll'
          }
        ]
      },
      {
        title: 'Real Estate',
        topics: [
          {
            title: 'Do I owe transfer tax? (CA only)',
            href: '/legaltopics/transfertax'
          },
          {
            title: 'Am I entitled to a refund of my security deposit?',
            href: '/legaltopics/securitydeposit'
          }
        ]
      }
    ];
  }

  onSearch(event) {
    this.setState({ keyword: event.target.value });
  }

  render() {
    const categories = this.category.map((category, index) => {
      const topics = category.topics
      .map((topic, index) => {
        return (
          <Link key={index} className={styles['item']} to={topic.href}>
            {topic.title}
          </Link>
        );
      });

      if (topics.length)
        return (
          <div key={index} className={styles['category']}>
            <div className={styles['category-title']}>
                { category.title }
            </div>
            { topics }
          </div>
        )
      else
        return null;
    });

    return (
      <div className={`${styles.legaltopics} wow fadeIn`}>
        <div className={ styles.background } />
        <PageHeader />
        <div className={styles['title-container']}>
          <div className={styles['main-title']}>
            Let&apos;s get started, please select a topic.
          </div>
        </div>
        <div className={`${styles['main-container']} container`}>
          { categories }
        </div>
      </div>
    );
  }
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {

  };
}

LegalTopics.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(LegalTopics);
