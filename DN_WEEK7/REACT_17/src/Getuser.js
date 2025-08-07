import React, { Component } from 'react';

class Getuser extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      firstName: '',
      imageUrl: ''
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch('https://api.randomuser.me/');
      const data = await response.json();
      const user = data.results[0];
      this.setState({
        title: user.name.title,
        firstName: user.name.first,
        imageUrl: user.picture.large
      });
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }

  render() {
    const { title, firstName, imageUrl } = this.state;
    return (
      <div style={styles.card}>
        {imageUrl && <img src={imageUrl} alt="User" style={styles.image} />}
        <h2>{title} {firstName}</h2>
      </div>
    );
  }
}

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '20px',
    maxWidth: '300px',
    textAlign: 'center',
    backgroundColor: '#f2f2f2'
  },
  image: {
    borderRadius: '50%',
    width: '150px',
    height: '150px',
    objectFit: 'cover'
  }
};

export default Getuser;
