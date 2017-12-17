import React from 'react';
import { View, Button, Text } from 'react-native';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('home init');
  }

  render() {
    return (
      <View>
        <Text>Welcome</Text>
        <Text>Email: {this.props.user.email}</Text>
        {/* <Button
          color="#FFFFFF"
          onPress={this.onSubmit.bind(this)}
          title="SIGN OUT"
        /> */}
      </View>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(Home);
