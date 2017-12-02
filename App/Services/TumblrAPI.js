
import React from 'react'

// import { connect } from 'react-redux'
// var tumblr = require('tumblr.js');

import { google, facebook, twitter, tumblr } from 'react-native-simple-auth';

// var tumblr = require('tumblr.js');

export class TumblrManager extends React.Component {

    constructor (props) {
        super(props)
        console.log("EYOOOOOO")
        tumblr({
            appId: '3vCpe1Z4Oe51BvEorrmKBYYygMBrhHywsuvnasB29XAl5AB895',
            appSecret: 'nk6cLUKGIA3Y52xB6kkOVBqpcr3ezdQ5X8NVTsUp9h2rv4dVAb',
            callback: 'testapp://authorize',
                    }).then((info) => {
                        console.log(info)
            // info.user - user details from the provider
            // info.credentials - tokens from the provider
          }).catch((error) => {
            console.log(error)
            
            // error.code
            // error.description
          });
          
    }
    
    _updateUserInfo() {

            console.log("?????")

    }
    
    
    
    
}    

// const mapStateToProps = (state) => {
//     return {
//       // ...redux state to props here
//     }
//   }
  
//   const mapDispatchToProps = (dispatch) => {
//     return {
//     }
//   }
  
//   export default connect(mapStateToProps, mapDispatchToProps)(TumblrManager)
  

