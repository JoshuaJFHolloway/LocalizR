import history from '../history';
import * as auth0 from 'auth0-js'

class Auth {
    auth0 = new auth0.WebAuth({
        domain: 'slath.eu.auth0.com',
        clientID: 'qsZlI0HHcX2dPXajSwmc3KkNiAlNcVmA',
        redirectUri: 'http://localhost:3000/callback',
        audience: 'https://slath.eu.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    });

    login() {
        this.auth0.authorize();
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
            } else if (err) {
                console.log(err);
            }
            history.replace('/home');
        });
    }

    setSession(authResult) {
        // Set the time that the Access Token will expire at
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage
            .setItem('access_token', authResult.accessToken)
            .setItem('id_token', authResult.idToken)
            .setItem('expires_at', expiresAt);
        // navigate to the home route
        history.replace('/home');
    }

    logout() {
        // Clear Access Token and ID Token from local storage
        localStorage
            .removeItem('access_token')
            .removeItem('id_token')
            .removeItem('expires_at');
        // navigate to the home route
        history.replace('/home');
    }

    isAuthenticated() {
        // Check whether the current time is past the
        // Access Token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }
}

export default Auth;
