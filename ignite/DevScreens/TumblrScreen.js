
import React from 'react'
import {
  ScrollView,
  Image,
  View,
  TouchableOpacity,
  Linking
} from 'react-native'
import { Container, Header, Content, Button, Text } from 'native-base';
import { google, facebook, twitter, tumblr } from 'react-native-simple-auth';

// Styles
import styles from './Styles/PresentationScreenStyles'

export default class TumblrScreen extends React.Component {


  constructor(props) {
    super(props)

    this.state = {
      authorized: false,
      loaded: false,
      oauthToken: "",
      oauthTokenSecret: ""
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      this.state.authorized ?
        <View >
          <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={styles.container}>
            <Text >
              Default screens for development, debugging, and alpha testing
                    are available below.
                  </Text>
                  <Container>
        <Header />
        <Content>
          <Button full onPress={this.getLikes}>
            <Text>Primary</Text>
          </Button>
        </Content>
      </Container>

          </ScrollView>
        </View>
        :

        <Container>
        <Header />
        <Content>
          <Button full onPress={this.authorizeTumblr}>
            <Text>Primary</Text>
          </Button>
        </Content>
      </Container>

    )

  }

  authorizeTumblr = () => {

    tumblr({
      appId: '3vCpe1Z4Oe51BvEorrmKBYYygMBrhHywsuvnasB29XAl5AB895',
      appSecret: 'nk6cLUKGIA3Y52xB6kkOVBqpcr3ezdQ5X8NVTsUp9h2rv4dVAb',
      callback: 'lykes://authorize',
    }).then((info) => {

      this.setState({
        authorized: true,
        oauth_token: info.credentials.oauth_token,
        oauth_token_secret: info.credentials.oauth_token_secret,
        blogID: info.user.blogs[0].name + ".tumblr.com"         
      }, this.getLikes );        

    }).catch((error) => {
      
      console.log(error)
      this.setState({
        authorized: false,
        oauth_token: "",
        oauth_token_secret: ""        
        });

      });

  }

  getLikes = () => {

    var date = new Date()
    // var timeInt = date.getTime()
    var timeInt = Math.round(date.getTime() / 1000);

    console.log(timeInt)
    var url = 'https://api.tumblr.com/v2/blog/' + this.state.blogID +
      '/likes?api_key=' + '3vCpe1Z4Oe51BvEorrmKBYYygMBrhHywsuvnasB29XAl5AB895' +
      '&offset=21' +
      '&limit=20' //+
    // '&before=' + timeInt


    // console.log(date)
    console.log(url)


    fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Authorization": this.state.oauth_token
      }
    })
      .then(function (response) { return response.json(); })
      .then(function (data) {

        console.log("data")
        console.log(data)

        console.log("liked")
        var likedPosts = data.response.liked_posts
        console.log(likedPosts)

        console.log("meta")
        var meta = data.meta
        console.log(meta)

        // console.log("liked")
        // console.log(Object.keys(data));

      }).catch(function (error) {
        console.log(error)
        console.log("error");
      });

    this.setState({
      loaded: true,
    });

//api.tumblr.com/v2/blog/{blog-identifier}/likes?api_key={key}	
    // fetch("api.tumblr.com/v2/blog/{blog-identifier}/likes?api_key={key}	")
    // .then()
    
  }    

  getBlogInfo = () => {

    // https://api.tumblr.com/v2/blog/scipsy.tumblr.com/info
    // fetch("api.tumblr.com/v2/blog/{blog-identifier}/likes?api_key={key}	")
    //   .then()

    
  }

// async function getMoviesFromApi() {
//   try {
//     let response = await fetch(
//       "https://facebook.github.io/react-native/movies.json"
//     );
//     let responseJson = await response.json();
//     return responseJson.movies;
//   } catch (error) {
//     console.error(error);
//   }
// }

  _updateUserInfo() {

    console.log("?????")

  }




}    